import app from "commander";
import cfg from "../package.json";
import convert from "./convert";

app
  .version(cfg.version)
  .option("-i, --input <file>", "input file")
  .option("-o, --output <file>", "output file (optional)")
  .description("Generate prettier html content from text file.");

app.parse(process.argv);

const options = app.opts();

if (!options.input) {
  app.help();
}

convert(options);
