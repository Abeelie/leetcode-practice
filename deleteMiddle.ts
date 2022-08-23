const deleteMiddle = (head: ListNode | null): ListNode | null => {
    let length: number = 0;
    let curr1:ListNode | null  = head;
    let curr2: ListNode | null = head;
    let result: ListNode | null = curr2;
    let middle: number = 0;
    
    while(curr1){
        length++;
        curr1 = curr1.next;
    }
    
    if(length < 2) return null;
    
    middle = Math.floor(length / 2) - 1;
    
    while(curr2){
        if(middle === 0){
            curr2.next = curr2.next.next;
            break;
        }
        
        middle--;
        curr2 = curr2.next;
    }
    
    
    return result;
};