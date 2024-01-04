export interface ListDevicesRequest {

}

export interface ListDevicesResponse {
   devices:Array<{
    id: number,
    imei: string,
    latitude: string,
    longitude: string,
    batteryPercentage: string,
    gsmSignal: string,
    createdAt: Date,
    updatedAt:Date
   }> 
}