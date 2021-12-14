import numeral from "numeral";
export default function initialLocale() {
  numeral.register("locale", "vi-mbs", {
    delimiters: {
      thousands: ",",
      decimal: ".",
    },
    abbreviations: {
      thousand: "N",
      million: "tr",
      billion: "Tỷ",
      trillion: "000 Tỷ",
    },
    ordinal: function () {
      return ".";
    },
    currency: {
      symbol: "₫",
    },
  });

  numeral.register("locale", "en-mbs", {
    delimiters: {
      thousands: ",",
      decimal: ".",
    },
    abbreviations: {
      thousand: "T",
      million: "M",
      billion: "B",
      trillion: "000 B",
    },
    ordinal: function () {
      return ".";
    },
    currency: {
      symbol: "₫",
    },
  });
}
