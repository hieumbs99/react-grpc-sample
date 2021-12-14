// package: mktservice
// file: common/data_recommendation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";
import * as common_data_priceinfo_pb from "../common/data_priceinfo_pb";

export class MarketRecommendationInfo extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getSignaldate(): string;
  setSignaldate(value: string): void;

  getSignalmethod(): MarketRecommendationInfo.ESignalMethodMap[keyof MarketRecommendationInfo.ESignalMethodMap];
  setSignalmethod(
    value: MarketRecommendationInfo.ESignalMethodMap[keyof MarketRecommendationInfo.ESignalMethodMap]
  ): void;

  getSide(): MarketRecommendationInfo.ESignalSideMap[keyof MarketRecommendationInfo.ESignalSideMap];
  setSide(
    value: MarketRecommendationInfo.ESignalSideMap[keyof MarketRecommendationInfo.ESignalSideMap]
  ): void;

  getExchangecode(): string;
  setExchangecode(value: string): void;

  hasRecommendedprice(): boolean;
  clearRecommendedprice(): void;
  getRecommendedprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setRecommendedprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasExpectedprice(): boolean;
  clearExpectedprice(): void;
  getExpectedprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setExpectedprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getAnalysisreporturl(): string;
  setAnalysisreporturl(value: string): void;

  getLanguague(): common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
  setLanguague(
    value: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketRecommendationInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MarketRecommendationInfo
  ): MarketRecommendationInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MarketRecommendationInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): MarketRecommendationInfo;
  static deserializeBinaryFromReader(
    message: MarketRecommendationInfo,
    reader: jspb.BinaryReader
  ): MarketRecommendationInfo;
}

export namespace MarketRecommendationInfo {
  export type AsObject = {
    ticker: string;
    signaldate: string;
    signalmethod: MarketRecommendationInfo.ESignalMethodMap[keyof MarketRecommendationInfo.ESignalMethodMap];
    side: MarketRecommendationInfo.ESignalSideMap[keyof MarketRecommendationInfo.ESignalSideMap];
    exchangecode: string;
    recommendedprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    expectedprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    analysisreporturl: string;
    languague: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
  };

  export interface ESignalMethodMap {
    TA: 0;
    FA: 1;
    TAFA: 2;
  }

  export const ESignalMethod: ESignalMethodMap;

  export interface ESignalSideMap {
    WATCHING: 0;
    BUY: 1;
    SELL: 2;
    POSITIVE: 3;
  }

  export const ESignalSide: ESignalSideMap;
}

export class MarketRecommendation extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): MarketRecommendationInfo | undefined;
  setInfo(value?: MarketRecommendationInfo): void;

  hasLastsale(): boolean;
  clearLastsale(): void;
  getLastsale(): common_data_priceinfo_pb.PriceInfoLastSale | undefined;
  setLastsale(value?: common_data_priceinfo_pb.PriceInfoLastSale): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketRecommendation.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MarketRecommendation
  ): MarketRecommendation.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MarketRecommendation,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): MarketRecommendation;
  static deserializeBinaryFromReader(
    message: MarketRecommendation,
    reader: jspb.BinaryReader
  ): MarketRecommendation;
}

export namespace MarketRecommendation {
  export type AsObject = {
    info?: MarketRecommendationInfo.AsObject;
    lastsale?: common_data_priceinfo_pb.PriceInfoLastSale.AsObject;
  };
}

export class MarketRecommendations extends jspb.Message {
  getInstitution(): common_data_common_pb.ERecommendationSourceMap[keyof common_data_common_pb.ERecommendationSourceMap];
  setInstitution(
    value: common_data_common_pb.ERecommendationSourceMap[keyof common_data_common_pb.ERecommendationSourceMap]
  ): void;

  clearRecommendationsList(): void;
  getRecommendationsList(): Array<MarketRecommendation>;
  setRecommendationsList(value: Array<MarketRecommendation>): void;
  addRecommendations(
    value?: MarketRecommendation,
    index?: number
  ): MarketRecommendation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketRecommendations.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MarketRecommendations
  ): MarketRecommendations.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MarketRecommendations,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): MarketRecommendations;
  static deserializeBinaryFromReader(
    message: MarketRecommendations,
    reader: jspb.BinaryReader
  ): MarketRecommendations;
}

export namespace MarketRecommendations {
  export type AsObject = {
    institution: common_data_common_pb.ERecommendationSourceMap[keyof common_data_common_pb.ERecommendationSourceMap];
    recommendationsList: Array<MarketRecommendation.AsObject>;
  };
}
