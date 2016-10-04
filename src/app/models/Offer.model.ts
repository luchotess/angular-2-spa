import {AEPCustomer} from "./AEPCustomer.model";

export class Offer {
    id          : string        = "";
    name        : string        = "";
    duration    : string        = "";
    startDate   : string        = "";
    value       : number        = 0;
    isGreen     : boolean       = false;
    customer    : AEPCustomer   = new AEPCustomer;

    constructor(Customer) {
        Object.assign(this, Customer);
    }
}
