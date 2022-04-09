class Solution {
    constructor(nums){
        this.nums = nums;
    }
    reset(){
        return this.nums;
    }
    shuffle(){
        const copy = [...this.nums];
        for(let i=copy.length-1; i>=0; i--){
            const j = Math.floor(Math.random() * (i+1));
            let temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        return copy;
    }
}