import { IVehicleState } from '@/models/vehicleTypes';
import { INotificationState } from '@/models/notificationTypes';

export interface IRootState {
  vehicle: IVehicleState;
  notification: INotificationState;
}
