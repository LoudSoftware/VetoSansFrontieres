export class PersonnelModel {

    personnelno: number;
    firstname: string;
    lastname: string;
    bdate: string;
	sex: string;
	sin: number;
	personnelposition: string;
	salary: number;
	street: string;
	city: string;
	state: string;
	postalcode: string;
	clinicno: number;
	clinicname: string;

    /* Current SCHEMA
    "personnelno":1,
	"firstname":"Sarah",
	"lastname":"Kerrigan",
	"bdate":"1990-04-03T20:15:57.465Z"
	"sex":"f",
	"sin":1234567,
	"personnelposition":"manager",
	"salary":10,
	"street":"XelNaga",
	"city":"Tower",
	"state":"Starcraft",
	"postalcode":"j2h5l2"
	,"clinicno":1,
	"clinicname":"INEEDHEALING"
    */

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
