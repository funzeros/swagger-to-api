(async () => {
  const fs = require("fs");
  const path = require("path");
  const configBody = require("../sta.config.json");
  const { replaceConfig, getNameByUrl } = require("./util");
  const baseUrl = path.join(__dirname, "..");
  const { docsUrl, apiHeader, apiTemplate } = configBody;
  const realDocsUrl = path.join(baseUrl, docsUrl);
  const docsBody = require(realDocsUrl);
  const br = "\r\n";
  const dirName = docsBody.info.title;
  console.log("\x1B[42m%s\x1B[49m", `开始转换《${dirName}》的api`);
  const apiPaths = docsBody.paths;
  let apiCount = 0;
  const apiList = Object.entries(apiPaths).map(([url, config]) => {
    const baseName = getNameByUrl(url);
    return Object.keys(config)
      .map((method) => {
        const { parameters, description, summary } = config[method];
        const configData = {
          url,
          method,
        };
        let parameterList = [];
        parameters &&
          (parameterList = Array.from(
            new Set(parameters.map(({ in: type }) => type))
          ));
        const configDataStr = JSON.stringify(configData);
        const parameterListStr = parameterList.join(",");
        apiCount++;
        return (
          `// ${summary || description || "暂无描述"}` +
          br +
          replaceConfig(apiTemplate.join(br), {
            $name: `${method}${baseName}`,
            $config: `${configDataStr.slice(0, -1)}${
              parameterListStr ? "," + parameterListStr : ""
            }${configDataStr.slice(-1)}`,
            $arg: parameterListStr,
          })
        );
      })
      .join(br);
  });
  const wrapDirPath = path.join(baseUrl, "apis");
  const isWrapDirExists = fs.existsSync(wrapDirPath);
  !isWrapDirExists && fs.mkdirSync(wrapDirPath);
  const dirPath = path.join(wrapDirPath, dirName);
  const isDirExists = fs.existsSync(dirPath);
  !isDirExists && fs.mkdirSync(dirPath);
  fs.writeFileSync(
    path.join(dirPath, "api.js"),
    [...apiHeader, ...apiList].join(br)
  );
  console.log("\x1B[45m%s\x1B[49m", `转换结束，共计${apiCount}个api`);
})();
