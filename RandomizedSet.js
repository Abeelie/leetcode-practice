class RandomizedSet {
    constructor(){
      this.arraySet = [];
    }
  
    insert(num){
      if(!this.arraySet.includes(num)){
        this.arraySet.push(num);
        return true;
      }
      
      return false;
    }
  
    remove(num){
      if(!this.arraySet.includes(num)){
        return false;
      }
       
      const idx = this.arraySet.indexOf(num);
  
      this.arraySet.splice(idx, 1);
        
      return true;
    }
  
    getRandom(){
      const randomIndex = (
        Math.floor(Math.random() * this.arraySet.length)
      );
      
      return this.arraySet[randomIndex];
    }
  }