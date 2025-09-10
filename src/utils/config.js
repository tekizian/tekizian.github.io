const prefix = "REACT_APP_";
const config = {
  get: (key) => process.env[prefix + key],
};

export default config;
