export class listing {
    public address: string;
    
    private stays: number;

    constructor() {
        this.address = "";
    }

    public setAddress(address: string) {
        this.address = address;
    }

    public setStays(stays: number) {
        // Calculate the stays
        this.stays = 20;
    }

    public getAge() {
        return this.stays;
    }
}