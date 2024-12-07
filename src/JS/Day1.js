// Return numbers without duplicates and in ascending order
function prepareGifts(gifts) {
    // Code here
    return [...new Set(gifts)].sort((a, b) => a - b);
  }
  