// package: mktservice
// file: common/stat_dividend_movement.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class StatDividendMovement extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBasketcode(): string;
  setBasketcode(value: string): void;

  getType(): EDividendMovementTypeMap[keyof EDividendMovementTypeMap];
  setType(
    value: EDividendMovementTypeMap[keyof EDividendMovementTypeMap]
  ): void;

  hasTotalbuyvalue(): boolean;
  clearTotalbuyvalue(): void;
  getTotalbuyvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalbuyvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalsellvalue(): boolean;
  clearTotalsellvalue(): void;
  getTotalsellvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalsellvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalnetvalue(): boolean;
  clearTotalnetvalue(): void;
  getTotalnetvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalnetvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  clearDividendmovementsList(): void;
  getDividendmovementsList(): Array<StatDividendMovementSingle>;
  setDividendmovementsList(value: Array<StatDividendMovementSingle>): void;
  addDividendmovements(
    value?: StatDividendMovementSingle,
    index?: number
  ): StatDividendMovementSingle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatDividendMovement.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatDividendMovement
  ): StatDividendMovement.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatDividendMovement,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatDividendMovement;
  static deserializeBinaryFromReader(
    message: StatDividendMovement,
    reader: jspb.BinaryReader
  ): StatDividendMovement;
}

export namespace StatDividendMovement {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    basketcode: string;
    type: EDividendMovementTypeMap[keyof EDividendMovementTypeMap];
    totalbuyvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalsellvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalnetvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    dividendmovementsList: Array<StatDividendMovementSingle.AsObject>;
  };
}

export class StatDividendMovementSingle extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasChangedpercentage(): boolean;
  clearChangedpercentage(): void;
  getChangedpercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedpercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalforeignbuyvalue(): boolean;
  clearTotalforeignbuyvalue(): void;
  getTotalforeignbuyvalue():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setTotalforeignbuyvalue(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  hasTotalforeignsellvalue(): boolean;
  clearTotalforeignsellvalue(): void;
  getTotalforeignsellvalue():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setTotalforeignsellvalue(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  hasTotalforeignnetvalue(): boolean;
  clearTotalforeignnetvalue(): void;
  getTotalforeignnetvalue():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setTotalforeignnetvalue(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  getLastsalecolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setLastsalecolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  getForeignnetcolor(): common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  setForeignnetcolor(
    value: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatDividendMovementSingle.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatDividendMovementSingle
  ): StatDividendMovementSingle.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatDividendMovementSingle,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatDividendMovementSingle;
  static deserializeBinaryFromReader(
    message: StatDividendMovementSingle,
    reader: jspb.BinaryReader
  ): StatDividendMovementSingle;
}

export namespace StatDividendMovementSingle {
  export type AsObject = {
    ticker: string;
    changedpercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalforeignbuyvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalforeignsellvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalforeignnetvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastsalecolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
    foreignnetcolor: common_data_common_pb.EMarketColorCodeMap[keyof common_data_common_pb.EMarketColorCodeMap];
  };
}

export interface EDividendMovementTypeMap {
  FOREIGNERTRADING: 0;
}

export const EDividendMovementType: EDividendMovementTypeMap;
