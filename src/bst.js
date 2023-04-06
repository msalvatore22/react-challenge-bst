import React, { useState } from 'react';
import TreeNode from './TreeNode';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function BinarySearchTree() {
  const [root, setRoot] = useState(null);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  }

  const insert = (e) => {
    e.preventDefault();

    const newValue = parseInt(value);
    if (isNaN(newValue)) return;

    const newNode = new Node(newValue);

    if (!root) {
      setRoot(newNode);
      setValue('');
      return;
    }

    let current = root;

    while (true) {
      if (newValue === current.value) {
        setValue('');
        return;
      }

      if (newValue < current.value) {
        if (current.left === null) {
          current.left = newNode;
          setValue('');
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          setValue('');
          return;
        }
        current = current.right;
      }
    }
  }

  return (
    <div>
      <form onSubmit={insert}>
        <label>
          Value:
          <input type="number" value={value} onChange={handleChange} />
        </label>
        <button type="submit">Insert</button>
      </form>
      <h2>Tree Structure</h2>
      <TreeNode node={root} />
    </div>
  );
}

export default BinarySearchTree;