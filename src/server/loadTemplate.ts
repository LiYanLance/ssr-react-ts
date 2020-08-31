import path from "path";
import { readFileSync } from "fs";

const template = (() => {
  const templatePath = path.resolve(__dirname, "template/index.html");
  return readFileSync(templatePath).toString() || "";
})();

export const loadTemplate = () => template
