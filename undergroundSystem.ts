class UndergroundSystem {
    passengers: {};
    destinationTimes: {};
    
    constructor(){
        this.passengers = {};
        this.destinationTimes = {};
    }
    
    checkIn(id: number, stationName: string, t: number): void {
        if(!(id in this.passengers)) this.passengers[id] = [];
        this.passengers[id].push(stationName, t);
    }
    
    checkOut(id: number, stationName: string, t: number): void {
        if(id in this.passengers){
            const completedTrip: string = `${this.passengers[id][0]}-${stationName}`;
            const completedDestinationTime: number = t - this.passengers[id][1];
            
            if(!(completedTrip in this.destinationTimes)){
                this.destinationTimes[completedTrip] = []; 
            }
            
            this.destinationTimes[completedTrip].push(completedDestinationTime);
            
            delete this.passengers[id];
        }
    }
    
    getAverageTime(startStation: string, endStation: string): number{
        const completedTrip: string = `${startStation}-${endStation}`;
        
        if(completedTrip in this.destinationTimes){
            const sum: number = this.destinationTimes[completedTrip].reduce((p, c) => p + c);
            const avg: number = sum / this.destinationTimes[completedTrip].length;
            return avg;
        }
    }
}