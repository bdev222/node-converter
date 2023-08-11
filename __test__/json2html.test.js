import json2html from "../src/lib/json2html";

describe("Json to html test", () => {
  it("check sample convert", () => {
    expect(json2html({ tag: "div", text: "hello" })).toBe(
      `<div>
  hello
</div>`
    );
  });

  it("check self closing brace", () => {
    expect(json2html({ tag: "div" })).toBe(`<div />`);
  });

  it("check children and self closing brace", () => {
    expect(
      json2html({ tag: "div", children: [{ tag: "div" }, { tag: "div" }] })
    ).toBe(
      `<div>
  <div />
  <div />
</div>`
    );
  });
});
