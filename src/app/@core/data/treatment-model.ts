export class TreatmentModel {

    name: string;
    description: string;
    cost: number;
    qtity: number;


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
