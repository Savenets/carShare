export enum NotificationTypes {
  error = 'error',
  success = 'success',
}

export interface INotification {
  id?: string;
  message: string;
  type: NotificationTypes.error | NotificationTypes.success;
}

export interface INotificationState {
  notifications: INotification[] | []
}
