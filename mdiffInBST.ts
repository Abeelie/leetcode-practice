const minDiffInBST = (root: TreeNode | null): number => {
    let min: number = Infinity; 
    let vals: number[] = [], i: number = 0;
      
    const traverseBST = (node: TreeNode) => {
      if(node.left) traverseBST(node.left);
      vals.push(node.val);
      if(node.right) traverseBST(node.right);
    };
      
    traverseBST(root);
      
    while(i < vals.length-1){
      const diff: number = Math.abs(vals[i] - vals[i+1]); 
      min = Math.min(diff, min);
      i++;
    }
      
    return min;
  };