const { jsonFromText } = require("../dist/index.js");
const data = require("./data.json");

describe("jsonFromText should work", () => {
  test("on objects", () => {
    const testData = data.object;
    const dataStr = JSON.stringify(testData);

    const str = `Lorem ipsum dolor sit amet, ${dataStr} consectetur adipiscing elit.`;
    const jsonResults = jsonFromText(str);
    expect(jsonResults).toStrictEqual(testData);
  });

  test("on arrays", () => {
    const testData = data.array;
    const dataStr = JSON.stringify(testData);

    const str = `Lorem ipsum dolor sit amet, ${dataStr} consectetur adipiscing elit.`;
    const jsonResults = jsonFromText(str, "array");
    expect(jsonResults).toStrictEqual(testData);
  });

  test("on braced strings array", () => {
    const testData = data.array;
    const dataStr = JSON.stringify(testData);

    const str = `Lorem ipsum d[olor sit amet, ${dataStr} consectetur adipiscing ]elit.`;
    const jsonResults = jsonFromText(str, "array");
    expect(jsonResults).toStrictEqual(testData);
  });

  test("on braced strings object", () => {
    const testData = data.object;
    const dataStr = JSON.stringify(testData);

    const str = `Lorem ipsum dolor sit { amet, ${dataStr} consectetur adipiscing } elit.`;
    const jsonResults = jsonFromText(str);
    expect(jsonResults).toStrictEqual(testData);
  });
});
