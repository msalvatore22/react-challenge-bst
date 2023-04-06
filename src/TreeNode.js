import React from "react";

// TreeNode component representing a single node in the binary search tree
const TreeNode = ({ node }) => {
  return (
    <div className="node-container">
      {node && (
        <>
          <div className="node-style">{node.value}</div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <TreeNode node={node.left} />
            <TreeNode node={node.right} />
          </div>
        </>
      )}
      {!node && <div className="empty-node"></div>}
    </div>
  );
}

export default TreeNode;