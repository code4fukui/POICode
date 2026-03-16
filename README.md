# POICode

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A JavaScript library for handling Point of Interest (POI) codes used in various mapping applications. It allows you to encode/decode POI codes and search for related POI codes by keyword.

## Usage

```js
import { POICode } from "https://code4fukui.github.io/POICode/POICode.js";

console.log(await POICode.encode("高等専門学校"));
console.log(await POICode.decode("1508"));
console.log(await POICode.find("学校"));
```

## Data / API

This project uses a CSV file hosted at https://code4fukui.github.io/POICode/poicode.csv, which contains a list of POI codes and names.

## License

MIT License — see [LICENSE](LICENSE).