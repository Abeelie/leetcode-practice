const nextLargerNodes = (head: ListNode | null): number[] => {
    const values: number[] = [];
    const answer: number[] = [];
    
    while(head){
        values.push(head.val);
        head = head.next;
    }
    
    for(const [i, value] of values.entries()){
        const nums: number[] = values.slice(i);
        const nextGreater: number = nums.find((num) => num > values[i]);
         
        if(!nextGreater){
            answer.push(0);
        }else{
            answer.push(nextGreater);   
        }
    }

    return answer;
};