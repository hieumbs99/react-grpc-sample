// package: mktservice
// file: common/data_fundamental.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class OrganizationFundamental extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasMarketcap(): boolean;
  clearMarketcap(): void;
  getMarketcap(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMarketcap(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasFreefloatmarketcap(): boolean;
  clearFreefloatmarketcap(): void;
  getFreefloatmarketcap(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFreefloatmarketcap(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSharesoutstanding(): boolean;
  clearSharesoutstanding(): void;
  getSharesoutstanding(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSharesoutstanding(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSharesfreefloat(): boolean;
  clearSharesfreefloat(): void;
  getSharesfreefloat(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSharesfreefloat(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasShareslisted(): boolean;
  clearShareslisted(): void;
  getShareslisted(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setShareslisted(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPricetoearningratio(): boolean;
  clearPricetoearningratio(): void;
  getPricetoearningratio(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPricetoearningratio(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasEarningpershare(): boolean;
  clearEarningpershare(): void;
  getEarningpershare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setEarningpershare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasPricetobook(): boolean;
  clearPricetobook(): void;
  getPricetobook(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPricetobook(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTangiblebookvaluepershare(): boolean;
  clearTangiblebookvaluepershare(): void;
  getTangiblebookvaluepershare():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setTangiblebookvaluepershare(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  hasPricetosalesratio(): boolean;
  clearPricetosalesratio(): void;
  getPricetosalesratio(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPricetosalesratio(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasEvebitda(): boolean;
  clearEvebitda(): void;
  getEvebitda(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setEvebitda(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAssetturnover(): boolean;
  clearAssetturnover(): void;
  getAssetturnover(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAssetturnover(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasReceivableturnover(): boolean;
  clearReceivableturnover(): void;
  getReceivableturnover(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setReceivableturnover(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasInventoryturnover(): boolean;
  clearInventoryturnover(): void;
  getInventoryturnover(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setInventoryturnover(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasPayableturnover(): boolean;
  clearPayableturnover(): void;
  getPayableturnover(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPayableturnover(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasDividend(): boolean;
  clearDividend(): void;
  getDividend(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setDividend(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasDividendyield(): boolean;
  clearDividendyield(): void;
  getDividendyield(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setDividendyield(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasHighestprice52week(): boolean;
  clearHighestprice52week(): void;
  getHighestprice52week(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setHighestprice52week(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLowestprice52week(): boolean;
  clearLowestprice52week(): void;
  getLowestprice52week(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLowestprice52week(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAveragevolume3m(): boolean;
  clearAveragevolume3m(): void;
  getAveragevolume3m(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAveragevolume3m(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTurnover(): boolean;
  clearTurnover(): void;
  getTurnover(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTurnover(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTurnoverrate(): boolean;
  clearTurnoverrate(): void;
  getTurnoverrate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTurnoverrate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setRange(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBeta(): boolean;
  clearBeta(): void;
  getBeta(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBeta(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationFundamental.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OrganizationFundamental
  ): OrganizationFundamental.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: OrganizationFundamental,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationFundamental;
  static deserializeBinaryFromReader(
    message: OrganizationFundamental,
    reader: jspb.BinaryReader
  ): OrganizationFundamental;
}

export namespace OrganizationFundamental {
  export type AsObject = {
    ticker: string;
    marketcap?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    freefloatmarketcap?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    sharesoutstanding?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    sharesfreefloat?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    shareslisted?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    pricetoearningratio?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    earningpershare?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    pricetobook?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    tangiblebookvaluepershare?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    pricetosalesratio?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    evebitda?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    assetturnover?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    receivableturnover?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    inventoryturnover?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    payableturnover?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    dividend?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    dividendyield?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    highestprice52week?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lowestprice52week?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    averagevolume3m?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    turnover?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    turnoverrate?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    range?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    beta?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };
}
