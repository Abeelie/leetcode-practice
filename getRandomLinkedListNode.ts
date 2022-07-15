class Solution {
    head: ListNode | null
    values: any[];
  
    constructor(head: ListNode | null) {
      this.head = head;
      this.values = [];
  
      while(this.head){
        this.values.push(this.head);
        this.head = this.head.next;
      }
    }
      
    getRandom(): number {
      const randomIndex: number = Math.floor(Math.random() * this.values.length);
      return this.values[randomIndex].val;
    }
  }