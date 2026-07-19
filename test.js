const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { readData } = require("./index.js");

test("readData returns a promise (async/await, no callback)", async () => {
  const result = readData();
  assert.ok(result instanceof Promise, "readData() should return a Promise");
  const data = await result;
  assert.match(data, /hello from data\.txt/);
});

test("uses fs/promises and async/await instead of callbacks", () => {
  const source = fs.readFileSync(path.join(__dirname, "index.js"), "utf-8");
  assert.match(source, /fs\/promises/);
  assert.match(source, /async function|async \(/);
  assert.doesNotMatch(source, /readFile\([^)]*,\s*\([^)]*err/s, "still using the callback style");
});
