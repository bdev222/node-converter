import fs from "fs";

import json2html from "./lib/json2html";
import text2json from "./lib/text2json";

const convert = (options) => {
  fs.readFile(options.input, "utf8", async (err, data) => {
    if (err) {
      console.error(`Can't read ${options.input}`);
      return;
    }

    try {
      const html = json2html(text2json(data));
      if (options.output) {
        fs.writeFile(options.output, html, (err) => {
          if (err) {
            throw err;
          }
          console.info(
            `Html content was successfully written in ${options.output}`
          );
        });
      } else {
        console.info(html);
      }
    } catch (parseError) {
      console.error(parseError);
    }
  });
};

export default convert;
