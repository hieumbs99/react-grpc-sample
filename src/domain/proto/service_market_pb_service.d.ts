// package: mktservice
// file: service_market.proto

import * as service_market_pb from "./service_market_pb";
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
import { grpc } from "@improbable-eng/grpc-web";

type MarketDataServiceGetStreamSupportedSecurities = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestListTickers;
  readonly responseType: typeof common_data_ticker_info_pb.TickerInfo;
};

type MarketDataServiceGetListSupportedSecurities = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestListTickers;
  readonly responseType: typeof common_data_ticker_info_pb.TickerInfos;
};

type MarketDataServiceGetListSupportedIndustry = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_data_common_pb.Noop;
  readonly responseType: typeof common_data_ticker_info_pb.IndustryInfos;
};

type MarketDataServiceGetStreamSupportedIndustry = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof common_data_common_pb.Noop;
  readonly responseType: typeof common_data_ticker_info_pb.IndustryInfo;
};

type MarketDataServiceGetChartData = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestChartDataTicker;
  readonly responseType: typeof common_data_chart_pb.ChartData;
};

type MarketDataServiceGetStreamChartData = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestChartDataTickers;
  readonly responseType: typeof common_data_chart_pb.ChartData;
};

type MarketDataServiceGetStreamChartDataWithListSingleTickers = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestListSingleChartDataTicker;
  readonly responseType: typeof common_data_chart_pb.ChartData;
};

type MarketDataServiceGetStreamNetFlowChartData = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestChartDataTickers;
  readonly responseType: typeof common_data_chart_pb.ChartData;
};

type MarketDataServiceGetStreamLiQuiDiTytData = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestChartDataTickers;
  readonly responseType: typeof common_data_chart_pb.ChartData;
};

type MarketDataServiceGetIndexInfo = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTicker;
  readonly responseType: typeof common_data_index_pb.IndexInfo;
};

type MarketDataServiceGetStreamPriceInfoFull = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTickers;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfoFull;
};

type MarketDataServiceGetStreamIndexInfo = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTicker;
  readonly responseType: typeof common_data_index_pb.IndexInfo;
};

type MarketDataServiceGetPriceInfoFull = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTicker;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfoFull;
};

type MarketDataServiceGetPriceInfo = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTicker;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfo;
};

type MarketDataServiceGetStreamPriceInfoByGroup = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestListTickers;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfo;
};

type MarketDataServiceGetStreamPriceInfoFullByGroup = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestListTickers;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfoFull;
};

type MarketDataServiceGetPriceInfoBasic = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTicker;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfoBasic;
};

type MarketDataServiceGetStreamPriceInfoLastSale = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTickers;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfoLastSale;
};

type MarketDataServiceGetPriceInfoLastSale = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTicker;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfoLastSale;
};

type MarketDataServiceGetPriceInfoQuotes = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTicker;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfoQuotes;
};

type MarketDataServiceGetPriceInfoSummary = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTicker;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfoSummary;
};

type MarketDataServiceGetCWPriceInfo = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestPriceInfoTicker;
  readonly responseType: typeof common_data_priceinfo_pb.CWPriceInfo;
};

type MarketDataServiceGetTimeAndSale = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestTimeAndSaleTicker;
  readonly responseType: typeof common_data_timeandsale_pb.TimeAndSale;
};

type MarketDataServiceGetStreamTimeAndSale = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestTimeAndSaleTickers;
  readonly responseType: typeof common_data_timeandsale_pb.TimeAndSale;
};

type MarketDataServiceGetOrderFlowDistribution = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestOrderFlowDistribution;
  readonly responseType: typeof common_data_orderflow_distribution_pb.OrderFlowDistributions;
};

type MarketDataServiceGetProfile = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestOrganizationTicker;
  readonly responseType: typeof common_data_profile_pb.OrganizationProfile;
};

type MarketDataServiceGetFinance = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestOrganizationTicker;
  readonly responseType: typeof common_data_finance_pb.OrganizationFinance;
};

type MarketDataServiceGetFundamental = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestOrganizationTicker;
  readonly responseType: typeof common_data_fundamental_pb.OrganizationFundamental;
};

type MarketDataServiceGetOrganizationEvents = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestOrganizationTicker;
  readonly responseType: typeof common_data_org_events_pb.OrganizationEvents;
};

type MarketDataServiceGetStatisticalADMarketIndicator = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestStatMarketADIndicator;
  readonly responseType: typeof common_stat_ad_indicator_pb.StatMarketADIndicator;
};

type MarketDataServiceGetStreamStatisticalTops = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestStatTopTickers;
  readonly responseType: typeof common_stat_top_pb.StatTopTickers;
};

type MarketDataServiceGetStatisticalBasketContribution = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestStatBasketContribution;
  readonly responseType: typeof common_stat_contribution_pb.StatBasketContribution;
};

type MarketDataServiceGetMarketStats = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestMarketStats;
  readonly responseType: typeof common_stat_market_stats_pb.StatMarketStats;
};

type MarketDataServiceGetMarketDistribution = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestMarketDistribution;
  readonly responseType: typeof common_stat_market_distribution_pb.StatMarketDistribution;
};

type MarketDataServiceGetMarketRecommendations = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestMarketRecommendations;
  readonly responseType: typeof common_data_recommendation_pb.MarketRecommendations;
};

type MarketDataServiceGetStreamMarketRecommendations = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestMarketRecommendations;
  readonly responseType: typeof common_data_recommendation_pb.MarketRecommendation;
};

type MarketDataServiceGetStreamPriceInfoByCoverWarrantGroup = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestMarketCoverWarrant;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfo;
};

type MarketDataServiceGetStreamPriceInfoFullByCoverWarrantGroup = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_market_pb.RequestMarketCoverWarrant;
  readonly responseType: typeof common_data_priceinfo_pb.PriceInfoFull;
};

type MarketDataServiceGetListPriceInfoPutThrough = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestListPriceInfoPutThrough;
  readonly responseType: typeof common_data_priceinfo_pb.ListPriceInfoPutThrough;
};

type MarketDataServiceGetStatDividendMovement = {
  readonly methodName: string;
  readonly service: typeof MarketDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_market_pb.RequestStatDividendMovement;
  readonly responseType: typeof common_stat_dividend_movement_pb.StatDividendMovement;
};

export class MarketDataService {
  static readonly serviceName: string;
  static readonly GetStreamSupportedSecurities: MarketDataServiceGetStreamSupportedSecurities;
  static readonly GetListSupportedSecurities: MarketDataServiceGetListSupportedSecurities;
  static readonly GetListSupportedIndustry: MarketDataServiceGetListSupportedIndustry;
  static readonly GetStreamSupportedIndustry: MarketDataServiceGetStreamSupportedIndustry;
  static readonly GetChartData: MarketDataServiceGetChartData;
  static readonly GetStreamChartData: MarketDataServiceGetStreamChartData;
  static readonly GetStreamChartDataWithListSingleTickers: MarketDataServiceGetStreamChartDataWithListSingleTickers;
  static readonly GetStreamNetFlowChartData: MarketDataServiceGetStreamNetFlowChartData;
  static readonly GetStreamLiQuiDiTytData: MarketDataServiceGetStreamLiQuiDiTytData;
  static readonly GetIndexInfo: MarketDataServiceGetIndexInfo;
  static readonly GetStreamPriceInfoFull: MarketDataServiceGetStreamPriceInfoFull;
  static readonly GetStreamIndexInfo: MarketDataServiceGetStreamIndexInfo;
  static readonly GetPriceInfoFull: MarketDataServiceGetPriceInfoFull;
  static readonly GetPriceInfo: MarketDataServiceGetPriceInfo;
  static readonly GetStreamPriceInfoByGroup: MarketDataServiceGetStreamPriceInfoByGroup;
  static readonly GetStreamPriceInfoFullByGroup: MarketDataServiceGetStreamPriceInfoFullByGroup;
  static readonly GetPriceInfoBasic: MarketDataServiceGetPriceInfoBasic;
  static readonly GetStreamPriceInfoLastSale: MarketDataServiceGetStreamPriceInfoLastSale;
  static readonly GetPriceInfoLastSale: MarketDataServiceGetPriceInfoLastSale;
  static readonly GetPriceInfoQuotes: MarketDataServiceGetPriceInfoQuotes;
  static readonly GetPriceInfoSummary: MarketDataServiceGetPriceInfoSummary;
  static readonly GetCWPriceInfo: MarketDataServiceGetCWPriceInfo;
  static readonly GetTimeAndSale: MarketDataServiceGetTimeAndSale;
  static readonly GetStreamTimeAndSale: MarketDataServiceGetStreamTimeAndSale;
  static readonly GetOrderFlowDistribution: MarketDataServiceGetOrderFlowDistribution;
  static readonly GetProfile: MarketDataServiceGetProfile;
  static readonly GetFinance: MarketDataServiceGetFinance;
  static readonly GetFundamental: MarketDataServiceGetFundamental;
  static readonly GetOrganizationEvents: MarketDataServiceGetOrganizationEvents;
  static readonly GetStatisticalADMarketIndicator: MarketDataServiceGetStatisticalADMarketIndicator;
  static readonly GetStreamStatisticalTops: MarketDataServiceGetStreamStatisticalTops;
  static readonly GetStatisticalBasketContribution: MarketDataServiceGetStatisticalBasketContribution;
  static readonly GetMarketStats: MarketDataServiceGetMarketStats;
  static readonly GetMarketDistribution: MarketDataServiceGetMarketDistribution;
  static readonly GetMarketRecommendations: MarketDataServiceGetMarketRecommendations;
  static readonly GetStreamMarketRecommendations: MarketDataServiceGetStreamMarketRecommendations;
  static readonly GetStreamPriceInfoByCoverWarrantGroup: MarketDataServiceGetStreamPriceInfoByCoverWarrantGroup;
  static readonly GetStreamPriceInfoFullByCoverWarrantGroup: MarketDataServiceGetStreamPriceInfoFullByCoverWarrantGroup;
  static readonly GetListPriceInfoPutThrough: MarketDataServiceGetListPriceInfoPutThrough;
  static readonly GetStatDividendMovement: MarketDataServiceGetStatDividendMovement;
}

export type ServiceError = {
  message: string;
  code: number;
  metadata: grpc.Metadata;
};
export type Status = { details: string; code: number; metadata: grpc.Metadata };

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: "data", handler: (message: T) => void): ResponseStream<T>;
  on(type: "end", handler: (status?: Status) => void): ResponseStream<T>;
  on(type: "status", handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: "end", handler: (status?: Status) => void): RequestStream<T>;
  on(type: "status", handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(
    type: "data",
    handler: (message: ResT) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: "end",
    handler: (status?: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: "status",
    handler: (status: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
}

export class MarketDataServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getStreamSupportedSecurities(
    requestMessage: service_market_pb.RequestListTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_ticker_info_pb.TickerInfo>;
  getListSupportedSecurities(
    requestMessage: service_market_pb.RequestListTickers,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_ticker_info_pb.TickerInfos | null
    ) => void
  ): UnaryResponse;
  getListSupportedSecurities(
    requestMessage: service_market_pb.RequestListTickers,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_ticker_info_pb.TickerInfos | null
    ) => void
  ): UnaryResponse;
  getListSupportedIndustry(
    requestMessage: common_data_common_pb.Noop,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_ticker_info_pb.IndustryInfos | null
    ) => void
  ): UnaryResponse;
  getListSupportedIndustry(
    requestMessage: common_data_common_pb.Noop,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_ticker_info_pb.IndustryInfos | null
    ) => void
  ): UnaryResponse;
  getStreamSupportedIndustry(
    requestMessage: common_data_common_pb.Noop,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_ticker_info_pb.IndustryInfo>;
  getChartData(
    requestMessage: service_market_pb.RequestChartDataTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_chart_pb.ChartData | null
    ) => void
  ): UnaryResponse;
  getChartData(
    requestMessage: service_market_pb.RequestChartDataTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_chart_pb.ChartData | null
    ) => void
  ): UnaryResponse;
  getStreamChartData(
    requestMessage: service_market_pb.RequestChartDataTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_chart_pb.ChartData>;
  getStreamChartDataWithListSingleTickers(
    requestMessage: service_market_pb.RequestListSingleChartDataTicker,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_chart_pb.ChartData>;
  getStreamNetFlowChartData(
    requestMessage: service_market_pb.RequestChartDataTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_chart_pb.ChartData>;
  getStreamLiQuiDiTytData(
    requestMessage: service_market_pb.RequestChartDataTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_chart_pb.ChartData>;
  getIndexInfo(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_index_pb.IndexInfo | null
    ) => void
  ): UnaryResponse;
  getIndexInfo(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_index_pb.IndexInfo | null
    ) => void
  ): UnaryResponse;
  getStreamPriceInfoFull(
    requestMessage: service_market_pb.RequestPriceInfoTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_priceinfo_pb.PriceInfoFull>;
  getStreamIndexInfo(
    metadata?: grpc.Metadata
  ): BidirectionalStream<
    service_market_pb.RequestPriceInfoTicker,
    common_data_index_pb.IndexInfo
  >;
  getPriceInfoFull(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoFull | null
    ) => void
  ): UnaryResponse;
  getPriceInfoFull(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoFull | null
    ) => void
  ): UnaryResponse;
  getPriceInfo(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfo | null
    ) => void
  ): UnaryResponse;
  getPriceInfo(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfo | null
    ) => void
  ): UnaryResponse;
  getStreamPriceInfoByGroup(
    requestMessage: service_market_pb.RequestListTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_priceinfo_pb.PriceInfo>;
  getStreamPriceInfoFullByGroup(
    requestMessage: service_market_pb.RequestListTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_priceinfo_pb.PriceInfoFull>;
  getPriceInfoBasic(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoBasic | null
    ) => void
  ): UnaryResponse;
  getPriceInfoBasic(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoBasic | null
    ) => void
  ): UnaryResponse;
  getStreamPriceInfoLastSale(
    requestMessage: service_market_pb.RequestPriceInfoTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_priceinfo_pb.PriceInfoLastSale>;
  getPriceInfoLastSale(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoLastSale | null
    ) => void
  ): UnaryResponse;
  getPriceInfoLastSale(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoLastSale | null
    ) => void
  ): UnaryResponse;
  getPriceInfoQuotes(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoQuotes | null
    ) => void
  ): UnaryResponse;
  getPriceInfoQuotes(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoQuotes | null
    ) => void
  ): UnaryResponse;
  getPriceInfoSummary(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoSummary | null
    ) => void
  ): UnaryResponse;
  getPriceInfoSummary(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.PriceInfoSummary | null
    ) => void
  ): UnaryResponse;
  getCWPriceInfo(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.CWPriceInfo | null
    ) => void
  ): UnaryResponse;
  getCWPriceInfo(
    requestMessage: service_market_pb.RequestPriceInfoTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.CWPriceInfo | null
    ) => void
  ): UnaryResponse;
  getTimeAndSale(
    requestMessage: service_market_pb.RequestTimeAndSaleTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_timeandsale_pb.TimeAndSale | null
    ) => void
  ): UnaryResponse;
  getTimeAndSale(
    requestMessage: service_market_pb.RequestTimeAndSaleTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_timeandsale_pb.TimeAndSale | null
    ) => void
  ): UnaryResponse;
  getStreamTimeAndSale(
    requestMessage: service_market_pb.RequestTimeAndSaleTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_timeandsale_pb.TimeAndSale>;
  getOrderFlowDistribution(
    requestMessage: service_market_pb.RequestOrderFlowDistribution,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_orderflow_distribution_pb.OrderFlowDistributions | null
    ) => void
  ): UnaryResponse;
  getOrderFlowDistribution(
    requestMessage: service_market_pb.RequestOrderFlowDistribution,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_orderflow_distribution_pb.OrderFlowDistributions | null
    ) => void
  ): UnaryResponse;
  getProfile(
    requestMessage: service_market_pb.RequestOrganizationTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_profile_pb.OrganizationProfile | null
    ) => void
  ): UnaryResponse;
  getProfile(
    requestMessage: service_market_pb.RequestOrganizationTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_profile_pb.OrganizationProfile | null
    ) => void
  ): UnaryResponse;
  getFinance(
    requestMessage: service_market_pb.RequestOrganizationTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_finance_pb.OrganizationFinance | null
    ) => void
  ): UnaryResponse;
  getFinance(
    requestMessage: service_market_pb.RequestOrganizationTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_finance_pb.OrganizationFinance | null
    ) => void
  ): UnaryResponse;
  getFundamental(
    requestMessage: service_market_pb.RequestOrganizationTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_fundamental_pb.OrganizationFundamental | null
    ) => void
  ): UnaryResponse;
  getFundamental(
    requestMessage: service_market_pb.RequestOrganizationTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_fundamental_pb.OrganizationFundamental | null
    ) => void
  ): UnaryResponse;
  getOrganizationEvents(
    requestMessage: service_market_pb.RequestOrganizationTicker,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_org_events_pb.OrganizationEvents | null
    ) => void
  ): UnaryResponse;
  getOrganizationEvents(
    requestMessage: service_market_pb.RequestOrganizationTicker,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_org_events_pb.OrganizationEvents | null
    ) => void
  ): UnaryResponse;
  getStatisticalADMarketIndicator(
    requestMessage: service_market_pb.RequestStatMarketADIndicator,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_ad_indicator_pb.StatMarketADIndicator | null
    ) => void
  ): UnaryResponse;
  getStatisticalADMarketIndicator(
    requestMessage: service_market_pb.RequestStatMarketADIndicator,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_ad_indicator_pb.StatMarketADIndicator | null
    ) => void
  ): UnaryResponse;
  getStreamStatisticalTops(
    requestMessage: service_market_pb.RequestStatTopTickers,
    metadata?: grpc.Metadata
  ): ResponseStream<common_stat_top_pb.StatTopTickers>;
  getStatisticalBasketContribution(
    requestMessage: service_market_pb.RequestStatBasketContribution,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_contribution_pb.StatBasketContribution | null
    ) => void
  ): UnaryResponse;
  getStatisticalBasketContribution(
    requestMessage: service_market_pb.RequestStatBasketContribution,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_contribution_pb.StatBasketContribution | null
    ) => void
  ): UnaryResponse;
  getMarketStats(
    requestMessage: service_market_pb.RequestMarketStats,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_market_stats_pb.StatMarketStats | null
    ) => void
  ): UnaryResponse;
  getMarketStats(
    requestMessage: service_market_pb.RequestMarketStats,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_market_stats_pb.StatMarketStats | null
    ) => void
  ): UnaryResponse;
  getMarketDistribution(
    requestMessage: service_market_pb.RequestMarketDistribution,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_market_distribution_pb.StatMarketDistribution | null
    ) => void
  ): UnaryResponse;
  getMarketDistribution(
    requestMessage: service_market_pb.RequestMarketDistribution,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_market_distribution_pb.StatMarketDistribution | null
    ) => void
  ): UnaryResponse;
  getMarketRecommendations(
    requestMessage: service_market_pb.RequestMarketRecommendations,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_recommendation_pb.MarketRecommendations | null
    ) => void
  ): UnaryResponse;
  getMarketRecommendations(
    requestMessage: service_market_pb.RequestMarketRecommendations,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_recommendation_pb.MarketRecommendations | null
    ) => void
  ): UnaryResponse;
  getStreamMarketRecommendations(
    requestMessage: service_market_pb.RequestMarketRecommendations,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_recommendation_pb.MarketRecommendation>;
  getStreamPriceInfoByCoverWarrantGroup(
    requestMessage: service_market_pb.RequestMarketCoverWarrant,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_priceinfo_pb.PriceInfo>;
  getStreamPriceInfoFullByCoverWarrantGroup(
    requestMessage: service_market_pb.RequestMarketCoverWarrant,
    metadata?: grpc.Metadata
  ): ResponseStream<common_data_priceinfo_pb.PriceInfoFull>;
  getListPriceInfoPutThrough(
    requestMessage: service_market_pb.RequestListPriceInfoPutThrough,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.ListPriceInfoPutThrough | null
    ) => void
  ): UnaryResponse;
  getListPriceInfoPutThrough(
    requestMessage: service_market_pb.RequestListPriceInfoPutThrough,
    callback: (
      error: ServiceError | null,
      responseMessage: common_data_priceinfo_pb.ListPriceInfoPutThrough | null
    ) => void
  ): UnaryResponse;
  getStatDividendMovement(
    requestMessage: service_market_pb.RequestStatDividendMovement,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_dividend_movement_pb.StatDividendMovement | null
    ) => void
  ): UnaryResponse;
  getStatDividendMovement(
    requestMessage: service_market_pb.RequestStatDividendMovement,
    callback: (
      error: ServiceError | null,
      responseMessage: common_stat_dividend_movement_pb.StatDividendMovement | null
    ) => void
  ): UnaryResponse;
}
