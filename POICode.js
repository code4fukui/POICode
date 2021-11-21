import { CSV } from "https://js.sabae.cc/CSV.js";

class POICode {
  static url = "https://code4fukui.github.io/POICode/"; // default
  static setDataPath(url) {
    POICode.url = url;
  }

  static fn = "poicode.csv";
  static csv = null;
  static async init() {
    if (POICode.csv) {
      return POICode.csv;
    }
    //const url = "";
    const csv = await CSV.fetch(POICode.url + POICode.fn);
    csv.forEach(line => line[1] = parseInt(line[1]));
    POICode.csv = csv;
    return csv;
  }
  static async find(s) {
    const csv = await POICode.init();
    const match = csv.filter(line => line[2].indexOf(s) >= 0 || line[3].indexOf(s) >= 0);
    //return match.map(m => [m[m.length - 1], POICode.getCodeByRecord(m)]);
    return match.map(m => m[2]);
  }
  static getCodeByRecord(value) {
    for (let i = value.length - 2; i >= 0; i--) {
      const v = value[i];
      if (parseInt(v) != 0) {
        return v;
      }
    }
    return null;
  }
  static async encode(s) {
    const csv = await POICode.init();
    const value = csv.find(line => line[2] == s);
    if (!value) {
      return null;
    }
    return value[1];
  }
  static async decode(code) {
    const csv = await POICode.init();
    const value = csv.find(line => line.find(l => l == code || parseInt(l) == parseInt(code)));
    if (!value) {
      return null;
    }
    return value[2];
  }
}

export { POICode };
