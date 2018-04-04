export class OwnerModel {
	
	ownerno: number;
    firstname: string;
    lastname: string;
	street: string;
	city: string;
	state: string;
	postalcode: string;
	telephone: number;

    /* Current SCHEMA
    "ownerno":1,
	"firstname":"John",
	"lastname":"Smith",
	"street":"Diagon alley",
	"city":"Hogwarts",
	"state":"QC",
	"postalcode":"WIZWIZ",
	"telephone":"16666666"
   */

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
	
}
