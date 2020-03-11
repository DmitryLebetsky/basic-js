module.exports = function createDreamTeam(members) {
  let result = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        while(members[i].includes(' ')) {
          members[i] = members[i].replace(' ', '');
        }
      }
    }
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        result.push(members[i][0].toUpperCase());
      }
    }
    return result.sort().join('');
  } else return false;
};