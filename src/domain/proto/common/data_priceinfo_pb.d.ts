// package: mktservice
// file: common/data_priceinfo.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class PriceInfoBasic extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getMarketcode(): common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap];
  setMarketcode(
    value: common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap]
  ): void;

  getSecuritiestype(): common_data_common_pb.ESecuritiesTypeMap[keyof common_data_common_pb.ESecuritiesTypeMap];
  setSecuritiestype(
    value: common_data_common_pb.ESecuritiesTypeMap[keyof common_data_common_pb.ESecuritiesTypeMap]
  ): void;

  hasFloorprice(): boolean;
  clearFloorprice(): void;
  getFloorprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setFloorprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCeilingprice(): boolean;
  clearCeilingprice(): void;
  getCeilingprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCeilingprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasReferenceprice(): boolean;
  clearReferenceprice(): void;
  getReferenceprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setReferenceprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getUnderlyingsymbol(): string;
  setUnderlyingsymbol(value: string): void;

  getCwissuername(): string;
  setCwissuername(value: string): void;

  getCwtype(): string;
  setCwtype(value: string): void;

  getCwmaturitydate(): string;
  setCwmaturitydate(value: string): void;

  getCwlasttradingdate(): string;
  setCwlasttradingdate(value: string): void;

  getCwexerciseratio(): string;
  setCwexerciseratio(value: string): void;

  hasCwexerciseprice(): boolean;
  clearCwexerciseprice(): void;
  getCwexerciseprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCwexerciseprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCwremainlasttradingdate(): boolean;
  clearCwremainlasttradingdate(): void;
  getCwremainlasttradingdate():
    | google_protobuf_wrappers_pb.Int64Value
    | undefined;
  setCwremainlasttradingdate(
    value?: google_protobuf_wrappers_pb.Int64Value
  ): void;

  getDifirsttradingdate(): string;
  setDifirsttradingdate(value: string): void;

  getDilasttradingdate(): string;
  setDilasttradingdate(value: string): void;

  getDiunderlying(): string;
  setDiunderlying(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfoBasic.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PriceInfoBasic
  ): PriceInfoBasic.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfoBasic,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfoBasic;
  static deserializeBinaryFromReader(
    message: PriceInfoBasic,
    reader: jspb.BinaryReader
  ): PriceInfoBasic;
}

export namespace PriceInfoBasic {
  export type AsObject = {
    ticker: string;
    marketcode: common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap];
    securitiestype: common_data_common_pb.ESecuritiesTypeMap[keyof common_data_common_pb.ESecuritiesTypeMap];
    floorprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    ceilingprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    referenceprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    underlyingsymbol: string;
    cwissuername: string;
    cwtype: string;
    cwmaturitydate: string;
    cwlasttradingdate: string;
    cwexerciseratio: string;
    cwexerciseprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    cwremainlasttradingdate?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    difirsttradingdate: string;
    dilasttradingdate: string;
    diunderlying: string;
  };
}

export class PriceInfoLastSale extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getSession(): common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
  setSession(
    value: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap]
  ): void;

  getEside(): common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
  setEside(
    value: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap]
  ): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setVolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasChangepricevalue(): boolean;
  clearChangepricevalue(): void;
  getChangepricevalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangepricevalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangepricepercentage(): boolean;
  clearChangepricepercentage(): void;
  getChangepricepercentage():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setChangepricepercentage(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  getColor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setColor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  getType(): PriceInfoLastSale.LSTypeMap[keyof PriceInfoLastSale.LSTypeMap];
  setType(
    value: PriceInfoLastSale.LSTypeMap[keyof PriceInfoLastSale.LSTypeMap]
  ): void;

  hasTotalsharestradedmt(): boolean;
  clearTotalsharestradedmt(): void;
  getTotalsharestradedmt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestradedmt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestradedmt(): boolean;
  clearTotalvaluestradedmt(): void;
  getTotalvaluestradedmt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestradedmt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTopvalue(): boolean;
  clearTopvalue(): void;
  getTopvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTopvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfoLastSale.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PriceInfoLastSale
  ): PriceInfoLastSale.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfoLastSale,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfoLastSale;
  static deserializeBinaryFromReader(
    message: PriceInfoLastSale,
    reader: jspb.BinaryReader
  ): PriceInfoLastSale;
}

export namespace PriceInfoLastSale {
  export type AsObject = {
    ticker: string;
    session: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
    eside: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
    price?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    volume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    changepricevalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changepricepercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    color: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    type: PriceInfoLastSale.LSTypeMap[keyof PriceInfoLastSale.LSTypeMap];
    totalsharestradedmt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestradedmt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    topvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };

  export interface LSTypeMap {
    MATCHED: 0;
    CALCULATED: 1;
  }

  export const LSType: LSTypeMap;
}

export class PriceInfoQuote extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getSession(): common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
  setSession(
    value: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap]
  ): void;

  getEside(): common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
  setEside(
    value: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap]
  ): void;

  clearDeepsList(): void;
  getDeepsList(): Array<PriceInfoQuote.DeepItem>;
  setDeepsList(value: Array<PriceInfoQuote.DeepItem>): void;
  addDeeps(
    value?: PriceInfoQuote.DeepItem,
    index?: number
  ): PriceInfoQuote.DeepItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfoQuote.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PriceInfoQuote
  ): PriceInfoQuote.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfoQuote,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfoQuote;
  static deserializeBinaryFromReader(
    message: PriceInfoQuote,
    reader: jspb.BinaryReader
  ): PriceInfoQuote;
}

export namespace PriceInfoQuote {
  export type AsObject = {
    ticker: string;
    session: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
    eside: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
    deepsList: Array<PriceInfoQuote.DeepItem.AsObject>;
  };

  export class DeepItem extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): void;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPrice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasVolume(): boolean;
    clearVolume(): void;
    getVolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

    getColor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    setColor(
      value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
    ): void;

    getPricedisplay(): string;
    setPricedisplay(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeepItem.AsObject;
    static toObject(includeInstance: boolean, msg: DeepItem): DeepItem.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: DeepItem,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): DeepItem;
    static deserializeBinaryFromReader(
      message: DeepItem,
      reader: jspb.BinaryReader
    ): DeepItem;
  }

  export namespace DeepItem {
    export type AsObject = {
      index: number;
      price?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
      volume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
      color: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
      pricedisplay: string;
    };
  }
}

export class PriceInfoQuotes extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasBestbid(): boolean;
  clearBestbid(): void;
  getBestbid(): PriceInfoQuote | undefined;
  setBestbid(value?: PriceInfoQuote): void;

  hasBestask(): boolean;
  clearBestask(): void;
  getBestask(): PriceInfoQuote | undefined;
  setBestask(value?: PriceInfoQuote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfoQuotes.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PriceInfoQuotes
  ): PriceInfoQuotes.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfoQuotes,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfoQuotes;
  static deserializeBinaryFromReader(
    message: PriceInfoQuotes,
    reader: jspb.BinaryReader
  ): PriceInfoQuotes;
}

export namespace PriceInfoQuotes {
  export type AsObject = {
    ticker: string;
    bestbid?: PriceInfoQuote.AsObject;
    bestask?: PriceInfoQuote.AsObject;
  };
}

export class PriceInfoForeignRoom extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getSession(): common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
  setSession(
    value: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap]
  ): void;

  hasCurrentroom(): boolean;
  clearCurrentroom(): void;
  getCurrentroom(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCurrentroom(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalroom(): boolean;
  clearTotalroom(): void;
  getTotalroom(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalroom(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalbuyqty(): boolean;
  clearTotalbuyqty(): void;
  getTotalbuyqty(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalbuyqty(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsellqty(): boolean;
  clearTotalsellqty(): void;
  getTotalsellqty(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsellqty(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalbuyvalue(): boolean;
  clearTotalbuyvalue(): void;
  getTotalbuyvalue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalbuyvalue(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsellvalue(): boolean;
  clearTotalsellvalue(): void;
  getTotalsellvalue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsellvalue(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalnetvalue(): boolean;
  clearTotalnetvalue(): void;
  getTotalnetvalue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalnetvalue(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getColor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setColor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfoForeignRoom.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PriceInfoForeignRoom
  ): PriceInfoForeignRoom.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfoForeignRoom,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfoForeignRoom;
  static deserializeBinaryFromReader(
    message: PriceInfoForeignRoom,
    reader: jspb.BinaryReader
  ): PriceInfoForeignRoom;
}

export namespace PriceInfoForeignRoom {
  export type AsObject = {
    ticker: string;
    session: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
    currentroom?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalroom?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalbuyqty?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsellqty?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalbuyvalue?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsellvalue?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalnetvalue?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    color: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  };
}

export class PriceInfoSummary extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getSession(): common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
  setSession(
    value: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap]
  ): void;

  hasPrevclosedprice(): boolean;
  clearPrevclosedprice(): void;
  getPrevclosedprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPrevclosedprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasOpenprice(): boolean;
  clearOpenprice(): void;
  getOpenprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setOpenprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasHighestprice(): boolean;
  clearHighestprice(): void;
  getHighestprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setHighestprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLowestprice(): boolean;
  clearLowestprice(): void;
  getLowestprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLowestprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasClosedprice(): boolean;
  clearClosedprice(): void;
  getClosedprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setClosedprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAverageprice(): boolean;
  clearAverageprice(): void;
  getAverageprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getOpenpricecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setOpenpricecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  getHighestpricecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setHighestpricecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  getLowestpricecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setLowestpricecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  getClosedpricecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setClosedpricecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  getAveragepricecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setAveragepricecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  hasTotalsharestraded(): boolean;
  clearTotalsharestraded(): void;
  getTotalsharestraded(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestraded(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestraded(): boolean;
  clearTotalvaluestraded(): void;
  getTotalvaluestraded(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestraded(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsharestradedmt(): boolean;
  clearTotalsharestradedmt(): void;
  getTotalsharestradedmt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestradedmt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestradedmt(): boolean;
  clearTotalvaluestradedmt(): void;
  getTotalvaluestradedmt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestradedmt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsharestradedpt(): boolean;
  clearTotalsharestradedpt(): void;
  getTotalsharestradedpt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestradedpt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestradedpt(): boolean;
  clearTotalvaluestradedpt(): void;
  getTotalvaluestradedpt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestradedpt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalremainbuyvolume(): boolean;
  clearTotalremainbuyvolume(): void;
  getTotalremainbuyvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalremainbuyvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalremainsellvolume(): boolean;
  clearTotalremainsellvolume(): void;
  getTotalremainsellvolume():
    | google_protobuf_wrappers_pb.Int64Value
    | undefined;
  setTotalremainsellvolume(
    value?: google_protobuf_wrappers_pb.Int64Value
  ): void;

  hasDiopeninterest(): boolean;
  clearDiopeninterest(): void;
  getDiopeninterest(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setDiopeninterest(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHighestprice52week(): boolean;
  clearHighestprice52week(): void;
  getHighestprice52week(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHighestprice52week(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasLowestprice52week(): boolean;
  clearLowestprice52week(): void;
  getLowestprice52week(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLowestprice52week(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfoSummary.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PriceInfoSummary
  ): PriceInfoSummary.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfoSummary,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfoSummary;
  static deserializeBinaryFromReader(
    message: PriceInfoSummary,
    reader: jspb.BinaryReader
  ): PriceInfoSummary;
}

export namespace PriceInfoSummary {
  export type AsObject = {
    ticker: string;
    session: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
    prevclosedprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    openprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    highestprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lowestprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    closedprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    averageprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    openpricecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    highestpricecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    lowestpricecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    closedpricecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    averagepricecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    totalsharestraded?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestraded?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsharestradedmt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestradedmt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsharestradedpt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestradedpt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalremainbuyvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalremainsellvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    diopeninterest?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    highestprice52week?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    lowestprice52week?: google_protobuf_wrappers_pb.Int64Value.AsObject;
  };
}

export class PriceInfoUnderlying extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasLastprice(): boolean;
  clearLastprice(): void;
  getLastprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLastprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBiasprice(): boolean;
  clearBiasprice(): void;
  getBiasprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBiasprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getColor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setColor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfoUnderlying.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PriceInfoUnderlying
  ): PriceInfoUnderlying.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfoUnderlying,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfoUnderlying;
  static deserializeBinaryFromReader(
    message: PriceInfoUnderlying,
    reader: jspb.BinaryReader
  ): PriceInfoUnderlying;
}

export namespace PriceInfoUnderlying {
  export type AsObject = {
    ticker: string;
    lastprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    biasprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    color: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  };
}

export class CWPriceInfo extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getStatus(): CWPriceInfo.EStatusMap[keyof CWPriceInfo.EStatusMap];
  setStatus(value: CWPriceInfo.EStatusMap[keyof CWPriceInfo.EStatusMap]): void;

  hasUnderlying(): boolean;
  clearUnderlying(): void;
  getUnderlying(): PriceInfoUnderlying | undefined;
  setUnderlying(value?: PriceInfoUnderlying): void;

  hasBalanceprice(): boolean;
  clearBalanceprice(): void;
  getBalanceprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBalanceprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBiasprice(): boolean;
  clearBiasprice(): void;
  getBiasprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBiasprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTheoreticalprice(): boolean;
  clearTheoreticalprice(): void;
  getTheoreticalprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTheoreticalprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CWPriceInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CWPriceInfo
  ): CWPriceInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CWPriceInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CWPriceInfo;
  static deserializeBinaryFromReader(
    message: CWPriceInfo,
    reader: jspb.BinaryReader
  ): CWPriceInfo;
}

export namespace CWPriceInfo {
  export type AsObject = {
    ticker: string;
    status: CWPriceInfo.EStatusMap[keyof CWPriceInfo.EStatusMap];
    underlying?: PriceInfoUnderlying.AsObject;
    balanceprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    biasprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    theoreticalprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };

  export interface EStatusMap {
    ITM: 0;
    ATM: 1;
    OTM: 2;
  }

  export const EStatus: EStatusMap;
}

export class DIPriceInfo extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasUnderlying(): boolean;
  clearUnderlying(): void;
  getUnderlying(): PriceInfoUnderlying | undefined;
  setUnderlying(value?: PriceInfoUnderlying): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DIPriceInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DIPriceInfo
  ): DIPriceInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DIPriceInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DIPriceInfo;
  static deserializeBinaryFromReader(
    message: DIPriceInfo,
    reader: jspb.BinaryReader
  ): DIPriceInfo;
}

export namespace DIPriceInfo {
  export type AsObject = {
    ticker: string;
    underlying?: PriceInfoUnderlying.AsObject;
  };
}

export class PriceInfo extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasQuotes(): boolean;
  clearQuotes(): void;
  getQuotes(): PriceInfoQuotes | undefined;
  setQuotes(value?: PriceInfoQuotes): void;

  hasLastsale(): boolean;
  clearLastsale(): void;
  getLastsale(): PriceInfoLastSale | undefined;
  setLastsale(value?: PriceInfoLastSale): void;

  hasSummary(): boolean;
  clearSummary(): void;
  getSummary(): PriceInfoSummary | undefined;
  setSummary(value?: PriceInfoSummary): void;

  hasUnderlying(): boolean;
  clearUnderlying(): void;
  getUnderlying(): PriceInfoUnderlying | undefined;
  setUnderlying(value?: PriceInfoUnderlying): void;

  hasForeign(): boolean;
  clearForeign(): void;
  getForeign(): PriceInfoForeignRoom | undefined;
  setForeign(value?: PriceInfoForeignRoom): void;

  hasCwpriceinfo(): boolean;
  clearCwpriceinfo(): void;
  getCwpriceinfo(): CWPriceInfo | undefined;
  setCwpriceinfo(value?: CWPriceInfo): void;

  hasDipriceinfo(): boolean;
  clearDipriceinfo(): void;
  getDipriceinfo(): DIPriceInfo | undefined;
  setDipriceinfo(value?: DIPriceInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PriceInfo): PriceInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfo;
  static deserializeBinaryFromReader(
    message: PriceInfo,
    reader: jspb.BinaryReader
  ): PriceInfo;
}

export namespace PriceInfo {
  export type AsObject = {
    ticker: string;
    quotes?: PriceInfoQuotes.AsObject;
    lastsale?: PriceInfoLastSale.AsObject;
    summary?: PriceInfoSummary.AsObject;
    underlying?: PriceInfoUnderlying.AsObject;
    foreign?: PriceInfoForeignRoom.AsObject;
    cwpriceinfo?: CWPriceInfo.AsObject;
    dipriceinfo?: DIPriceInfo.AsObject;
  };
}

export class PriceInfoFull extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasBasic(): boolean;
  clearBasic(): void;
  getBasic(): PriceInfoBasic | undefined;
  setBasic(value?: PriceInfoBasic): void;

  hasQuotes(): boolean;
  clearQuotes(): void;
  getQuotes(): PriceInfoQuotes | undefined;
  setQuotes(value?: PriceInfoQuotes): void;

  hasLastsale(): boolean;
  clearLastsale(): void;
  getLastsale(): PriceInfoLastSale | undefined;
  setLastsale(value?: PriceInfoLastSale): void;

  hasSummary(): boolean;
  clearSummary(): void;
  getSummary(): PriceInfoSummary | undefined;
  setSummary(value?: PriceInfoSummary): void;

  hasUnderlying(): boolean;
  clearUnderlying(): void;
  getUnderlying(): PriceInfoUnderlying | undefined;
  setUnderlying(value?: PriceInfoUnderlying): void;

  hasForeign(): boolean;
  clearForeign(): void;
  getForeign(): PriceInfoForeignRoom | undefined;
  setForeign(value?: PriceInfoForeignRoom): void;

  hasCwpriceinfo(): boolean;
  clearCwpriceinfo(): void;
  getCwpriceinfo(): CWPriceInfo | undefined;
  setCwpriceinfo(value?: CWPriceInfo): void;

  hasDipriceinfo(): boolean;
  clearDipriceinfo(): void;
  getDipriceinfo(): DIPriceInfo | undefined;
  setDipriceinfo(value?: DIPriceInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfoFull.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PriceInfoFull
  ): PriceInfoFull.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfoFull,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfoFull;
  static deserializeBinaryFromReader(
    message: PriceInfoFull,
    reader: jspb.BinaryReader
  ): PriceInfoFull;
}

export namespace PriceInfoFull {
  export type AsObject = {
    ticker: string;
    basic?: PriceInfoBasic.AsObject;
    quotes?: PriceInfoQuotes.AsObject;
    lastsale?: PriceInfoLastSale.AsObject;
    summary?: PriceInfoSummary.AsObject;
    underlying?: PriceInfoUnderlying.AsObject;
    foreign?: PriceInfoForeignRoom.AsObject;
    cwpriceinfo?: CWPriceInfo.AsObject;
    dipriceinfo?: DIPriceInfo.AsObject;
  };
}

export class ListPriceInfoPutThrough extends jspb.Message {
  clearPriceinfoputthroughList(): void;
  getPriceinfoputthroughList(): Array<PriceInfoPutThrough>;
  setPriceinfoputthroughList(value: Array<PriceInfoPutThrough>): void;
  addPriceinfoputthrough(
    value?: PriceInfoPutThrough,
    index?: number
  ): PriceInfoPutThrough;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPriceInfoPutThrough.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListPriceInfoPutThrough
  ): ListPriceInfoPutThrough.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListPriceInfoPutThrough,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListPriceInfoPutThrough;
  static deserializeBinaryFromReader(
    message: ListPriceInfoPutThrough,
    reader: jspb.BinaryReader
  ): ListPriceInfoPutThrough;
}

export namespace ListPriceInfoPutThrough {
  export type AsObject = {
    priceinfoputthroughList: Array<PriceInfoPutThrough.AsObject>;
  };
}

export class PriceInfoPutThrough extends jspb.Message {
  getBasket(): string;
  setBasket(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTime(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsharestradedpt(): boolean;
  clearTotalsharestradedpt(): void;
  getTotalsharestradedpt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestradedpt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestradedpt(): boolean;
  clearTotalvaluestradedpt(): void;
  getTotalvaluestradedpt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestradedpt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearPutthroughdealList(): void;
  getPutthroughdealList(): Array<PutThroughDeal>;
  setPutthroughdealList(value: Array<PutThroughDeal>): void;
  addPutthroughdeal(value?: PutThroughDeal, index?: number): PutThroughDeal;

  clearPutthroughbuyList(): void;
  getPutthroughbuyList(): Array<PutThroughOffer>;
  setPutthroughbuyList(value: Array<PutThroughOffer>): void;
  addPutthroughbuy(value?: PutThroughOffer, index?: number): PutThroughOffer;

  clearPutthroughsellList(): void;
  getPutthroughsellList(): Array<PutThroughOffer>;
  setPutthroughsellList(value: Array<PutThroughOffer>): void;
  addPutthroughsell(value?: PutThroughOffer, index?: number): PutThroughOffer;

  clearPutthroughsummaryList(): void;
  getPutthroughsummaryList(): Array<PutThroughSummary>;
  setPutthroughsummaryList(value: Array<PutThroughSummary>): void;
  addPutthroughsummary(
    value?: PutThroughSummary,
    index?: number
  ): PutThroughSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceInfoPutThrough.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PriceInfoPutThrough
  ): PriceInfoPutThrough.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PriceInfoPutThrough,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PriceInfoPutThrough;
  static deserializeBinaryFromReader(
    message: PriceInfoPutThrough,
    reader: jspb.BinaryReader
  ): PriceInfoPutThrough;
}

export namespace PriceInfoPutThrough {
  export type AsObject = {
    basket: string;
    time?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsharestradedpt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestradedpt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    putthroughdealList: Array<PutThroughDeal.AsObject>;
    putthroughbuyList: Array<PutThroughOffer.AsObject>;
    putthroughsellList: Array<PutThroughOffer.AsObject>;
    putthroughsummaryList: Array<PutThroughSummary.AsObject>;
  };
}

export class PutThroughDeal extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getBoard(): string;
  setBoard(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setVolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setValue(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTime(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsharestradedpt(): boolean;
  clearTotalsharestradedpt(): void;
  getTotalsharestradedpt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestradedpt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestradedpt(): boolean;
  clearTotalvaluestradedpt(): void;
  getTotalvaluestradedpt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestradedpt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasChangepricevalue(): boolean;
  clearChangepricevalue(): void;
  getChangepricevalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangepricevalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangepricepercentage(): boolean;
  clearChangepricepercentage(): void;
  getChangepricepercentage():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setChangepricepercentage(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  getColor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setColor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutThroughDeal.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PutThroughDeal
  ): PutThroughDeal.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PutThroughDeal,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PutThroughDeal;
  static deserializeBinaryFromReader(
    message: PutThroughDeal,
    reader: jspb.BinaryReader
  ): PutThroughDeal;
}

export namespace PutThroughDeal {
  export type AsObject = {
    ticker: string;
    board: string;
    price?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    volume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    value?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    time?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsharestradedpt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestradedpt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    changepricevalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changepricepercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    color: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  };
}

export class PutThroughOffer extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getBoard(): string;
  setBoard(value: string): void;

  getTrader(): string;
  setTrader(value: string): void;

  getFirm(): string;
  setFirm(value: string): void;

  getContact(): string;
  setContact(value: string): void;

  getEside(): common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
  setEside(
    value: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap]
  ): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setVolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTime(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasChangepricevalue(): boolean;
  clearChangepricevalue(): void;
  getChangepricevalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangepricevalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangepricepercentage(): boolean;
  clearChangepricepercentage(): void;
  getChangepricepercentage():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setChangepricepercentage(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  getColor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setColor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutThroughOffer.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PutThroughOffer
  ): PutThroughOffer.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PutThroughOffer,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PutThroughOffer;
  static deserializeBinaryFromReader(
    message: PutThroughOffer,
    reader: jspb.BinaryReader
  ): PutThroughOffer;
}

export namespace PutThroughOffer {
  export type AsObject = {
    ticker: string;
    board: string;
    trader: string;
    firm: string;
    contact: string;
    eside: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
    price?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    volume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    time?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    changepricevalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changepricepercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    color: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  };
}

export class PutThroughSummary extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getBoard(): string;
  setBoard(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTime(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAverageprice(): boolean;
  clearAverageprice(): void;
  getAverageprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalsharestradedpt(): boolean;
  clearTotalsharestradedpt(): void;
  getTotalsharestradedpt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestradedpt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestradedpt(): boolean;
  clearTotalvaluestradedpt(): void;
  getTotalvaluestradedpt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestradedpt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutThroughSummary.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PutThroughSummary
  ): PutThroughSummary.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PutThroughSummary,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PutThroughSummary;
  static deserializeBinaryFromReader(
    message: PutThroughSummary,
    reader: jspb.BinaryReader
  ): PutThroughSummary;
}

export namespace PutThroughSummary {
  export type AsObject = {
    ticker: string;
    board: string;
    time?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    averageprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalsharestradedpt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestradedpt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
  };
}
