# Extract Json From Text

Extract a JSON oboject or array from any piece of text

## Usage

### Install

```bash
npm i extract-json-from-text
```

### Import

```js
const { jsonFromText } = require("extract-json-from-text");
```

```ts
import { jsonFromText } from "extract-json-from-text";
```

### Object Extraction

By default, it looks for an object in the string text

```ts
const str = `Lorem ipsum dolor sit amet, { "hello": "World" } consectetur adipiscing elit.`;
const jsonResults = jsonFromText(str);
console.log(jsonResults); // Object { "hello": "World" }
```

### Array

If you have to extract an array from the text

```ts
const str = `Lorem ipsum dolor sit amet, [ "hello", "World" ] consectetur adipiscing elit.`;
const jsonResults = jsonFromText(str, "array");
console.log(jsonResults); // Array [ "hello", "World" ]
```
