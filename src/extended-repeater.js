module.exports = function repeater(str, options) {
    let result = '';
    let standartOptions = {
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|',
    }
    str = str + '';
    if (typeof options.addition !== 'undefined') {
        options.addition = options.addition + '';
    }
    if (typeof options.repeatTimes == 'undefined') {
        options.repeatTimes = standartOptions.repeatTimes;
    }
    if (typeof options.separator == 'undefined') {
        options.separator = standartOptions.separator;
    }
    if (typeof options.addition == 'undefined') {
        options.addition = standartOptions.addition;
    }
    if (typeof options.additionRepeatTimes == 'undefined') {
        options.additionRepeatTimes = standartOptions.additionRepeatTimes;
    }
    if (typeof options.additionSeparator == 'undefined') {
        options.additionSeparator = standartOptions.additionSeparator;
    }
    for (let i = 1; i <= options.repeatTimes; i++) {
        result = result + str;
        for (let p = 1; p <= options.additionRepeatTimes; p++) {
            result = result + options.addition;
            if (p !== options.additionRepeatTimes) {
                result = result + options.additionSeparator;
            }
        }
        if (i !== options.repeatTimes) {
            result = result + options.separator;
        }
    }
    return result;
};
  