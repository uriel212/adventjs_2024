// Organize an inventory by category
function organizeInventory(inventory) {
    const objOrganized = {}
    
    inventory.forEach(item => {
      const {name, quantity, category} = item
  
      if(!objOrganized[category]) {
        objOrganized[category] = {}
      }
  
      if(!objOrganized[category][name]) {
        objOrganized[category][name] = 0
      }
  
      objOrganized[category][name] += quantity
  
    })
  
    return objOrganized
  }