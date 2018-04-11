export class AnimalModel {


    animalno: number;
    name: string;
    bdate: Date;
    inscriptiondate: Date;
    clinicno: number;
    ownerno: number;
    animaltype: number;
    description: string;
    isalive: boolean;
    clinicname: string;
    firstname: string;
    lastname: string;
    typename: string;

    /* Current SCHEMA
    animalno	1
    name	"Flash"
    bdate	"2018-05-31T22:45:36.620Z"
    inscriptiondate	"2018-03-31T22:45:40.756Z"
    clinicno	1
    ownerno	1
    animaltype	1
    description	"the fastest turtle ever"
    isalive	true
    clinicname	"INEEDHEALING"
    firstname	"John"
    lastname	"Smith"
    typename	"Tortoise"
    */

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}


