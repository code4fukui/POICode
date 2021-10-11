import { SelectTree } from "https://code4fukui.github.io/select-tree/select-tree.js";
//import { SelectTree } from "./select-tree.js";
import { POICode } from "./POICode.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

class SelectPOICode extends SelectTree {
  constructor() {
    super(null, { showLabel: false });
    this.init();
  }
  _formatLine(l) {
    return [l[0], l[1] + " " + l[2] + (l[3] && l[2] != l[3] ? " (" + l[3] + ")" : ""), l[2]];
  }
  async init() {
    const url = "https://code4fukui.github.io/POICode/";
    //const url = "";
    const csv = await CSV.fetch(url + POICode.fn);
    for (let i = 0; i < csv.length; i++) {
      const l = csv[i];
      csv[i] = this._formatLine(l);
    }
    this.csv = csv;
    super.init(csv);
  }
  set value(v) {
    if (!this.csv) {
      return;
    }
    v += " ";
    const line = this.csv.find(l => l[1].startsWith(v));
    if (!line) {
      super.value = "";
      return;
    }
    super.value = line; // ["建物", "0406 コワーキングスペース"];
  }
  get value() {
    if (!super.value) {
      return "";
    }
    const m = super.value.match(/^\d\d\d\d/);
    if (!m) {
      return "";
    }
    return m;
  }
}

customElements.define("select-poicode", SelectPOICode);

export { SelectPOICode };
