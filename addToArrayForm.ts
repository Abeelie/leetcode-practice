const addToArrayForm = (num: number[], k: number): number[]  => {
    const result: number[] = [];
    let nums1: string = num.join("");
    let nums2: string = k.toString();
    let i: number = nums1.length - 1;
    let j: number = nums2.length - 1;
    let carry: number = 0;
    
    while(i >= 0 || j >= 0 || carry){
        let sum = 0;
        
        if(i >= 0) sum += parseInt(nums1.charAt(i--));
        
        if(j >= 0) sum += parseInt(nums2.charAt(j--));
        
        sum += carry
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }
    
    return result.reverse();
};