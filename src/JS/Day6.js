// Validate if the gift (*) is inside the box
function inBox(box) {
    return box.slice(1, -1).some(row => {
        const index = row.indexOf('*')
        return index > 0 && index < row.length - 1
    })
}