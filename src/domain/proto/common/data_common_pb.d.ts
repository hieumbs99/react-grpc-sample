// package: mktservice
// file: common/data_common.proto

import * as jspb from "google-protobuf";

export class Header extends jspb.Message {
  getTransmissiontype(): EHeaderTransmissionTypeMap[keyof EHeaderTransmissionTypeMap];
  setTransmissiontype(
    value: EHeaderTransmissionTypeMap[keyof EHeaderTransmissionTypeMap]
  ): void;

  getTradingsession(): ETradingSessionMap[keyof ETradingSessionMap];
  setTradingsession(value: ETradingSessionMap[keyof ETradingSessionMap]): void;

  getMarketcode(): EMarketCodeMap[keyof EMarketCodeMap];
  setMarketcode(value: EMarketCodeMap[keyof EMarketCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Header,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(
    message: Header,
    reader: jspb.BinaryReader
  ): Header;
}

export namespace Header {
  export type AsObject = {
    transmissiontype: EHeaderTransmissionTypeMap[keyof EHeaderTransmissionTypeMap];
    tradingsession: ETradingSessionMap[keyof ETradingSessionMap];
    marketcode: EMarketCodeMap[keyof EMarketCodeMap];
  };
}

export class Noop extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Noop.AsObject;
  static toObject(includeInstance: boolean, msg: Noop): Noop.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Noop,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Noop;
  static deserializeBinaryFromReader(
    message: Noop,
    reader: jspb.BinaryReader
  ): Noop;
}

export namespace Noop {
  export type AsObject = {
    id: string;
  };
}

export interface ELanguageMap {
  VI: 0;
  EN: 1;
  KR: 2;
  JP: 3;
  CN: 4;
}

export const ELanguage: ELanguageMap;

export interface ETickerTypeMap {
  ALL: 0;
  SECURITIES: 1;
  DERIVATIVES: 2;
  COVERWARRANT: 3;
  BOND: 4;
  INDEX: 5;
  INDUSTRY: 6;
  RECOMMENDATION: 7;
  ETF: 8;
}

export const ETickerType: ETickerTypeMap;

export interface ETradingStatusMap {
  ETA_NORMAL: 0;
  ETA_HALT: 1;
}

export const ETradingStatus: ETradingStatusMap;

export interface EMarketCodeMap {
  EMC_UNKNOWN: 0;
  HSX_ALL: 20;
  HSX_LISTED: 21;
  HNX_ALL: 10;
  HNX_LISTED: 11;
  HNX_UPCOM: 19;
  HNX_DERIVATIVE: 15;
  HNX_BOND_LISTED: 14;
}

export const EMarketCode: EMarketCodeMap;

export interface EMarketColorCodeMap {
  COLOR_NOCHANGE: 0;
  COLOR_FLOOR: -2;
  COLOR_DECLINE: -1;
  COLOR_ADVANCE: 1;
  COLOR_CEILING: 2;
}

export const EMarketColorCode: EMarketColorCodeMap;

export interface ETradingSessionMap {
  ETS_UNKNOWN: 0;
  PRE_MARKET_CORP: 10;
  PRE_MARKET_EXCH: 11;
  IN_MARKET_BUY_IN: 20;
  IN_MARKET_ATO: 30;
  IN_MARKET_OPEN: 40;
  IN_MARKET_BREAK: 50;
  IN_MARKET_ATC: 70;
  IN_MARKET_RUNOFF: 80;
  IN_MARKET_SELL_OUT: 89;
  POST_MARKET_SUMMARY: 90;
  POST_MARKET_FINISH: 99;
}

export const ETradingSession: ETradingSessionMap;

export interface ETradingSideMap {
  ESIDE_UNKNOWN: 0;
  ESIDE_BUY: 1;
  ESIDE_SELL: 2;
}

export const ETradingSide: ETradingSideMap;

export interface ESecuritiesTypeMap {
  EST_STOCK: 0;
  EST_ETF: 1;
  EST_COVERWARRANT: 2;
  EST_FUTURE: 3;
  EST_OPTION: 4;
  EST_BONDFUTURE: 5;
  EST_BOND: 10;
  EST_CORPBOND: 11;
  EST_GOVBOND: 12;
  EST_FUND: 20;
  EST_MUTUALFUND: 21;
}

export const ESecuritiesType: ESecuritiesTypeMap;

export interface ESuportedIndexCodeMap {
  UPCOMINDEX: 0;
  HNXINDEX: 10;
  VNINDEX: 30;
  VN30: 31;
  VNX50: 32;
  VN100: 33;
  VNXALL: 34;
  VNALL: 35;
  VNCOND: 36;
  VNCONS: 37;
  VNENE: 38;
  VNFIN: 39;
  VNHEAL: 40;
  VNIND: 41;
  VNIT: 42;
  VNMAT: 43;
  VNMID: 44;
  VNREAL: 45;
  VNSI: 46;
  VNSML: 47;
  VNUTI: 48;
}

export const ESuportedIndexCode: ESuportedIndexCodeMap;

export interface EStatisticalTopBasketMap {
  ESTB_ALL: 0;
  ESTB_HSX_LISTED: 1;
  ESTB_HNX_LISTED: 2;
  ESTB_HNX_UPCOM: 3;
  ESTB_VN30: 4;
  ESTB_UNSPECIFIED: 999;
}

export const EStatisticalTopBasket: EStatisticalTopBasketMap;

export interface ERecommendationSourceMap {
  RECOMMENDATION_ALL: 0;
  RECOMMENDATION_MBS: 1;
}

export const ERecommendationSource: ERecommendationSourceMap;

export interface ETILoadStatusMap {
  ETI_LOADING: 0;
  ETI_LOAD: 2;
  ETI_FAILED: 3;
}

export const ETILoadStatus: ETILoadStatusMap;

export interface EHeaderTransmissionTypeMap {
  NEW: 0;
  UPDATE: 1;
  REPLAY: 2;
}

export const EHeaderTransmissionType: EHeaderTransmissionTypeMap;

export interface ETradingDateMap {
  PRESENT: 0;
  ONE_DAY_AGO: 1;
  TWO_DAY_AGO: 2;
  THREE_DAY_AGO: 3;
  FOUR_DAY_AGO: 4;
  ONE_WEEK_AGO: 5;
  TWO_WEEK_AGO: 6;
  ONE_MONTH_AGO: 7;
}

export const ETradingDate: ETradingDateMap;

export interface EMarketStatsTypeMap {
  CONTRIBUTION: 0;
  SCALE: 1;
}

export const EMarketStatsType: EMarketStatsTypeMap;

export interface EMarketDistributionTypeMap {
  VALUE: 0;
  VOLUME: 1;
  MARKET_CAP: 3;
  SUMMARY: 10;
}

export const EMarketDistributionType: EMarketDistributionTypeMap;

export interface EClientTypeMap {
  MOBILE: 0;
  WEB: 1;
}

export const EClientType: EClientTypeMap;
