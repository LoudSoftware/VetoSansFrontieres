export class ExamenModel {

    name: string;
    examdate: string;
    hour: number;
    description: string;
    firstname: string;
    lastname: string;
    cost: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
