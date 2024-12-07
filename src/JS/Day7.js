function fixPackages(packages) {
    const stack = []
    const result = packages.split('')

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '(') {
            stack.push(i)
        } else if (result[i] === ')') {
            const openIndex = stack.pop()
            const reversed = result.splice(openIndex + 1, i - openIndex - 1).reverse()
            result.splice(openIndex, 2, ...reversed)
            i = openIndex
        }
    }

    return result.join('')
}