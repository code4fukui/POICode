import * as t from "https://deno.land/std/testing/asserts.ts";
import { POICode } from "./POICode.js";

Deno.test("encode", async () => {
  t.assertEquals(await POICode.encode("山"), 101);
  t.assertEquals(await POICode.encode("その他物流施設"), 4099);
});
Deno.test("decode", async () => {
  t.assertEquals(await POICode.decode(101), "山");
  t.assertEquals(await POICode.decode(4099), "その他物流施設");
  t.assertEquals(await POICode.decode(5000), null);
});
Deno.test("find", async () => {
  const expected = [
    "遊園地",
    "テーマパーク",
    "ゲームセンター",
  ];
  t.assertEquals(await POICode.find("遊戯"), expected);
});
Deno.test("all", async () => {
  t.assertEquals((await POICode.find("")).length, 651);
});
