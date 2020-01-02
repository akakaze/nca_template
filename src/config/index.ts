import fs from "fs";
import { JSONSchema } from "json-schema-typed";

let configDefaultSchema = fs.readFileSync("src/config/default.json", {
  encoding: "utf8"
});

interface schema extends JSONSchema {
  properties: { [key: string]: JSONSchema };
}

let schema: schema = JSON.parse(configDefaultSchema);

export default schema;
