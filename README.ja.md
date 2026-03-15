# POICode

経緯中の地図アプリなどで使用される場所の分類コード(POIコード)を扱うためのJavaScriptライブラリです。POIコードをエンコード/デコードし、キーワードで関連するPOIコードを検索できます。

## 使い方

```js
import { POICode } from "https://code4fukui.github.io/POICode/POICode.js";

console.log(await POICode.encode("高等専門学校"));
console.log(await POICode.decode("1508"));
console.log(await POICode.find("学校"));
```

## データ / API

このプロジェクトは、https://code4fukui.github.io/POICode/poicode.csv に hosted されたCSVファイルを使用しています。このCSVファイルには、POI (Point of Interest) コードと名称のリストが含まれています。

## ライセンス

MIT License