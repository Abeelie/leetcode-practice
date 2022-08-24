const sortedListToBST = (head: ListNode | null): TreeNode | null => {
    const nums: number[] = getLinkedListValues(head);
    
    const createBST = (nums: number[], left: number = 0, right: number = nums.length - 1): TreeNode | null => {
        if(left > right) return null;
        const mid: number = Math.floor((left + right) / 2);
        const root: TreeNode = new TreeNode(nums[mid]);
        root.left = createBST(nums, left, mid - 1);
        root.right = createBST(nums, mid + 1, right);
        
        return root;
    }
    
    return createBST(nums);
};

const getLinkedListValues = (head: ListNode | null): number[] => {
    const values: number[] = [];
    
    while(head){
        values.push(head.val);
        head = head.next;
    }
    
    return values;
}