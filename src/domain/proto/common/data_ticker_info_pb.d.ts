// package: mktservice
// file: common/data_ticker_info.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class TickerInfo extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getTickertype(): common_data_common_pb.ETickerTypeMap[keyof common_data_common_pb.ETickerTypeMap];
  setTickertype(
    value: common_data_common_pb.ETickerTypeMap[keyof common_data_common_pb.ETickerTypeMap]
  ): void;

  getNamevi(): string;
  setNamevi(value: string): void;

  getNameen(): string;
  setNameen(value: string): void;

  getMarketcode(): common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap];
  setMarketcode(
    value: common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap]
  ): void;

  getSecuritiestype(): common_data_common_pb.ESecuritiesTypeMap[keyof common_data_common_pb.ESecuritiesTypeMap];
  setSecuritiestype(
    value: common_data_common_pb.ESecuritiesTypeMap[keyof common_data_common_pb.ESecuritiesTypeMap]
  ): void;

  getIssuercode(): string;
  setIssuercode(value: string): void;

  getUnderlyingcode(): string;
  setUnderlyingcode(value: string): void;

  hasContractexpireddate(): boolean;
  clearContractexpireddate(): void;
  getContractexpireddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setContractexpireddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastupdate(): boolean;
  clearLastupdate(): void;
  getLastupdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastupdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): common_data_common_pb.ETILoadStatusMap[keyof common_data_common_pb.ETILoadStatusMap];
  setStatus(
    value: common_data_common_pb.ETILoadStatusMap[keyof common_data_common_pb.ETILoadStatusMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TickerInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TickerInfo
  ): TickerInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TickerInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): TickerInfo;
  static deserializeBinaryFromReader(
    message: TickerInfo,
    reader: jspb.BinaryReader
  ): TickerInfo;
}

export namespace TickerInfo {
  export type AsObject = {
    ticker: string;
    tickertype: common_data_common_pb.ETickerTypeMap[keyof common_data_common_pb.ETickerTypeMap];
    namevi: string;
    nameen: string;
    marketcode: common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap];
    securitiestype: common_data_common_pb.ESecuritiesTypeMap[keyof common_data_common_pb.ESecuritiesTypeMap];
    issuercode: string;
    underlyingcode: string;
    contractexpireddate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    lastupdate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    status: common_data_common_pb.ETILoadStatusMap[keyof common_data_common_pb.ETILoadStatusMap];
  };
}

export class IndustryInfo extends jspb.Message {
  getIndustrycode(): string;
  setIndustrycode(value: string): void;

  getNamevi(): string;
  setNamevi(value: string): void;

  getNameen(): string;
  setNameen(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndustryInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: IndustryInfo
  ): IndustryInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: IndustryInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): IndustryInfo;
  static deserializeBinaryFromReader(
    message: IndustryInfo,
    reader: jspb.BinaryReader
  ): IndustryInfo;
}

export namespace IndustryInfo {
  export type AsObject = {
    industrycode: string;
    namevi: string;
    nameen: string;
  };
}

export class TickerInfos extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<TickerInfo>;
  setItemsList(value: Array<TickerInfo>): void;
  addItems(value?: TickerInfo, index?: number): TickerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TickerInfos.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TickerInfos
  ): TickerInfos.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TickerInfos,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): TickerInfos;
  static deserializeBinaryFromReader(
    message: TickerInfos,
    reader: jspb.BinaryReader
  ): TickerInfos;
}

export namespace TickerInfos {
  export type AsObject = {
    itemsList: Array<TickerInfo.AsObject>;
  };
}

export class IndustryInfos extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<IndustryInfo>;
  setItemsList(value: Array<IndustryInfo>): void;
  addItems(value?: IndustryInfo, index?: number): IndustryInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndustryInfos.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: IndustryInfos
  ): IndustryInfos.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: IndustryInfos,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): IndustryInfos;
  static deserializeBinaryFromReader(
    message: IndustryInfos,
    reader: jspb.BinaryReader
  ): IndustryInfos;
}

export namespace IndustryInfos {
  export type AsObject = {
    itemsList: Array<IndustryInfo.AsObject>;
  };
}
