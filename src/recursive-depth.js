module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if ((arr.some(function(element) {
            return Array.isArray(element);
        }))) {
            arr = arr.flat();
            return 1 + this.calculateDepth(arr);
        } else return 1;
}
}

