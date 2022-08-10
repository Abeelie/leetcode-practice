
const digitSum = function(s: string, k: number): string {
    if(s.length <= k) return s;
    
    while(true){
        let group: string = ""; 
        
        for(let i = 0; i < s.length; i += k){
            let subgroup: string = "";
            let total: number = 0;
            
            subgroup += s.slice(i, i + k);
            
            for(const num of subgroup){
                total += parseInt(num);
            }
            
            group += total.toString();
        }
        
        if(group.length <= k) {
            return group;
        }else {
            s = group;
        }
    }
};