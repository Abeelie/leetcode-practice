const isUnivalTree = root => {
    const values = new Set();
    const traverse = node => {
        if(node.left) traverse(node.left);
        values.add(node.val);
        if(node.right) traverse(node.right)
    }
    traverse(root);
    return values.size === 1;
}