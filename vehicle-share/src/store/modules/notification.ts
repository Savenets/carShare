import { ActionTree } from 'vuex';
import { IRootState } from '@/models/rootState'
import { INotificationState, INotification } from '@/models/notificationTypes'

export const namespaced = true

export const state: INotificationState = {
  notifications: []
}

// let keep it simple for now
let nextId = 1

export const mutations = {
  PUSH(state: INotificationState, notification: INotification) {
    return {
      ...state.notifications,
      ...{notification, id: nextId++},
    };
    // Im not sure it proves immutability of state
    /*state.notifications.push({
      ...notification,
      id: nextId++
    })*/
  },
  DELETE(state: INotificationState, notificationToRemove: INotification) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}

export const actions: ActionTree<INotificationState, IRootState> = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  }
}
