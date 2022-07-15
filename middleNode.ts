const middleNode = (head: ListNode | null): ListNode | null => {
    let curr: ListNode = head;
    let length: number = 0;
    
    while(curr){
        length++;
        curr = curr.next;
    }
    
    let i: number = Math.floor(length / 2);
    
    while(i){
        head = head.next;
        i--
    }
    
    return head;
};