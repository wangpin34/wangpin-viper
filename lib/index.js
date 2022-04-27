function getEnv(key) {
  return process.env[key];
}

function loadEnvs(prefix) {
  const env = {};
  Object.keys(process.env).forEach(key => {
    if (key.startsWith(prefix)) {
      env[key.replace(prefix, '')] = process.env[key];
    }
  });
  return env;
}

module.exports.getEnv = getEnv
module.exports.loadEnvs = loadEnvs