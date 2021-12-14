// package: mktservice
// file: common/stat_ticker.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class StatTicker extends jspb.Message {
  getSharecode(): string;
  setSharecode(value: string): void;

  getTickertype(): common_data_common_pb.ETickerTypeMap[keyof common_data_common_pb.ETickerTypeMap];
  setTickertype(
    value: common_data_common_pb.ETickerTypeMap[keyof common_data_common_pb.ETickerTypeMap]
  ): void;

  getCwstatus(): ECWStatusMap[keyof ECWStatusMap];
  setCwstatus(value: ECWStatusMap[keyof ECWStatusMap]): void;

  hasBiasprice(): boolean;
  clearBiasprice(): void;
  getBiasprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBiasprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBalanceprice(): boolean;
  clearBalanceprice(): void;
  getBalanceprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBalanceprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatTicker.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatTicker
  ): StatTicker.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatTicker,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatTicker;
  static deserializeBinaryFromReader(
    message: StatTicker,
    reader: jspb.BinaryReader
  ): StatTicker;
}

export namespace StatTicker {
  export type AsObject = {
    sharecode: string;
    tickertype: common_data_common_pb.ETickerTypeMap[keyof common_data_common_pb.ETickerTypeMap];
    cwstatus: ECWStatusMap[keyof ECWStatusMap];
    biasprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    balanceprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };
}

export interface ECWStatusMap {
  CW_ITM: 0;
  CW_ATM: 1;
  CW_OTP: 2;
}

export const ECWStatus: ECWStatusMap;
