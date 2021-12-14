// package: mktservice
// file: common/stat_ad_indicator.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class StatMarketADDetail extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCategory(): EADIndicatorCategoryMap[keyof EADIndicatorCategoryMap];
  setCategory(
    value: EADIndicatorCategoryMap[keyof EADIndicatorCategoryMap]
  ): void;

  clearTickersList(): void;
  getTickersList(): Array<string>;
  setTickersList(value: Array<string>): void;
  addTickers(value: string, index?: number): string;

  clearValuesList(): void;
  getValuesList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setValuesList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addValues(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketADDetail.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketADDetail
  ): StatMarketADDetail.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketADDetail,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketADDetail;
  static deserializeBinaryFromReader(
    message: StatMarketADDetail,
    reader: jspb.BinaryReader
  ): StatMarketADDetail;
}

export namespace StatMarketADDetail {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    category: EADIndicatorCategoryMap[keyof EADIndicatorCategoryMap];
    tickersList: Array<string>;
    valuesList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
  };
}

export class StatMarketADIndicator extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCategory(): EADIndicatorCategoryMap[keyof EADIndicatorCategoryMap];
  setCategory(
    value: EADIndicatorCategoryMap[keyof EADIndicatorCategoryMap]
  ): void;

  hasTotaltickers(): boolean;
  clearTotaltickers(): void;
  getTotaltickers(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotaltickers(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotaladvance(): boolean;
  clearTotaladvance(): void;
  getTotaladvance(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotaladvance(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalnochange(): boolean;
  clearTotalnochange(): void;
  getTotalnochange(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalnochange(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotaldecline(): boolean;
  clearTotaldecline(): void;
  getTotaldecline(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotaldecline(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearLablesList(): void;
  getLablesList(): Array<string>;
  setLablesList(value: Array<string>): void;
  addLables(value: string, index?: number): string;

  clearValuesList(): void;
  getValuesList(): Array<google_protobuf_wrappers_pb.Int64Value>;
  setValuesList(value: Array<google_protobuf_wrappers_pb.Int64Value>): void;
  addValues(
    value?: google_protobuf_wrappers_pb.Int64Value,
    index?: number
  ): google_protobuf_wrappers_pb.Int64Value;

  clearColorsList(): void;
  getColorsList(): Array<
    common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  >;
  setColorsList(
    value: Array<
      common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
    >
  ): void;
  addColors(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap],
    index?: number
  ): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketADIndicator.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketADIndicator
  ): StatMarketADIndicator.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketADIndicator,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketADIndicator;
  static deserializeBinaryFromReader(
    message: StatMarketADIndicator,
    reader: jspb.BinaryReader
  ): StatMarketADIndicator;
}

export namespace StatMarketADIndicator {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    category: EADIndicatorCategoryMap[keyof EADIndicatorCategoryMap];
    totaltickers?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totaladvance?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalnochange?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totaldecline?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    lablesList: Array<string>;
    valuesList: Array<google_protobuf_wrappers_pb.Int64Value.AsObject>;
    colorsList: Array<
      common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
    >;
  };
}

export interface EADIndicatorCategoryMap {
  EAD_UNK: 0;
  EAD_ALL: 1;
  EAD_VNINDEX: 2;
  EAD_HNXINDEX: 3;
  EAD_UPCOMINDEX: 4;
  EAD_VN30: 5;
}

export const EADIndicatorCategory: EADIndicatorCategoryMap;
