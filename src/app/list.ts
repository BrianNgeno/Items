export class List {
    showDescription: boolean;
    constructor(public id: number,public activity: string, public description: string, public completion_date:Date) {
        this.showDescription=false;
    }

}
