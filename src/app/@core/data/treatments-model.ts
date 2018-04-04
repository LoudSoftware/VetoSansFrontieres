export class TreatmentsModel {
	
	tno: number;
    description: string;
    cost: number;

    /* Current SCHEMA
    {"tno":2,"description":"Traitement a la Peniciline","cost":50}
    */

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
	
}
