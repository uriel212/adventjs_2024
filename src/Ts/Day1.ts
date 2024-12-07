function prepareGiftsTS(gifts: number[]): number[] {
    return [...new Set(gifts)].sort((a, b) => a - b);
}