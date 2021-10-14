const toHump = (name) =>
  name.replace(/\_(\w)/g, (all, letter) => {
    return letter.toUpperCase();
  });

exports.replaceConfig = (str, config) =>
  Object.keys(config).reduce((acc, key) => {
    return acc.replace(new RegExp(`\\${key}`, "g"), config[key]);
  }, str);

exports.getNameByUrl = (url) =>
  `${toHump(url.replace(new RegExp("[/-]", "g"), "_"))}Req`;
