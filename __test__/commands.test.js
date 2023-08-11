import assert from "assert";
import { execSync } from "child_process";
import fs from "fs";

const exec = (c) => execSync(c).toString();

describe("CLI test", () => {
  it("should correctly input and display html", () => {
    assert.equal(
      exec("node index -i ./__test__/files/test.txt").slice(0, -1),
      fs.readFileSync("./__test__/files/test.html", "utf8")
    );
  });

  it("should display help message", () => {
    assert.equal(
      exec("node index"),
      `Usage: index [options]

Generate prettier html content from text file.

Options:
  -V, --version        output the version number
  -i, --input <file>   input file
  -o, --output <file>  output file (optional)
  -h, --help           display help for command
`
    );
  });
});

describe("CLI file write", () => {
  afterAll(() => {
    exec("rm ./__test__/temp.html");
  });

  it("should save file correctly.", () => {
    exec("node index -i ./__test__/files/test.txt -o ./__test__/temp.html");
    assert.equal(
      fs.readFileSync("./__test__/temp.html", "utf8"),
      fs.readFileSync("./__test__/files/test.html", "utf8")
    );
  });
});
