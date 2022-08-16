const findMode = (root: TreeNode | null): number[] => {
    const dict: {} = {};
    let maxFreq: number = 1;
  
    const traverse = (node: TreeNode | null): void => {
      if (node.left) traverse(node.left);
  
      if (dict[node.val]) {
        dict[node.val]++;
        maxFreq = Math.max(maxFreq, dict[node.val]);
      } else {
        dict[node.val] = 1;
      }
  
      if (node.right) traverse(node.right);
    }
  
    traverse(root);
  
    return Object.keys(dict).map(Number).filter(key => dict[key] === maxFreq);
  };