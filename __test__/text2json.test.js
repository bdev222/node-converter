import text2json from "../src/lib/text2json";

describe("Text to Json Test", () => {
  const sampleObject = { tag: "div", text: "hello" };

  it("should parsed", () => {
    expect(text2json("{tag:'div',text:'hello'}")).toStrictEqual(sampleObject);
    expect(text2json("{'tag':'div','text':'hello'}")).toStrictEqual(
      sampleObject
    );
  });

  it("should not parsed", () => {
    try {
      text2json("{tag:div',text:'hello'}");
    } catch (err) {
      expect(err.message).toBe("Can't parse the text to json.");
    }

    try {
      text2json("{tag':'div',text:'hello'}");
    } catch (err) {
      expect(err.message).toBe("Can't parse the text to json.");
    }

    try {
      text2json("{:'div',text:'hello'}");
    } catch (err) {
      expect(err.message).toBe("Can't parse the text to json.");
    }

    try {
      text2json("{tag:'div',text:'}");
    } catch (err) {
      expect(err.message).toBe("Can't parse the text to json.");
    }
  });

  it("empty file", () => {
    try {
      text2json("");
    } catch (err) {
      expect(err.message).toBe("Can't parse the text to json.");
    }
  });
});
