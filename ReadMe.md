## JSON2HTML converter CLI

#### Generate prettier html content from text file in which there is JSON object represents html dom structure.

### Version

0.0.1

### How to setup the CLI

```bash
npm install
npm build
```

### How to use it

After install it, you can use below scripts by your preference.

To see the result in your CLI

```bash
node index [--input | -i] <json-text-file-path>
```

To save the result as a file

```bash
node index [--input | -i] <json-text-file-path> [--output | -o] <html-file-out-path>
```

Here you can replace `<json-text-file-path>` and `<html-file-out-path>` with your real path.

### Available scripts to test CLI

To see the convert example

```bash
npm run convert:example
```

To see the output example

```bash
npm run out:example
```

To run the unit testing

```bash
npm run test
```
