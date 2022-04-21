const path = require("path");
const fs = require("fs");

process.env = Object.assign({
    NODE_ENV: "development",
    SOURCE_BACKEND: path.resolve(process.cwd(), "tmp/backend"),
    SOURCE_FRONTEND: path.resolve(process.cwd(), "tmp/frontend"),
    SOURCE_CONNECTOR: path.resolve(process.cwd(), "tmp/connector")
}, process.env);



if (!fs.existsSync(process.env.SOURCE_BACKEND)) {
    console.error("Backend source code not found. Run `npm run fetch:backend`");
    process.exit(1);
}

//fs.rmSync(path.resolve(process.cwd(), "docs/backend/system"));
//fs.rmSync(path.resolve(process.cwd(), "docs/backend/components"));
//fs.rmSync(path.resolve(process.cwd(), "docs/backend/helper"));


require("./scripts/files.js");