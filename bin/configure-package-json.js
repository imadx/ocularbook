import { readFileSync, writeFileSync } from "fs";

const [_nodePath, _scriptPath, packageJsonPath] = process.argv;

const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
packageJson.scripts.ocularbook = "ocularbook";

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
