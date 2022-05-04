const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
    let sum: number = 0, queue: TreeNode[] = [root];
  
    while(queue.length) {
      const node: TreeNode = queue.shift();
      if(node.val >= low && node.val <= high){
        sum += node.val;
      }
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  
    return sum;
};