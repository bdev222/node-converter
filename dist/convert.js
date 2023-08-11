"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _json2html = _interopRequireDefault(require("./lib/json2html"));
var _text2json = _interopRequireDefault(require("./lib/text2json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const convert = options => {
  _fs.default.readFile(options.input, "utf8", async (err, data) => {
    if (err) {
      console.error(`Can't read ${options.input}`);
      return;
    }
    try {
      const html = (0, _json2html.default)((0, _text2json.default)(data));
      if (options.output) {
        _fs.default.writeFile(options.output, html, err => {
          if (err) {
            throw err;
          }
          console.info(`Html content was successfully written in ${options.output}`);
        });
      } else {
        console.info(html);
      }
    } catch (parseError) {
      console.error(parseError);
    }
  });
};
var _default = convert;
exports.default = _default;