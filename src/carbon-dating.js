const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let regexpr = /[A-Za-z]/;
  if (typeof sampleActivity === 'undefined' || typeof sampleActivity !== 'string' || regexpr.test(sampleActivity) || +sampleActivity <= 0 
  || +sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  let firstPointPosition = sampleActivity.indexOf('.');
  if (firstPointPosition !== -1) {
    var secondPointPosition = sampleActivity.indexOf('.', firstPointPosition + 1);
  }
  if (secondPointPosition !== -1) {
    sampleActivity = sampleActivity.slice(0, secondPointPosition);
  }
  let ln = Math.log(MODERN_ACTIVITY/Number(sampleActivity));
  let k = 0.693/HALF_LIFE_PERIOD;
  let result = Math.ceil(ln/k);
  return result;
};
