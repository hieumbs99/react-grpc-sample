// package: mktservice
// file: common/stat_market_stats.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class StatMarketScaleDetail extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasChangedpercentvolumewithavg5d(): boolean;
  clearChangedpercentvolumewithavg5d(): void;
  getChangedpercentvolumewithavg5d():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setChangedpercentvolumewithavg5d(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  hasMarketpercent(): boolean;
  clearMarketpercent(): void;
  getMarketpercent(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setMarketpercent(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasContrivalue(): boolean;
  clearContrivalue(): void;
  getContrivalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContrivalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasContripercentage(): boolean;
  clearContripercentage(): void;
  getContripercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContripercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getLastsalecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setLastsalecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketScaleDetail.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketScaleDetail
  ): StatMarketScaleDetail.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketScaleDetail,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketScaleDetail;
  static deserializeBinaryFromReader(
    message: StatMarketScaleDetail,
    reader: jspb.BinaryReader
  ): StatMarketScaleDetail;
}

export namespace StatMarketScaleDetail {
  export type AsObject = {
    ticker: string;
    changedpercentvolumewithavg5d?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    marketpercent?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    contrivalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    contripercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastsalecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  };
}

export class StatMarketContributionDetail extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasContrivalue(): boolean;
  clearContrivalue(): void;
  getContrivalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContrivalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasContripercentage(): boolean;
  clearContripercentage(): void;
  getContripercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContripercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketContributionDetail.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketContributionDetail
  ): StatMarketContributionDetail.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketContributionDetail,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketContributionDetail;
  static deserializeBinaryFromReader(
    message: StatMarketContributionDetail,
    reader: jspb.BinaryReader
  ): StatMarketContributionDetail;
}

export namespace StatMarketContributionDetail {
  export type AsObject = {
    ticker: string;
    contrivalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    contripercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };
}

export class StatMarketStats extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBasketcode(): string;
  setBasketcode(value: string): void;

  getType(): common_data_common_pb.EMarketStatsTypeMap[keyof common_data_common_pb.EMarketStatsTypeMap];
  setType(
    value: common_data_common_pb.EMarketStatsTypeMap[keyof common_data_common_pb.EMarketStatsTypeMap]
  ): void;

  hasTotalfloorshares(): boolean;
  clearTotalfloorshares(): void;
  getTotalfloorshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalfloorshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotaldeclineshares(): boolean;
  clearTotaldeclineshares(): void;
  getTotaldeclineshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotaldeclineshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalnochangeshares(): boolean;
  clearTotalnochangeshares(): void;
  getTotalnochangeshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalnochangeshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotaladvanceshares(): boolean;
  clearTotaladvanceshares(): void;
  getTotaladvanceshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotaladvanceshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalceilingshares(): boolean;
  clearTotalceilingshares(): void;
  getTotalceilingshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalceilingshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearContributionstatsList(): void;
  getContributionstatsList(): Array<StatMarketContributionDetail>;
  setContributionstatsList(value: Array<StatMarketContributionDetail>): void;
  addContributionstats(
    value?: StatMarketContributionDetail,
    index?: number
  ): StatMarketContributionDetail;

  clearScalestatsList(): void;
  getScalestatsList(): Array<StatMarketScaleDetail>;
  setScalestatsList(value: Array<StatMarketScaleDetail>): void;
  addScalestats(
    value?: StatMarketScaleDetail,
    index?: number
  ): StatMarketScaleDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketStats.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketStats
  ): StatMarketStats.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketStats,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketStats;
  static deserializeBinaryFromReader(
    message: StatMarketStats,
    reader: jspb.BinaryReader
  ): StatMarketStats;
}

export namespace StatMarketStats {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    basketcode: string;
    type: common_data_common_pb.EMarketStatsTypeMap[keyof common_data_common_pb.EMarketStatsTypeMap];
    totalfloorshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totaldeclineshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalnochangeshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totaladvanceshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalceilingshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    contributionstatsList: Array<StatMarketContributionDetail.AsObject>;
    scalestatsList: Array<StatMarketScaleDetail.AsObject>;
  };
}
