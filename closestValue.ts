const closestValue = (root: TreeNode | null, target: number): number => {
    let closests: number = root.val;

    const traverse = (root: TreeNode): void => {
        if(!root) return;

        const currDiff: number = Math.abs(root.val - target);
        const prevDiff: number = Math.abs(closests - target);

        if(currDiff < prevDiff) closests = root.val;

        if(root.val > target) traverse(root.left);
        if(root.val < target) traverse(root.right);
    }

    traverse(root);

    return closests;
} 