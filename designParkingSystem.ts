class ParkingSystem {
    big: boolean[];
    medium: boolean[];
    small: boolean[];

    constructor(big: number, medium: number, small: number){
        this.big = new Array(big).fill(true);
        this.medium = new Array(medium).fill(true);
        this.small = new Array(small).fill(true);
    }
    
    addCar(carType: number): boolean {
        let parked: boolean = false;
        let parkingSpace;
        
        switch(carType){
            case 1:
                parkingSpace = this.big;
                break;
            case 2:
                parkingSpace = this.medium;
                break;
            case 3:
                parkingSpace = this.small;
                break;
            default:
                break;
        }
        
        for(let i = 0; i < parkingSpace.length; i++){
            const isEmpty: boolean = parkingSpace[i]; 
            
            if(isEmpty){
                parkingSpace[i] = false;
                parked = true;
                break;
            }
        }
        
        return parked;
    }
}