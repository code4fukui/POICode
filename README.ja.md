# POICode

さまざまなマッピングアプリケーションで使用されるPOI（Point of Interest）コードを扱うためのJavaScriptライブラリです。POIコードのエンコード/デコードや、キーワードによる関連POIコードの検索が可能です。

## 使用方法

```js
import { POICode } from "https://code4fukui.github.io/POICode/POICode.js";

console.log(await POICode.encode("高等専門学校"));
console.log(await POICode.decode("1508"));
console.log(await POICode.find("学校"));
```

## データ / API

本プロジェクトでは、 https://code4fukui.github.io/POICode/poicode.csv にホストされているCSVファイルを使用しています。このファイルにはPOIコードと名称のリストが含まれています。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
