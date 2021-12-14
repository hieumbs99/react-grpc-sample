// package: mktservice
// file: common/data_timeandsale.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class TimeAndSaleByTime extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getEside(): common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
  setEside(
    value: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap]
  ): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeAndSaleByTime.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TimeAndSaleByTime
  ): TimeAndSaleByTime.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TimeAndSaleByTime,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): TimeAndSaleByTime;
  static deserializeBinaryFromReader(
    message: TimeAndSaleByTime,
    reader: jspb.BinaryReader
  ): TimeAndSaleByTime;
}

export namespace TimeAndSaleByTime {
  export type AsObject = {
    ticker: string;
    eside: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    price?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    volume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    color: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  };
}

export class TimeAndSaleByVolumeAnalysis extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBuyvolume(): boolean;
  clearBuyvolume(): void;
  getBuyvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setBuyvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSellvolume(): boolean;
  clearSellvolume(): void;
  getSellvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSellvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasNeutralvolume(): boolean;
  clearNeutralvolume(): void;
  getNeutralvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setNeutralvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvolume(): boolean;
  clearTotalvolume(): void;
  getTotalvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPercentage(): boolean;
  clearPercentage(): void;
  getPercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getColor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setColor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeAndSaleByVolumeAnalysis.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TimeAndSaleByVolumeAnalysis
  ): TimeAndSaleByVolumeAnalysis.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TimeAndSaleByVolumeAnalysis,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): TimeAndSaleByVolumeAnalysis;
  static deserializeBinaryFromReader(
    message: TimeAndSaleByVolumeAnalysis,
    reader: jspb.BinaryReader
  ): TimeAndSaleByVolumeAnalysis;
}

export namespace TimeAndSaleByVolumeAnalysis {
  export type AsObject = {
    ticker: string;
    price?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    buyvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    sellvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    neutralvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    percentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    color: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  };
}

export class TimeAndSale extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastprice(): boolean;
  clearLastprice(): void;
  getLastprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLastprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLastchangedvalue(): boolean;
  clearLastchangedvalue(): void;
  getLastchangedvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLastchangedvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLastchangedpercentage(): boolean;
  clearLastchangedpercentage(): void;
  getLastchangedpercentage():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setLastchangedpercentage(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  hasAverageprice(): boolean;
  clearAverageprice(): void;
  getAverageprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalbuyvolume(): boolean;
  clearTotalbuyvolume(): void;
  getTotalbuyvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalbuyvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalsellvolume(): boolean;
  clearTotalsellvolume(): void;
  getTotalsellvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalsellvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalneutralvolume(): boolean;
  clearTotalneutralvolume(): void;
  getTotalneutralvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalneutralvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalvolume(): boolean;
  clearTotalvolume(): void;
  getTotalvolume(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalvolume(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearTicksList(): void;
  getTicksList(): Array<TimeAndSaleByTime>;
  setTicksList(value: Array<TimeAndSaleByTime>): void;
  addTicks(value?: TimeAndSaleByTime, index?: number): TimeAndSaleByTime;

  clearVolumeanalysisList(): void;
  getVolumeanalysisList(): Array<TimeAndSaleByVolumeAnalysis>;
  setVolumeanalysisList(value: Array<TimeAndSaleByVolumeAnalysis>): void;
  addVolumeanalysis(
    value?: TimeAndSaleByVolumeAnalysis,
    index?: number
  ): TimeAndSaleByVolumeAnalysis;

  getType(): TimeAndSale.ETimeAndSaleTypeMap[keyof TimeAndSale.ETimeAndSaleTypeMap];
  setType(
    value: TimeAndSale.ETimeAndSaleTypeMap[keyof TimeAndSale.ETimeAndSaleTypeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeAndSale.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TimeAndSale
  ): TimeAndSale.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TimeAndSale,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): TimeAndSale;
  static deserializeBinaryFromReader(
    message: TimeAndSale,
    reader: jspb.BinaryReader
  ): TimeAndSale;
}

export namespace TimeAndSale {
  export type AsObject = {
    ticker: string;
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    lastprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastchangedvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastchangedpercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    averageprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalbuyvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalsellvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalneutralvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalvolume?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    ticksList: Array<TimeAndSaleByTime.AsObject>;
    volumeanalysisList: Array<TimeAndSaleByVolumeAnalysis.AsObject>;
    type: TimeAndSale.ETimeAndSaleTypeMap[keyof TimeAndSale.ETimeAndSaleTypeMap];
  };

  export interface ETimeAndSaleTypeMap {
    LATEST_MATCH: 0;
    HISTORY_MATCH: 1;
  }

  export const ETimeAndSaleType: ETimeAndSaleTypeMap;
}
