# POICode

https://code4fukui.github.io/POICode/

## Usage

```js
import { POICode } from "https://code4fukui.github.io/POICode/POICode.js";

console.log(await POICode.encode("高等専門学校"));
console.log(await POICode.decode("1508"));
console.log(await POICode.find("学校"));
```

## Data / API

This project uses a CSV file hosted at https://code4fukui.github.io/POICode/poicode.csv, which contains a list of POI (Point of Interest) codes and names.

## License

MIT License