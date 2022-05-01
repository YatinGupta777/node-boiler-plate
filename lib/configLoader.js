const Nconf = require('nconf');
const config = require('@root/config');

const loadConfig = () => {
  const conf = Nconf.argv().env();
  const envtype = conf.get('NODE_ENV');

  if (envtype) {
    const envConfig = config[envtype];
    Nconf.overrides({ store: envConfig });
  }

  const defaultConfig = config.default;
  Nconf.defaults({ store: defaultConfig });
  console.log('Loaded Nconf Configurations'); // eslint-disable-line no-console
};

module.exports = { loadConfig };
