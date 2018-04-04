export class ClinicModel {
	
    clinicno: number;
    telephone: number;
    street: string;
    city: string;
    state: string;
    postalcode: string;
    fax: number;
    clinicname: string;
    manager: number;
	firstname: string;
	lastname: string;

    /* Current SCHEMA
    {"clinicno":1,
	"telephone":"11111111",
	"street":"medic",
	"city":"city",
	"state":"state",
	"postalcode":"MMMMMM",
	"fax":null,
	"clinicname":"INEEDHEALING",
	"manager":1,
	"firstname":"Sarah",
	"lastname":"Kerrigan"}
    */

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
