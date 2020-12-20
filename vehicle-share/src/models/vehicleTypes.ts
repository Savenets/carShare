export enum VehicleTypes {
  automobile = 'automobile',
  motorcycle = 'motorcycle',
  trailer = 'trailer',
  truck = 'truck',
}

export type vehicleType = {[key in VehicleTypes]: string}

export interface IVehicle {
  id: string;
  type: vehicleType; //automobile, motorcycle, truck etc
  make: string; // marka auto eg bmv, renault etc
  model: string;
  images?: string[];
}

export interface IVehicleState {
  vehicles: IVehicle[];
  vehicle: object | IVehicle;
  totalVehicles: number;
}
