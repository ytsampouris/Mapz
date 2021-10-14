const DotEnv = require('dotenv');
const parsedEnv = DotEnv.config().parsed;

const argEnv = {};
process.argv.forEach((v, k) => {
  if (v.indexOf('--env.') === 0) {
    argEnv[v.substring(6)] = process.argv[k + 1]
  }
});

module.exports = function () {
  for (let key in parsedEnv) {
    if (typeof parsedEnv[key] === 'string') {
      parsedEnv[key] = JSON.stringify(parsedEnv[key])
    }
  }

  for (let key in argEnv) {
    parsedEnv[key] = JSON.stringify(argEnv[key])
  }

  return parsedEnv
}
