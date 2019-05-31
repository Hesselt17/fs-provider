export class listing {
    public address: string;
    public image: string;
    public id : number;

    private stays: number;

    constructor() {
        this.address = "";
        this.image = "";
        this.id = 0;
    }

    public setAddress(address: string) {
        this.address = address;
    }

    public setImage(image: string) {
        this.image = image;
    }

    public setStays(stays: number) {
        // Calculate the stays
        this.stays = 20;
    }

    public getAge() {
        return this.stays;
    }
}