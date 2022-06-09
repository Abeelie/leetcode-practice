const kthSmallest = (root: TreeNode | null, k: number): number => {
    const values: number[] = [];
  
    const traverse = (node: TreeNode): void => {
      if(node.left) traverse(node.left);
      values.push(node.val);
      if(node.right) traverse(node.right);
    }
  
    traverse(root);
      
    return values[k-1];
};