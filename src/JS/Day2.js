// Returning list of names 
function createFrame(names) {
    if (names.length === 0) return "No names to frame!";

    const maxLength = Math.max(...names.map(name => name.length));

    const frameWidth = maxLength + 2 + 2;

    const border = "*".repeat(frameWidth);

    const framedNames = names.map(name => `* ${name.padEnd(maxLength, " ")} *`);

    return [border, ...framedNames, border].join("\n");
}