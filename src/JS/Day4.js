// Creating a Christmas tree with a given height and ornament
function createXmasTree(height, ornament) {
    const tree = [];
    
    for (let i = 1; i <= height; i++) {
      const padding = "_".repeat(height - i);
      const ornaments = ornament.repeat((i * 2) - 1);
      tree.push(`${padding}${ornaments}${padding}`);
    }
  
    const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
    tree.push(trunk, trunk);
  
    return tree.join("\n");
  }
  