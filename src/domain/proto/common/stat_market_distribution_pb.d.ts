// package: mktservice
// file: common/stat_market_distribution.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class StatMarketDistributionMarketCap extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasMarketcap(): boolean;
  clearMarketcap(): void;
  getMarketcap(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setMarketcap(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getLastsalecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setLastsalecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  hasLastprice(): boolean;
  clearLastprice(): void;
  getLastprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLastprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedpercentage(): boolean;
  clearChangedpercentage(): void;
  getChangedpercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedpercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedvalue(): boolean;
  clearChangedvalue(): void;
  getChangedvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketDistributionMarketCap.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketDistributionMarketCap
  ): StatMarketDistributionMarketCap.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketDistributionMarketCap,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketDistributionMarketCap;
  static deserializeBinaryFromReader(
    message: StatMarketDistributionMarketCap,
    reader: jspb.BinaryReader
  ): StatMarketDistributionMarketCap;
}

export namespace StatMarketDistributionMarketCap {
  export type AsObject = {
    ticker: string;
    marketcap?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastsalecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    lastprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedpercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };
}

export class StatMarketDistributionVolume extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasTotalvolume(): boolean;
  clearTotalvolume(): void;
  getTotalvolume(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvolume(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvolumetradedmt(): boolean;
  clearTotalvolumetradedmt(): void;
  getTotalvolumetradedmt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvolumetradedmt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvolumetradedpt(): boolean;
  clearTotalvolumetradedpt(): void;
  getTotalvolumetradedpt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvolumetradedpt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getLastsalecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setLastsalecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  hasLastprice(): boolean;
  clearLastprice(): void;
  getLastprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLastprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedpercentage(): boolean;
  clearChangedpercentage(): void;
  getChangedpercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedpercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedvalue(): boolean;
  clearChangedvalue(): void;
  getChangedvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketDistributionVolume.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketDistributionVolume
  ): StatMarketDistributionVolume.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketDistributionVolume,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketDistributionVolume;
  static deserializeBinaryFromReader(
    message: StatMarketDistributionVolume,
    reader: jspb.BinaryReader
  ): StatMarketDistributionVolume;
}

export namespace StatMarketDistributionVolume {
  export type AsObject = {
    ticker: string;
    totalvolume?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvolumetradedmt?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvolumetradedpt?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastsalecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    lastprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedpercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };
}

export class StatMarketDistributionValue extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasTotalvaluestraded(): boolean;
  clearTotalvaluestraded(): void;
  getTotalvaluestraded(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvaluestraded(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvaluestradedmt(): boolean;
  clearTotalvaluestradedmt(): void;
  getTotalvaluestradedmt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvaluestradedmt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvaluestradedpt(): boolean;
  clearTotalvaluestradedpt(): void;
  getTotalvaluestradedpt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvaluestradedpt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getLastsalecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setLastsalecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  hasLastprice(): boolean;
  clearLastprice(): void;
  getLastprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLastprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedpercentage(): boolean;
  clearChangedpercentage(): void;
  getChangedpercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedpercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedvalue(): boolean;
  clearChangedvalue(): void;
  getChangedvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketDistributionValue.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketDistributionValue
  ): StatMarketDistributionValue.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketDistributionValue,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketDistributionValue;
  static deserializeBinaryFromReader(
    message: StatMarketDistributionValue,
    reader: jspb.BinaryReader
  ): StatMarketDistributionValue;
}

export namespace StatMarketDistributionValue {
  export type AsObject = {
    ticker: string;
    totalvaluestraded?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvaluestradedmt?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvaluestradedpt?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastsalecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    lastprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedpercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };
}

export class StatMarketDistributionSummary extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasMarketcap(): boolean;
  clearMarketcap(): void;
  getMarketcap(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setMarketcap(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvaluestraded(): boolean;
  clearTotalvaluestraded(): void;
  getTotalvaluestraded(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvaluestraded(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvaluestradedmt(): boolean;
  clearTotalvaluestradedmt(): void;
  getTotalvaluestradedmt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvaluestradedmt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvaluestradedpt(): boolean;
  clearTotalvaluestradedpt(): void;
  getTotalvaluestradedpt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvaluestradedpt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvolumetradedmt(): boolean;
  clearTotalvolumetradedmt(): void;
  getTotalvolumetradedmt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvolumetradedmt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvolumetradedpt(): boolean;
  clearTotalvolumetradedpt(): void;
  getTotalvolumetradedpt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvolumetradedpt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLastprice(): boolean;
  clearLastprice(): void;
  getLastprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLastprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedpercentage(): boolean;
  clearChangedpercentage(): void;
  getChangedpercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedpercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedvalue(): boolean;
  clearChangedvalue(): void;
  getChangedvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvolume(): boolean;
  clearTotalvolume(): void;
  getTotalvolume(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvolume(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketDistributionSummary.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketDistributionSummary
  ): StatMarketDistributionSummary.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketDistributionSummary,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketDistributionSummary;
  static deserializeBinaryFromReader(
    message: StatMarketDistributionSummary,
    reader: jspb.BinaryReader
  ): StatMarketDistributionSummary;
}

export namespace StatMarketDistributionSummary {
  export type AsObject = {
    ticker: string;
    marketcap?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvaluestraded?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvaluestradedmt?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvaluestradedpt?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvolumetradedmt?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvolumetradedpt?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedpercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvolume?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };
}

export class StatMarketDistribution extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBasketcode(): string;
  setBasketcode(value: string): void;

  getType(): common_data_common_pb.EMarketDistributionTypeMap[keyof common_data_common_pb.EMarketDistributionTypeMap];
  setType(
    value: common_data_common_pb.EMarketDistributionTypeMap[keyof common_data_common_pb.EMarketDistributionTypeMap]
  ): void;

  getColor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setColor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  clearMarketcapdistributionList(): void;
  getMarketcapdistributionList(): Array<StatMarketDistributionMarketCap>;
  setMarketcapdistributionList(
    value: Array<StatMarketDistributionMarketCap>
  ): void;
  addMarketcapdistribution(
    value?: StatMarketDistributionMarketCap,
    index?: number
  ): StatMarketDistributionMarketCap;

  clearVolumedistributionList(): void;
  getVolumedistributionList(): Array<StatMarketDistributionVolume>;
  setVolumedistributionList(value: Array<StatMarketDistributionVolume>): void;
  addVolumedistribution(
    value?: StatMarketDistributionVolume,
    index?: number
  ): StatMarketDistributionVolume;

  clearValuedistributionList(): void;
  getValuedistributionList(): Array<StatMarketDistributionValue>;
  setValuedistributionList(value: Array<StatMarketDistributionValue>): void;
  addValuedistribution(
    value?: StatMarketDistributionValue,
    index?: number
  ): StatMarketDistributionValue;

  clearSummarydistributionList(): void;
  getSummarydistributionList(): Array<StatMarketDistributionSummary>;
  setSummarydistributionList(value: Array<StatMarketDistributionSummary>): void;
  addSummarydistribution(
    value?: StatMarketDistributionSummary,
    index?: number
  ): StatMarketDistributionSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatMarketDistribution.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatMarketDistribution
  ): StatMarketDistribution.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatMarketDistribution,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatMarketDistribution;
  static deserializeBinaryFromReader(
    message: StatMarketDistribution,
    reader: jspb.BinaryReader
  ): StatMarketDistribution;
}

export namespace StatMarketDistribution {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    basketcode: string;
    type: common_data_common_pb.EMarketDistributionTypeMap[keyof common_data_common_pb.EMarketDistributionTypeMap];
    color: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    marketcapdistributionList: Array<StatMarketDistributionMarketCap.AsObject>;
    volumedistributionList: Array<StatMarketDistributionVolume.AsObject>;
    valuedistributionList: Array<StatMarketDistributionValue.AsObject>;
    summarydistributionList: Array<StatMarketDistributionSummary.AsObject>;
  };
}
