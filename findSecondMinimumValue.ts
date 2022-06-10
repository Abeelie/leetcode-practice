const findSecondMinimumValue = (root: TreeNode | null): number => {
    const values = new Set([]);
    
    const traverse = (node: TreeNode | null): void => {
        if(node.left) traverse(node.left);
        values.add(node.val);
        if(node.right) traverse(node.right);
    }
    
    traverse(root);
    
    const nums: number[] = [...values]
    const firstMin: number = Math.min(...nums);
    const idx: number = nums.indexOf(firstMin);
    nums.splice(idx, 1);
    const secondMin: number = Math.min(...nums);
    
    return !nums.length ? -1 : secondMin ;
};