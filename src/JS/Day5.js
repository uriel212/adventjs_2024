// Validate and organize shoes
function organizeShoes(shoes) {
    const sizeMap = new Map()

    shoes.forEach(({ size, type }) => {
        const counts = sizeMap.get(size) || { I: 0, R: 0 }
        counts[type]++
        sizeMap.set(size, counts)
    });

    return Array.from(sizeMap.entries())
        .flatMap(([size, { I, R }]) => Array(Math.min(I, R)).fill(size))
}