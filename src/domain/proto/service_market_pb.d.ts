// package: mktservice
// file: service_market.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_data_common_pb from "./common/data_common_pb";
import * as common_data_ticker_info_pb from "./common/data_ticker_info_pb";
import * as common_data_timeandsale_pb from "./common/data_timeandsale_pb";
import * as common_data_index_pb from "./common/data_index_pb";
import * as common_data_priceinfo_pb from "./common/data_priceinfo_pb";
import * as common_data_recommendation_pb from "./common/data_recommendation_pb";
import * as common_data_chart_pb from "./common/data_chart_pb";
import * as common_data_profile_pb from "./common/data_profile_pb";
import * as common_data_fundamental_pb from "./common/data_fundamental_pb";
import * as common_data_finance_pb from "./common/data_finance_pb";
import * as common_data_org_events_pb from "./common/data_org_events_pb";
import * as common_stat_top_pb from "./common/stat_top_pb";
import * as common_stat_contribution_pb from "./common/stat_contribution_pb";
import * as common_stat_market_stats_pb from "./common/stat_market_stats_pb";
import * as common_stat_market_distribution_pb from "./common/stat_market_distribution_pb";
import * as common_stat_ad_indicator_pb from "./common/stat_ad_indicator_pb";
import * as common_data_orderflow_distribution_pb from "./common/data_orderflow_distribution_pb";
import * as common_stat_dividend_movement_pb from "./common/stat_dividend_movement_pb";

export class RequestOrganizationTicker extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getLanguage(): common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
  setLanguage(
    value: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestOrganizationTicker.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestOrganizationTicker
  ): RequestOrganizationTicker.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestOrganizationTicker,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestOrganizationTicker;
  static deserializeBinaryFromReader(
    message: RequestOrganizationTicker,
    reader: jspb.BinaryReader
  ): RequestOrganizationTicker;
}

export namespace RequestOrganizationTicker {
  export type AsObject = {
    requestid: string;
    ticker: string;
    language: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
  };
}

export class RequestChartDataTicker extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getResolution(): common_data_chart_pb.EResolutionsMap[keyof common_data_chart_pb.EResolutionsMap];
  setResolution(
    value: common_data_chart_pb.EResolutionsMap[keyof common_data_chart_pb.EResolutionsMap]
  ): void;

  getTicker(): string;
  setTicker(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBegin(): boolean;
  clearBegin(): void;
  getBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRequestfield(): RequestChartDataTicker.EFieldTypeMap[keyof RequestChartDataTicker.EFieldTypeMap];
  setRequestfield(
    value: RequestChartDataTicker.EFieldTypeMap[keyof RequestChartDataTicker.EFieldTypeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestChartDataTicker.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestChartDataTicker
  ): RequestChartDataTicker.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestChartDataTicker,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestChartDataTicker;
  static deserializeBinaryFromReader(
    message: RequestChartDataTicker,
    reader: jspb.BinaryReader
  ): RequestChartDataTicker;
}

export namespace RequestChartDataTicker {
  export type AsObject = {
    requestid: string;
    resolution: common_data_chart_pb.EResolutionsMap[keyof common_data_chart_pb.EResolutionsMap];
    ticker: string;
    limit: number;
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    begin?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    requestfield: RequestChartDataTicker.EFieldTypeMap[keyof RequestChartDataTicker.EFieldTypeMap];
  };

  export interface EFieldTypeMap {
    EFIELDTYPE_CLOSE: 0;
    EFIELDTYPE_OPEN: 1;
    EFIELDTYPE_HIGH: 2;
    EFIELDTYPE_LOW: 3;
    EFIELDTYPE_VOLUME: 5;
    EFIELDTYPE_NETVALUES: 6;
    EFIELDTYPE_VALUE: 7;
    EFIELDTYPE_VALUE_ALL: 8;
    EFIELDTYPE_ALL: 9;
  }

  export const EFieldType: EFieldTypeMap;
}

export class RequestListSingleChartDataTicker extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  clearListtickersList(): void;
  getListtickersList(): Array<RequestChartDataTicker>;
  setListtickersList(value: Array<RequestChartDataTicker>): void;
  addListtickers(
    value?: RequestChartDataTicker,
    index?: number
  ): RequestChartDataTicker;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): RequestListSingleChartDataTicker.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestListSingleChartDataTicker
  ): RequestListSingleChartDataTicker.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestListSingleChartDataTicker,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestListSingleChartDataTicker;
  static deserializeBinaryFromReader(
    message: RequestListSingleChartDataTicker,
    reader: jspb.BinaryReader
  ): RequestListSingleChartDataTicker;
}

export namespace RequestListSingleChartDataTicker {
  export type AsObject = {
    requestid: string;
    listtickersList: Array<RequestChartDataTicker.AsObject>;
  };
}

export class RequestChartDataTickers extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getResolution(): common_data_chart_pb.EResolutionsMap[keyof common_data_chart_pb.EResolutionsMap];
  setResolution(
    value: common_data_chart_pb.EResolutionsMap[keyof common_data_chart_pb.EResolutionsMap]
  ): void;

  clearTickersList(): void;
  getTickersList(): Array<string>;
  setTickersList(value: Array<string>): void;
  addTickers(value: string, index?: number): string;

  getLimit(): number;
  setLimit(value: number): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBegin(): boolean;
  clearBegin(): void;
  getBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRequestfield(): RequestChartDataTickers.EFieldTypeMap[keyof RequestChartDataTickers.EFieldTypeMap];
  setRequestfield(
    value: RequestChartDataTickers.EFieldTypeMap[keyof RequestChartDataTickers.EFieldTypeMap]
  ): void;

  clearTradingdatesList(): void;
  getTradingdatesList(): Array<
    common_data_common_pb.ETradingDateMap[keyof common_data_common_pb.ETradingDateMap]
  >;
  setTradingdatesList(
    value: Array<
      common_data_common_pb.ETradingDateMap[keyof common_data_common_pb.ETradingDateMap]
    >
  ): void;
  addTradingdates(
    value: common_data_common_pb.ETradingDateMap[keyof common_data_common_pb.ETradingDateMap],
    index?: number
  ): common_data_common_pb.ETradingDateMap[keyof common_data_common_pb.ETradingDateMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestChartDataTickers.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestChartDataTickers
  ): RequestChartDataTickers.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestChartDataTickers,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestChartDataTickers;
  static deserializeBinaryFromReader(
    message: RequestChartDataTickers,
    reader: jspb.BinaryReader
  ): RequestChartDataTickers;
}

export namespace RequestChartDataTickers {
  export type AsObject = {
    requestid: string;
    resolution: common_data_chart_pb.EResolutionsMap[keyof common_data_chart_pb.EResolutionsMap];
    tickersList: Array<string>;
    limit: number;
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    begin?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    requestfield: RequestChartDataTickers.EFieldTypeMap[keyof RequestChartDataTickers.EFieldTypeMap];
    tradingdatesList: Array<
      common_data_common_pb.ETradingDateMap[keyof common_data_common_pb.ETradingDateMap]
    >;
  };

  export interface EFieldTypeMap {
    EFIELDTYPE_CLOSE: 0;
    EFIELDTYPE_OPEN: 1;
    EFIELDTYPE_HIGH: 2;
    EFIELDTYPE_LOW: 3;
    EFIELDTYPE_VOLUME: 5;
    EFIELDTYPE_NETVALUES: 6;
    EFIELDTYPE_VALUE: 7;
    EFIELDTYPE_VALUE_ALL: 8;
    EFIELDTYPE_ALL: 9;
  }

  export const EFieldType: EFieldTypeMap;
}

export class RequestStatTopTickers extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  clearInfoList(): void;
  getInfoList(): Array<RequestStatTopTickers.RequestTopInfo>;
  setInfoList(value: Array<RequestStatTopTickers.RequestTopInfo>): void;
  addInfo(
    value?: RequestStatTopTickers.RequestTopInfo,
    index?: number
  ): RequestStatTopTickers.RequestTopInfo;

  getBasket(): common_data_common_pb.EStatisticalTopBasketMap[keyof common_data_common_pb.EStatisticalTopBasketMap];
  setBasket(
    value: common_data_common_pb.EStatisticalTopBasketMap[keyof common_data_common_pb.EStatisticalTopBasketMap]
  ): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStatTopTickers.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestStatTopTickers
  ): RequestStatTopTickers.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestStatTopTickers,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestStatTopTickers;
  static deserializeBinaryFromReader(
    message: RequestStatTopTickers,
    reader: jspb.BinaryReader
  ): RequestStatTopTickers;
}

export namespace RequestStatTopTickers {
  export type AsObject = {
    requestid: string;
    infoList: Array<RequestStatTopTickers.RequestTopInfo.AsObject>;
    basket: common_data_common_pb.EStatisticalTopBasketMap[keyof common_data_common_pb.EStatisticalTopBasketMap];
    limit: number;
  };

  export class RequestTopInfo extends jspb.Message {
    getType(): common_stat_top_pb.StatTopTickers.EStatTopTypeMap[keyof common_stat_top_pb.StatTopTickers.EStatTopTypeMap];
    setType(
      value: common_stat_top_pb.StatTopTickers.EStatTopTypeMap[keyof common_stat_top_pb.StatTopTickers.EStatTopTypeMap]
    ): void;

    getDirection(): common_stat_top_pb.StatTopTickers.EDirectionMap[keyof common_stat_top_pb.StatTopTickers.EDirectionMap];
    setDirection(
      value: common_stat_top_pb.StatTopTickers.EDirectionMap[keyof common_stat_top_pb.StatTopTickers.EDirectionMap]
    ): void;

    getPeriod(): common_stat_top_pb.StatTopTickers.EPeriodMap[keyof common_stat_top_pb.StatTopTickers.EPeriodMap];
    setPeriod(
      value: common_stat_top_pb.StatTopTickers.EPeriodMap[keyof common_stat_top_pb.StatTopTickers.EPeriodMap]
    ): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestTopInfo.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: RequestTopInfo
    ): RequestTopInfo.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: RequestTopInfo,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): RequestTopInfo;
    static deserializeBinaryFromReader(
      message: RequestTopInfo,
      reader: jspb.BinaryReader
    ): RequestTopInfo;
  }

  export namespace RequestTopInfo {
    export type AsObject = {
      type: common_stat_top_pb.StatTopTickers.EStatTopTypeMap[keyof common_stat_top_pb.StatTopTickers.EStatTopTypeMap];
      direction: common_stat_top_pb.StatTopTickers.EDirectionMap[keyof common_stat_top_pb.StatTopTickers.EDirectionMap];
      period: common_stat_top_pb.StatTopTickers.EPeriodMap[keyof common_stat_top_pb.StatTopTickers.EPeriodMap];
    };
  }
}

export class RequestStatBasketContribution extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getBy(): RequestStatBasketContribution.EContributionMap[keyof RequestStatBasketContribution.EContributionMap];
  setBy(
    value: RequestStatBasketContribution.EContributionMap[keyof RequestStatBasketContribution.EContributionMap]
  ): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStatBasketContribution.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestStatBasketContribution
  ): RequestStatBasketContribution.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestStatBasketContribution,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestStatBasketContribution;
  static deserializeBinaryFromReader(
    message: RequestStatBasketContribution,
    reader: jspb.BinaryReader
  ): RequestStatBasketContribution;
}

export namespace RequestStatBasketContribution {
  export type AsObject = {
    requestid: string;
    by: RequestStatBasketContribution.EContributionMap[keyof RequestStatBasketContribution.EContributionMap];
    limit: number;
  };

  export interface EContributionMap {
    VN30: 0;
    VNINDEX: 1;
    HNX_LISTED: 2;
    HNX_UPCOM: 3;
    HSX_LISTED: 4;
    HNX30: 5;
  }

  export const EContribution: EContributionMap;
}

export class RequestMarketStats extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getBasket(): RequestMarketStats.EMarketStatsMap[keyof RequestMarketStats.EMarketStatsMap];
  setBasket(
    value: RequestMarketStats.EMarketStatsMap[keyof RequestMarketStats.EMarketStatsMap]
  ): void;

  getType(): common_data_common_pb.EMarketStatsTypeMap[keyof common_data_common_pb.EMarketStatsTypeMap];
  setType(
    value: common_data_common_pb.EMarketStatsTypeMap[keyof common_data_common_pb.EMarketStatsTypeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMarketStats.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestMarketStats
  ): RequestMarketStats.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestMarketStats,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestMarketStats;
  static deserializeBinaryFromReader(
    message: RequestMarketStats,
    reader: jspb.BinaryReader
  ): RequestMarketStats;
}

export namespace RequestMarketStats {
  export type AsObject = {
    requestid: string;
    basket: RequestMarketStats.EMarketStatsMap[keyof RequestMarketStats.EMarketStatsMap];
    type: common_data_common_pb.EMarketStatsTypeMap[keyof common_data_common_pb.EMarketStatsTypeMap];
  };

  export interface EMarketStatsMap {
    VN30: 0;
    HNX_LISTED: 2;
    HNX_UPCOM: 3;
    HSX_LISTED: 4;
    HNX30: 5;
  }

  export const EMarketStats: EMarketStatsMap;
}

export class RequestMarketDistribution extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getBasket(): RequestMarketDistribution.EDistributionMap[keyof RequestMarketDistribution.EDistributionMap];
  setBasket(
    value: RequestMarketDistribution.EDistributionMap[keyof RequestMarketDistribution.EDistributionMap]
  ): void;

  getType(): common_data_common_pb.EMarketDistributionTypeMap[keyof common_data_common_pb.EMarketDistributionTypeMap];
  setType(
    value: common_data_common_pb.EMarketDistributionTypeMap[keyof common_data_common_pb.EMarketDistributionTypeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMarketDistribution.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestMarketDistribution
  ): RequestMarketDistribution.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestMarketDistribution,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestMarketDistribution;
  static deserializeBinaryFromReader(
    message: RequestMarketDistribution,
    reader: jspb.BinaryReader
  ): RequestMarketDistribution;
}

export namespace RequestMarketDistribution {
  export type AsObject = {
    requestid: string;
    basket: RequestMarketDistribution.EDistributionMap[keyof RequestMarketDistribution.EDistributionMap];
    type: common_data_common_pb.EMarketDistributionTypeMap[keyof common_data_common_pb.EMarketDistributionTypeMap];
  };

  export interface EDistributionMap {
    VN30: 0;
    HNX_LISTED: 2;
    HNX_UPCOM: 3;
    HSX_LISTED: 4;
    HNX30: 5;
  }

  export const EDistribution: EDistributionMap;
}

export class RequestStatMarketADIndicator extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getBy(): common_stat_ad_indicator_pb.EADIndicatorCategoryMap[keyof common_stat_ad_indicator_pb.EADIndicatorCategoryMap];
  setBy(
    value: common_stat_ad_indicator_pb.EADIndicatorCategoryMap[keyof common_stat_ad_indicator_pb.EADIndicatorCategoryMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStatMarketADIndicator.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestStatMarketADIndicator
  ): RequestStatMarketADIndicator.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestStatMarketADIndicator,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestStatMarketADIndicator;
  static deserializeBinaryFromReader(
    message: RequestStatMarketADIndicator,
    reader: jspb.BinaryReader
  ): RequestStatMarketADIndicator;
}

export namespace RequestStatMarketADIndicator {
  export type AsObject = {
    requestid: string;
    by: common_stat_ad_indicator_pb.EADIndicatorCategoryMap[keyof common_stat_ad_indicator_pb.EADIndicatorCategoryMap];
  };
}

export class RequestPriceInfoTicker extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPriceInfoTicker.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestPriceInfoTicker
  ): RequestPriceInfoTicker.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestPriceInfoTicker,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestPriceInfoTicker;
  static deserializeBinaryFromReader(
    message: RequestPriceInfoTicker,
    reader: jspb.BinaryReader
  ): RequestPriceInfoTicker;
}

export namespace RequestPriceInfoTicker {
  export type AsObject = {
    requestid: string;
    ticker: string;
  };
}

export class RequestPriceInfoTickers extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  clearTickersList(): void;
  getTickersList(): Array<string>;
  setTickersList(value: Array<string>): void;
  addTickers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPriceInfoTickers.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestPriceInfoTickers
  ): RequestPriceInfoTickers.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestPriceInfoTickers,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestPriceInfoTickers;
  static deserializeBinaryFromReader(
    message: RequestPriceInfoTickers,
    reader: jspb.BinaryReader
  ): RequestPriceInfoTickers;
}

export namespace RequestPriceInfoTickers {
  export type AsObject = {
    requestid: string;
    tickersList: Array<string>;
  };
}

export class RequestTimeAndSaleTicker extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  hasDay(): boolean;
  clearDay(): void;
  getDay(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDay(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLimit(): number;
  setLimit(value: number): void;

  hasBegin(): boolean;
  clearBegin(): void;
  getBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getType(): RequestTimeAndSaleTicker.ETimeAndSaleTypeMap[keyof RequestTimeAndSaleTicker.ETimeAndSaleTypeMap];
  setType(
    value: RequestTimeAndSaleTicker.ETimeAndSaleTypeMap[keyof RequestTimeAndSaleTicker.ETimeAndSaleTypeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTimeAndSaleTicker.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestTimeAndSaleTicker
  ): RequestTimeAndSaleTicker.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestTimeAndSaleTicker,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestTimeAndSaleTicker;
  static deserializeBinaryFromReader(
    message: RequestTimeAndSaleTicker,
    reader: jspb.BinaryReader
  ): RequestTimeAndSaleTicker;
}

export namespace RequestTimeAndSaleTicker {
  export type AsObject = {
    requestid: string;
    ticker: string;
    day?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    limit: number;
    begin?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    type: RequestTimeAndSaleTicker.ETimeAndSaleTypeMap[keyof RequestTimeAndSaleTicker.ETimeAndSaleTypeMap];
  };

  export interface ETimeAndSaleTypeMap {
    LATEST_MATCH: 0;
    HISTORY_MATCH: 1;
  }

  export const ETimeAndSaleType: ETimeAndSaleTypeMap;
}

export class RequestTimeAndSaleTickers extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  clearTickersList(): void;
  getTickersList(): Array<string>;
  setTickersList(value: Array<string>): void;
  addTickers(value: string, index?: number): string;

  hasDay(): boolean;
  clearDay(): void;
  getDay(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDay(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLimit(): number;
  setLimit(value: number): void;

  hasBegin(): boolean;
  clearBegin(): void;
  getBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getType(): RequestTimeAndSaleTickers.ETimeAndSaleTypeMap[keyof RequestTimeAndSaleTickers.ETimeAndSaleTypeMap];
  setType(
    value: RequestTimeAndSaleTickers.ETimeAndSaleTypeMap[keyof RequestTimeAndSaleTickers.ETimeAndSaleTypeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTimeAndSaleTickers.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestTimeAndSaleTickers
  ): RequestTimeAndSaleTickers.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestTimeAndSaleTickers,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestTimeAndSaleTickers;
  static deserializeBinaryFromReader(
    message: RequestTimeAndSaleTickers,
    reader: jspb.BinaryReader
  ): RequestTimeAndSaleTickers;
}

export namespace RequestTimeAndSaleTickers {
  export type AsObject = {
    requestid: string;
    tickersList: Array<string>;
    day?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    limit: number;
    begin?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    type: RequestTimeAndSaleTickers.ETimeAndSaleTypeMap[keyof RequestTimeAndSaleTickers.ETimeAndSaleTypeMap];
  };

  export interface ETimeAndSaleTypeMap {
    LATEST_MATCH: 0;
    HISTORY_MATCH: 1;
  }

  export const ETimeAndSaleType: ETimeAndSaleTypeMap;
}

export class RequestOrderFlowDistribution extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  hasDay(): boolean;
  clearDay(): void;
  getDay(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDay(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestOrderFlowDistribution.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestOrderFlowDistribution
  ): RequestOrderFlowDistribution.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestOrderFlowDistribution,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestOrderFlowDistribution;
  static deserializeBinaryFromReader(
    message: RequestOrderFlowDistribution,
    reader: jspb.BinaryReader
  ): RequestOrderFlowDistribution;
}

export namespace RequestOrderFlowDistribution {
  export type AsObject = {
    requestid: string;
    ticker: string;
    day?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class RequestListTickers extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getTickertype(): common_data_common_pb.ETickerTypeMap[keyof common_data_common_pb.ETickerTypeMap];
  setTickertype(
    value: common_data_common_pb.ETickerTypeMap[keyof common_data_common_pb.ETickerTypeMap]
  ): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestListTickers.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestListTickers
  ): RequestListTickers.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestListTickers,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestListTickers;
  static deserializeBinaryFromReader(
    message: RequestListTickers,
    reader: jspb.BinaryReader
  ): RequestListTickers;
}

export namespace RequestListTickers {
  export type AsObject = {
    requestid: string;
    tickertype: common_data_common_pb.ETickerTypeMap[keyof common_data_common_pb.ETickerTypeMap];
    code: string;
  };
}

export class RequestMarketRecommendations extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getInstitution(): common_data_common_pb.ERecommendationSourceMap[keyof common_data_common_pb.ERecommendationSourceMap];
  setInstitution(
    value: common_data_common_pb.ERecommendationSourceMap[keyof common_data_common_pb.ERecommendationSourceMap]
  ): void;

  getLanguage(): common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
  setLanguage(
    value: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap]
  ): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMarketRecommendations.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestMarketRecommendations
  ): RequestMarketRecommendations.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestMarketRecommendations,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestMarketRecommendations;
  static deserializeBinaryFromReader(
    message: RequestMarketRecommendations,
    reader: jspb.BinaryReader
  ): RequestMarketRecommendations;
}

export namespace RequestMarketRecommendations {
  export type AsObject = {
    requestid: string;
    institution: common_data_common_pb.ERecommendationSourceMap[keyof common_data_common_pb.ERecommendationSourceMap];
    language: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
    limit: number;
  };
}

export class RequestMarketCoverWarrant extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getIssuercode(): string;
  setIssuercode(value: string): void;

  getUnderlyingcode(): string;
  setUnderlyingcode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMarketCoverWarrant.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestMarketCoverWarrant
  ): RequestMarketCoverWarrant.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestMarketCoverWarrant,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestMarketCoverWarrant;
  static deserializeBinaryFromReader(
    message: RequestMarketCoverWarrant,
    reader: jspb.BinaryReader
  ): RequestMarketCoverWarrant;
}

export namespace RequestMarketCoverWarrant {
  export type AsObject = {
    requestid: string;
    issuercode: string;
    underlyingcode: string;
  };
}

export class RequestListPriceInfoPutThrough extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  clearListbasketList(): void;
  getListbasketList(): Array<
    common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap]
  >;
  setListbasketList(
    value: Array<
      common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap]
    >
  ): void;
  addListbasket(
    value: common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap],
    index?: number
  ): common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestListPriceInfoPutThrough.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestListPriceInfoPutThrough
  ): RequestListPriceInfoPutThrough.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestListPriceInfoPutThrough,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestListPriceInfoPutThrough;
  static deserializeBinaryFromReader(
    message: RequestListPriceInfoPutThrough,
    reader: jspb.BinaryReader
  ): RequestListPriceInfoPutThrough;
}

export namespace RequestListPriceInfoPutThrough {
  export type AsObject = {
    requestid: string;
    listbasketList: Array<
      common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap]
    >;
  };
}

export class RequestStatDividendMovement extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getBasket(): RequestStatDividendMovement.EMarketStatsMap[keyof RequestStatDividendMovement.EMarketStatsMap];
  setBasket(
    value: RequestStatDividendMovement.EMarketStatsMap[keyof RequestStatDividendMovement.EMarketStatsMap]
  ): void;

  getType(): common_stat_dividend_movement_pb.EDividendMovementTypeMap[keyof common_stat_dividend_movement_pb.EDividendMovementTypeMap];
  setType(
    value: common_stat_dividend_movement_pb.EDividendMovementTypeMap[keyof common_stat_dividend_movement_pb.EDividendMovementTypeMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStatDividendMovement.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RequestStatDividendMovement
  ): RequestStatDividendMovement.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RequestStatDividendMovement,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RequestStatDividendMovement;
  static deserializeBinaryFromReader(
    message: RequestStatDividendMovement,
    reader: jspb.BinaryReader
  ): RequestStatDividendMovement;
}

export namespace RequestStatDividendMovement {
  export type AsObject = {
    requestid: string;
    basket: RequestStatDividendMovement.EMarketStatsMap[keyof RequestStatDividendMovement.EMarketStatsMap];
    type: common_stat_dividend_movement_pb.EDividendMovementTypeMap[keyof common_stat_dividend_movement_pb.EDividendMovementTypeMap];
  };

  export interface EMarketStatsMap {
    VN30: 0;
    HNX_LISTED: 2;
    HNX_UPCOM: 3;
    HSX_LISTED: 4;
    HNX30: 5;
  }

  export const EMarketStats: EMarketStatsMap;
}
