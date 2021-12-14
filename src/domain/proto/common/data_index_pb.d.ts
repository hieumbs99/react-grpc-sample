// package: mktservice
// file: common/data_index.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class IndexInfo extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getMarketcode(): common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap];
  setMarketcode(
    value: common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap]
  ): void;

  getSession(): common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
  setSession(
    value: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap]
  ): void;

  hasIndexvalue(): boolean;
  clearIndexvalue(): void;
  getIndexvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setIndexvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedindexvalue(): boolean;
  clearChangedindexvalue(): void;
  getChangedindexvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedindexvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedindexpercentage(): boolean;
  clearChangedindexpercentage(): void;
  getChangedindexpercentage():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setChangedindexpercentage(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  hasPreviousindexvalue(): boolean;
  clearPreviousindexvalue(): void;
  getPreviousindexvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPreviousindexvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getIndexcolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setIndexcolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  hasTotaltrades(): boolean;
  clearTotaltrades(): void;
  getTotaltrades(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotaltrades(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsharestraded(): boolean;
  clearTotalsharestraded(): void;
  getTotalsharestraded(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestraded(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestraded(): boolean;
  clearTotalvaluestraded(): void;
  getTotalvaluestraded(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestraded(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsharestraded4mt(): boolean;
  clearTotalsharestraded4mt(): void;
  getTotalsharestraded4mt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestraded4mt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestraded4mt(): boolean;
  clearTotalvaluestraded4mt(): void;
  getTotalvaluestraded4mt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestraded4mt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsharestraded4pt(): boolean;
  clearTotalsharestraded4pt(): void;
  getTotalsharestraded4pt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsharestraded4pt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvaluestraded4pt(): boolean;
  clearTotalvaluestraded4pt(): void;
  getTotalvaluestraded4pt(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvaluestraded4pt(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasUpvolume(): boolean;
  clearUpvolume(): void;
  getUpvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setUpvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasDownvolume(): boolean;
  clearDownvolume(): void;
  getDownvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setDownvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasNochangevolume(): boolean;
  clearNochangevolume(): void;
  getNochangevolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setNochangevolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAdvances(): boolean;
  clearAdvances(): void;
  getAdvances(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setAdvances(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDeclines(): boolean;
  clearDeclines(): void;
  getDeclines(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDeclines(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasNochange(): boolean;
  clearNochange(): void;
  getNochange(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setNochange(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasTotalsharestraded4foreignbuy(): boolean;
  clearTotalsharestraded4foreignbuy(): void;
  getTotalsharestraded4foreignbuy():
    | google_protobuf_wrappers_pb.Int64Value
    | undefined;
  setTotalsharestraded4foreignbuy(
    value?: google_protobuf_wrappers_pb.Int64Value
  ): void;

  hasTotalsharestraded4foreignsell(): boolean;
  clearTotalsharestraded4foreignsell(): void;
  getTotalsharestraded4foreignsell():
    | google_protobuf_wrappers_pb.Int64Value
    | undefined;
  setTotalsharestraded4foreignsell(
    value?: google_protobuf_wrappers_pb.Int64Value
  ): void;

  hasTotalvaluestraded4foreignbuy(): boolean;
  clearTotalvaluestraded4foreignbuy(): void;
  getTotalvaluestraded4foreignbuy():
    | google_protobuf_wrappers_pb.Int64Value
    | undefined;
  setTotalvaluestraded4foreignbuy(
    value?: google_protobuf_wrappers_pb.Int64Value
  ): void;

  hasTotalvaluestraded4foreignsell(): boolean;
  clearTotalvaluestraded4foreignsell(): void;
  getTotalvaluestraded4foreignsell():
    | google_protobuf_wrappers_pb.Int64Value
    | undefined;
  setTotalvaluestraded4foreignsell(
    value?: google_protobuf_wrappers_pb.Int64Value
  ): void;

  hasTotalvaluestraded4foreign(): boolean;
  clearTotalvaluestraded4foreign(): void;
  getTotalvaluestraded4foreign():
    | google_protobuf_wrappers_pb.Int64Value
    | undefined;
  setTotalvaluestraded4foreign(
    value?: google_protobuf_wrappers_pb.Int64Value
  ): void;

  hasOpen(): boolean;
  clearOpen(): void;
  getOpen(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setOpen(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasHighest(): boolean;
  clearHighest(): void;
  getHighest(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setHighest(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLowest(): boolean;
  clearLowest(): void;
  getLowest(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLowest(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasClosed(): boolean;
  clearClosed(): void;
  getClosed(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setClosed(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getOpencolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setOpencolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  getHighestcolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setHighestcolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  getLowestcolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setLowestcolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  getClosedcolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setClosedcolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IndexInfo): IndexInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: IndexInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): IndexInfo;
  static deserializeBinaryFromReader(
    message: IndexInfo,
    reader: jspb.BinaryReader
  ): IndexInfo;
}

export namespace IndexInfo {
  export type AsObject = {
    ticker: string;
    marketcode: common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap];
    session: common_data_common_pb.ETradingSessionMap[keyof common_data_common_pb.ETradingSessionMap];
    indexvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedindexvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedindexpercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    previousindexvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    indexcolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    totaltrades?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsharestraded?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestraded?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsharestraded4mt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestraded4mt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsharestraded4pt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestraded4pt?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    upvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    downvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    nochangevolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    advances?: google_protobuf_wrappers_pb.Int32Value.AsObject;
    declines?: google_protobuf_wrappers_pb.Int32Value.AsObject;
    nochange?: google_protobuf_wrappers_pb.Int32Value.AsObject;
    totalsharestraded4foreignbuy?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsharestraded4foreignsell?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestraded4foreignbuy?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestraded4foreignsell?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvaluestraded4foreign?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    open?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    highest?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lowest?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    closed?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    opencolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    highestcolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    lowestcolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    closedcolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}
