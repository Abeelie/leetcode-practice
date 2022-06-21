class MapSum {
    map: {};
  
    constructor(){
      this.map = {};
    }
  
    insert(key: string, val: any): void {
      this.map[key] = val;
    }
  
    sum(prefix: string): number {
      let sum = 0;
      for(const key in this.map){
        if(key.startsWith(prefix)){
          sum += this.map[key];
        }
      }
  
      return sum;
    }
  }