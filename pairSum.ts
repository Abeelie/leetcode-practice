const pairSum = (head: ListNode | null): number => {
    const nums: number[] = getLinkedListValues(head);
    let max: number = 0;
    
    for(const [i, num] of nums.entries()){
        const pair1: number = num;
        const pair2: number = nums[(nums.length - 1) - i];
        const sum = pair1 + pair2;
        if(pair2 > 0) max = Math.max(max, sum);
    }
    
    return max;
};



const getLinkedListValues = (head: ListNode | null): number[] => {
    const nums: number[] = [];
    let curr: ListNode | null = head;
    
    while(curr){
        nums.push(curr.val);
        curr = curr.next;
    }
    
    return nums;
}