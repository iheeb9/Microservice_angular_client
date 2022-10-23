import { TrottinetteLocation } from "./TrottinetteLocation";

export interface Location {
    id?:number;
    dateEnd?:Date;
    dateStart?:Date;
    trottinette?:TrottinetteLocation;
    userId?:number;


}