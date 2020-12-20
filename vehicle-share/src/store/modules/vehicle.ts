import { ActionTree } from 'vuex';
import { IRootState } from '@/models/rootState'
import vehicleService from '@/services/vehicleService'
import { IVehicleState, IVehicle } from '@/models/vehicleTypes';
import { NotificationTypes } from '@/models/notificationTypes';

export const namespaced = true

export const state: IVehicleState = {
  vehicles: [],
  vehicle: {},
  totalVehicles: 0
}

export const mutations = {
  ADD_VEHICLE(state: IVehicleState, vehicle: IVehicle) {
    state.vehicle = vehicle
  },
  GET_VEHICLES(state: IVehicleState, vehicles: IVehicle[]) {
    state.vehicles = vehicles
  },
  GET_VEHICLES_TOTAL(state: IVehicleState, totalVehicles: number) {
    state.totalVehicles = totalVehicles
  },
  SET_VEHICLE(state: IVehicleState, vehicle: IVehicle) {
    state.vehicle = vehicle
  }
}

export const actions: ActionTree<IVehicleState, IRootState> = {
  addVehicle({ commit, dispatch }, vehicle) {
    return vehicleService.postVehicle(vehicle)
      .then(() => {
        commit('ADD_VEHICLE', vehicle)
        commit('SET_VEHICLE', vehicle)
        const notification = {
          type: NotificationTypes.success,
          message: 'Your' + vehicle.type + '--has been created!'
        };
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: NotificationTypes.error,
          message: 'There was a problem adding your vehicle: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  getVehicles({ commit, dispatch }, { perPage, page }) {
    vehicleService.getVehicles(perPage, page)
      .then(response => {
        console.log('response.headers: ', response.headers)
        commit('GET_VEHICLES_TOTAL', parseInt(response.headers['x-total-count']))
        commit('GET_VEHICLES', response.data)
      })
      .catch(error => {
        const notification = {
          type: NotificationTypes.error,
          message: 'There was a problem fetching vehicles: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchVehicle({ commit, getters, dispatch }, id) {
    const vehicle = getters.getVehicleById(id)

    if (vehicle) {
      commit('SET_VEHICLE', vehicle)
    } else {
      vehicleService.getVehicle(id)
        .then(response => {
          commit('SET_VEHICLE', response.data)
        })
        .catch(error => {
          const notification = {
            type: NotificationTypes.error,
            message: 'There was a problem fretching the vehicle: ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  }
}

export const getters = {
  getVehicleById: (state: IVehicleState) => (id: number | string) => {
    return state.vehicles.find(vehicle => vehicle.id === id)
  }
}
