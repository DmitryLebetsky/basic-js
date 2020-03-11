module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            i = i + 1;
            continue;
        }
        if (arr[i] == '--discard-prev') {
            result.pop();
            continue;
        }
        if (arr[i] == '--double-next' && i !== arr.length - 1 && arr[i+1] !== '--double-next' && arr[i+1] !== '--discard-prev' 
        && arr[i+1] !== '--double-prev' && arr[i+1] !== '--discard-next') {
            result.push(arr[i+1]);
            continue;
        }
        if (arr[i] == '--double-prev' && i !== 0 && arr[i-1] !== '--double-next' && arr[i-1] !== '--discard-prev' 
        && arr[i-1] !== '--double-prev' && arr[i-1] !== '--discard-next') {
            result.push(arr[i-1]);
            continue;
        }
        if (arr[i] !== '--double-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next') {
            result.push(arr[i]);
        }
    }
    return result;
};
