// package: mktservice
// file: common/stat_top.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";
import * as common_data_priceinfo_pb from "../common/data_priceinfo_pb";

export class StatTopTickers extends jspb.Message {
  getType(): StatTopTickers.EStatTopTypeMap[keyof StatTopTickers.EStatTopTypeMap];
  setType(
    value: StatTopTickers.EStatTopTypeMap[keyof StatTopTickers.EStatTopTypeMap]
  ): void;

  getDirection(): StatTopTickers.EDirectionMap[keyof StatTopTickers.EDirectionMap];
  setDirection(
    value: StatTopTickers.EDirectionMap[keyof StatTopTickers.EDirectionMap]
  ): void;

  getPeriod(): StatTopTickers.EPeriodMap[keyof StatTopTickers.EPeriodMap];
  setPeriod(
    value: StatTopTickers.EPeriodMap[keyof StatTopTickers.EPeriodMap]
  ): void;

  getBasket(): common_data_common_pb.EStatisticalTopBasketMap[keyof common_data_common_pb.EStatisticalTopBasketMap];
  setBasket(
    value: common_data_common_pb.EStatisticalTopBasketMap[keyof common_data_common_pb.EStatisticalTopBasketMap]
  ): void;

  clearFulltickersList(): void;
  getFulltickersList(): Array<string>;
  setFulltickersList(value: Array<string>): void;
  addFulltickers(value: string, index?: number): string;

  clearFulltickerinfoList(): void;
  getFulltickerinfoList(): Array<StatTopTickers.TickerInfo>;
  setFulltickerinfoList(value: Array<StatTopTickers.TickerInfo>): void;
  addFulltickerinfo(
    value?: StatTopTickers.TickerInfo,
    index?: number
  ): StatTopTickers.TickerInfo;

  clearLastsalesList(): void;
  getLastsalesList(): Array<common_data_priceinfo_pb.PriceInfoLastSale>;
  setLastsalesList(
    value: Array<common_data_priceinfo_pb.PriceInfoLastSale>
  ): void;
  addLastsales(
    value?: common_data_priceinfo_pb.PriceInfoLastSale,
    index?: number
  ): common_data_priceinfo_pb.PriceInfoLastSale;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatTopTickers.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatTopTickers
  ): StatTopTickers.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatTopTickers,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatTopTickers;
  static deserializeBinaryFromReader(
    message: StatTopTickers,
    reader: jspb.BinaryReader
  ): StatTopTickers;
}

export namespace StatTopTickers {
  export type AsObject = {
    type: StatTopTickers.EStatTopTypeMap[keyof StatTopTickers.EStatTopTypeMap];
    direction: StatTopTickers.EDirectionMap[keyof StatTopTickers.EDirectionMap];
    period: StatTopTickers.EPeriodMap[keyof StatTopTickers.EPeriodMap];
    basket: common_data_common_pb.EStatisticalTopBasketMap[keyof common_data_common_pb.EStatisticalTopBasketMap];
    fulltickersList: Array<string>;
    fulltickerinfoList: Array<StatTopTickers.TickerInfo.AsObject>;
    lastsalesList: Array<common_data_priceinfo_pb.PriceInfoLastSale.AsObject>;
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export class TickerInfo extends jspb.Message {
    getTicker(): string;
    setTicker(value: string): void;

    hasTopvalue(): boolean;
    clearTopvalue(): void;
    getTopvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setTopvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

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
      topvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    };
  }

  export interface EStatTopTypeMap {
    TOPPRICE: 0;
    TOPVOLUME: 1;
    TOPVALUE: 2;
    TOPHIGHLOWRANGE: 3;
    TOPFOREIGNBUY: 4;
    TOPFOREIGNSELL: 5;
    TOPFOREIGNBUYVALUES: 6;
    TOPFOREIGNSELLVALUES: 7;
    TOPFOREIGNNETVALUES: 8;
  }

  export const EStatTopType: EStatTopTypeMap;

  export interface EPeriodMap {
    STATTOP_1D: 0;
    STATTOP_1W: 1;
    STATTOP_1M: 2;
    STATTOP_3M: 3;
    STATTOP_6M: 4;
    STATTOP_1Y: 5;
    STATTOP_ALL: 6;
  }

  export const EPeriod: EPeriodMap;

  export interface EDirectionMap {
    LEFT: 0;
    RIGHT: 1;
  }

  export const EDirection: EDirectionMap;
}
