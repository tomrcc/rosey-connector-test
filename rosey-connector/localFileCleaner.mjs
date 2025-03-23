import { checkLocales } from "./checkLocales.mjs";
import { readConfigFile } from "./helpers/file-helper.mjs";

(async () => {
  const configData = await readConfigFile("./rosey/config.yaml");
  console.log("🏗️🏗️ Checking locales...");
  await checkLocales(configData);
  console.log("🏗️🏗️ Checked locales...");
})();
