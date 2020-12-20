import { IVehicle } from '../models/vehicleTypes'
import { apiClient } from '../helpers/appClient'

export default {
  getVehicles(perPage: number, page: number) {
    return apiClient.get('/vehicles?_limit=' + perPage + '&_page=' + page)
  },
  getVehicle(id: number | string) {
    return apiClient.get('/vehicle/' + id)
  },
  postVehicle(vehicle: IVehicle) {
    return apiClient.post('/vehicle', vehicle)
  }
}
