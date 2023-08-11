"use strict";

var _commander = _interopRequireDefault(require("commander"));
var _package = _interopRequireDefault(require("../package.json"));
var _convert = _interopRequireDefault(require("./convert"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_commander.default.version(_package.default.version).option("-i, --input <file>", "input file").option("-o, --output <file>", "output file (optional)").description("Generate prettier html content from text file.");
_commander.default.parse(process.argv);
const options = _commander.default.opts();
if (!options.input) {
  _commander.default.help();
}
(0, _convert.default)(options);