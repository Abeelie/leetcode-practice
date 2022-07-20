const getAllElements = (root1: TreeNode | null, root2: TreeNode | null): number[] => {
    const root1Values: number[] = [];
    const root2Values: number[] = [];
      
    const traverse = (node: TreeNode | null, values: number[]): void => {
      if(node === null) return;
      if(node.left) traverse(node.left, values);
      values.push(node.val);
      if(node.right) traverse(node.right, values);
    }
      
    traverse(root1, root1Values);
    traverse(root2, root2Values);
      
    const mergedValues = [];
      
    while(root1Values.length && root2Values.length){
        if(root1Values[0] < root2Values[0]){
            mergedValues.push(root1Values.shift());
        }else{
            mergedValues.push(root2Values.shift());
        }
    }
      
    const allElements = [...mergedValues, ...root1Values, ...root2Values];
      
    return allElements
  };