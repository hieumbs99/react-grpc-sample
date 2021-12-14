// package: mktservice
// file: common/data_chart.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class ChartDataSingle extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getResolution(): EResolutionsMap[keyof EResolutionsMap];
  setResolution(value: EResolutionsMap[keyof EResolutionsMap]): void;

  getFieldtype(): ChartDataSingle.EFieldTypeMap[keyof ChartDataSingle.EFieldTypeMap];
  setFieldtype(
    value: ChartDataSingle.EFieldTypeMap[keyof ChartDataSingle.EFieldTypeMap]
  ): void;

  clearTimeList(): void;
  getTimeList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setTimeList(value: Array<google_protobuf_timestamp_pb.Timestamp>): void;
  addTime(
    value?: google_protobuf_timestamp_pb.Timestamp,
    index?: number
  ): google_protobuf_timestamp_pb.Timestamp;

  clearValueList(): void;
  getValueList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setValueList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addValue(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartDataSingle.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ChartDataSingle
  ): ChartDataSingle.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ChartDataSingle,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChartDataSingle;
  static deserializeBinaryFromReader(
    message: ChartDataSingle,
    reader: jspb.BinaryReader
  ): ChartDataSingle;
}

export namespace ChartDataSingle {
  export type AsObject = {
    ticker: string;
    resolution: EResolutionsMap[keyof EResolutionsMap];
    fieldtype: ChartDataSingle.EFieldTypeMap[keyof ChartDataSingle.EFieldTypeMap];
    timeList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>;
    valueList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
  };

  export interface EFieldTypeMap {
    EFIELDTYPE_UNK: 0;
    EFIELDTYPE_OPEN: 1;
    EFIELDTYPE_HIGH: 2;
    EFIELDTYPE_LOW: 3;
    EFIELDTYPE_CLOSE: 4;
    EFIELDTYPE_VOLUME: 5;
    EFIELDTYPE_NETVALUES: 6;
    EFIELDTYPE_VALUE: 7;
    EFIELDTYPE_VALUE_ALL: 8;
  }

  export const EFieldType: EFieldTypeMap;
}

export class ChartData extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getResolution(): EResolutionsMap[keyof EResolutionsMap];
  setResolution(value: EResolutionsMap[keyof EResolutionsMap]): void;

  getTradingdate(): common_data_common_pb.ETradingDateMap[keyof common_data_common_pb.ETradingDateMap];
  setTradingdate(
    value: common_data_common_pb.ETradingDateMap[keyof common_data_common_pb.ETradingDateMap]
  ): void;

  clearTimeList(): void;
  getTimeList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setTimeList(value: Array<google_protobuf_timestamp_pb.Timestamp>): void;
  addTime(
    value?: google_protobuf_timestamp_pb.Timestamp,
    index?: number
  ): google_protobuf_timestamp_pb.Timestamp;

  clearOpenList(): void;
  getOpenList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setOpenList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addOpen(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  clearHighList(): void;
  getHighList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setHighList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addHigh(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  clearLowList(): void;
  getLowList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setLowList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addLow(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  clearClosedList(): void;
  getClosedList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setClosedList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addClosed(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  clearVolumeList(): void;
  getVolumeList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setVolumeList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addVolume(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  clearNetvalueList(): void;
  getNetvalueList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setNetvalueList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addNetvalue(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  clearValueList(): void;
  getValueList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setValueList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addValue(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  clearValueallList(): void;
  getValueallList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setValueallList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addValueall(
    value?: google_protobuf_wrappers_pb.DoubleValue,
    index?: number
  ): google_protobuf_wrappers_pb.DoubleValue;

  hasReferenceprice(): boolean;
  clearReferenceprice(): void;
  getReferenceprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setReferenceprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCeilingprice(): boolean;
  clearCeilingprice(): void;
  getCeilingprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCeilingprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasFloorprice(): boolean;
  clearFloorprice(): void;
  getFloorprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setFloorprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartData.AsObject;
  static toObject(includeInstance: boolean, msg: ChartData): ChartData.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ChartData,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChartData;
  static deserializeBinaryFromReader(
    message: ChartData,
    reader: jspb.BinaryReader
  ): ChartData;
}

export namespace ChartData {
  export type AsObject = {
    ticker: string;
    resolution: EResolutionsMap[keyof EResolutionsMap];
    tradingdate: common_data_common_pb.ETradingDateMap[keyof common_data_common_pb.ETradingDateMap];
    timeList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>;
    openList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
    highList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
    lowList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
    closedList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
    volumeList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
    netvalueList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
    valueList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
    valueallList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>;
    referenceprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    ceilingprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    floorprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };
}

export interface EResolutionsMap {
  RESOLUTION_UNK: 0;
  MINUTE_1M: 1;
  MINUTE_5M: 2;
  MINUTE_15M: 3;
  HOUR_1H: 4;
  HOUR_4H: 5;
  DAY_1D: 6;
  WEEK_1W: 10;
  WEEK_2W: 11;
  MONTH_1M: 12;
}

export const EResolutions: EResolutionsMap;
