/**
 * @fileoverview gRPC-Web generated client stub for mktservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var common_data_common_pb = require('./common/data_common_pb.js')

var common_data_ticker_info_pb = require('./common/data_ticker_info_pb.js')

var common_data_timeandsale_pb = require('./common/data_timeandsale_pb.js')

var common_data_index_pb = require('./common/data_index_pb.js')

var common_data_priceinfo_pb = require('./common/data_priceinfo_pb.js')

var common_data_recommendation_pb = require('./common/data_recommendation_pb.js')

var common_data_chart_pb = require('./common/data_chart_pb.js')

var common_data_profile_pb = require('./common/data_profile_pb.js')

var common_data_fundamental_pb = require('./common/data_fundamental_pb.js')

var common_data_finance_pb = require('./common/data_finance_pb.js')

var common_data_org_events_pb = require('./common/data_org_events_pb.js')

var common_stat_top_pb = require('./common/stat_top_pb.js')

var common_stat_contribution_pb = require('./common/stat_contribution_pb.js')

var common_stat_market_stats_pb = require('./common/stat_market_stats_pb.js')

var common_stat_market_distribution_pb = require('./common/stat_market_distribution_pb.js')

var common_stat_ad_indicator_pb = require('./common/stat_ad_indicator_pb.js')

var common_data_orderflow_distribution_pb = require('./common/data_orderflow_distribution_pb.js')

var common_stat_dividend_movement_pb = require('./common/stat_dividend_movement_pb.js')
const proto = {};
proto.mktservice = require('./service_market_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mktservice.MarketDataServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mktservice.MarketDataServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestListTickers,
 *   !proto.mktservice.TickerInfo>}
 */
const methodDescriptor_MarketDataService_GetStreamSupportedSecurities = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamSupportedSecurities',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestListTickers,
  common_data_ticker_info_pb.TickerInfo,
  /**
   * @param {!proto.mktservice.RequestListTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_ticker_info_pb.TickerInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestListTickers,
 *   !proto.mktservice.TickerInfo>}
 */
const methodInfo_MarketDataService_GetStreamSupportedSecurities = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_ticker_info_pb.TickerInfo,
  /**
   * @param {!proto.mktservice.RequestListTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_ticker_info_pb.TickerInfo.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestListTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.TickerInfo>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamSupportedSecurities =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamSupportedSecurities',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamSupportedSecurities);
};


/**
 * @param {!proto.mktservice.RequestListTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.TickerInfo>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamSupportedSecurities =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamSupportedSecurities',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamSupportedSecurities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestListTickers,
 *   !proto.mktservice.TickerInfos>}
 */
const methodDescriptor_MarketDataService_GetListSupportedSecurities = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetListSupportedSecurities',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestListTickers,
  common_data_ticker_info_pb.TickerInfos,
  /**
   * @param {!proto.mktservice.RequestListTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_ticker_info_pb.TickerInfos.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestListTickers,
 *   !proto.mktservice.TickerInfos>}
 */
const methodInfo_MarketDataService_GetListSupportedSecurities = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_ticker_info_pb.TickerInfos,
  /**
   * @param {!proto.mktservice.RequestListTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_ticker_info_pb.TickerInfos.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestListTickers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.TickerInfos)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.TickerInfos>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getListSupportedSecurities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetListSupportedSecurities',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetListSupportedSecurities,
      callback);
};


/**
 * @param {!proto.mktservice.RequestListTickers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.TickerInfos>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getListSupportedSecurities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetListSupportedSecurities',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetListSupportedSecurities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.Noop,
 *   !proto.mktservice.IndustryInfos>}
 */
const methodDescriptor_MarketDataService_GetListSupportedIndustry = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetListSupportedIndustry',
  grpc.web.MethodType.UNARY,
  common_data_common_pb.Noop,
  common_data_ticker_info_pb.IndustryInfos,
  /**
   * @param {!proto.mktservice.Noop} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_ticker_info_pb.IndustryInfos.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.Noop,
 *   !proto.mktservice.IndustryInfos>}
 */
const methodInfo_MarketDataService_GetListSupportedIndustry = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_ticker_info_pb.IndustryInfos,
  /**
   * @param {!proto.mktservice.Noop} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_ticker_info_pb.IndustryInfos.deserializeBinary
);


/**
 * @param {!proto.mktservice.Noop} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.IndustryInfos)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.IndustryInfos>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getListSupportedIndustry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetListSupportedIndustry',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetListSupportedIndustry,
      callback);
};


/**
 * @param {!proto.mktservice.Noop} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.IndustryInfos>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getListSupportedIndustry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetListSupportedIndustry',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetListSupportedIndustry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.Noop,
 *   !proto.mktservice.IndustryInfo>}
 */
const methodDescriptor_MarketDataService_GetStreamSupportedIndustry = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamSupportedIndustry',
  grpc.web.MethodType.SERVER_STREAMING,
  common_data_common_pb.Noop,
  common_data_ticker_info_pb.IndustryInfo,
  /**
   * @param {!proto.mktservice.Noop} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_ticker_info_pb.IndustryInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.Noop,
 *   !proto.mktservice.IndustryInfo>}
 */
const methodInfo_MarketDataService_GetStreamSupportedIndustry = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_ticker_info_pb.IndustryInfo,
  /**
   * @param {!proto.mktservice.Noop} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_ticker_info_pb.IndustryInfo.deserializeBinary
);


/**
 * @param {!proto.mktservice.Noop} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.IndustryInfo>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamSupportedIndustry =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamSupportedIndustry',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamSupportedIndustry);
};


/**
 * @param {!proto.mktservice.Noop} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.IndustryInfo>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamSupportedIndustry =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamSupportedIndustry',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamSupportedIndustry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestChartDataTicker,
 *   !proto.mktservice.ChartData>}
 */
const methodDescriptor_MarketDataService_GetChartData = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetChartData',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestChartDataTicker,
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestChartDataTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestChartDataTicker,
 *   !proto.mktservice.ChartData>}
 */
const methodInfo_MarketDataService_GetChartData = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestChartDataTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestChartDataTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.ChartData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ChartData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getChartData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetChartData',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetChartData,
      callback);
};


/**
 * @param {!proto.mktservice.RequestChartDataTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.ChartData>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getChartData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetChartData',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetChartData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestChartDataTickers,
 *   !proto.mktservice.ChartData>}
 */
const methodDescriptor_MarketDataService_GetStreamChartData = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamChartData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestChartDataTickers,
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestChartDataTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestChartDataTickers,
 *   !proto.mktservice.ChartData>}
 */
const methodInfo_MarketDataService_GetStreamChartData = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestChartDataTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestChartDataTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ChartData>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamChartData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamChartData',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamChartData);
};


/**
 * @param {!proto.mktservice.RequestChartDataTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ChartData>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamChartData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamChartData',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamChartData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestListSingleChartDataTicker,
 *   !proto.mktservice.ChartData>}
 */
const methodDescriptor_MarketDataService_GetStreamChartDataWithListSingleTickers = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamChartDataWithListSingleTickers',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestListSingleChartDataTicker,
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestListSingleChartDataTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestListSingleChartDataTicker,
 *   !proto.mktservice.ChartData>}
 */
const methodInfo_MarketDataService_GetStreamChartDataWithListSingleTickers = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestListSingleChartDataTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestListSingleChartDataTicker} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ChartData>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamChartDataWithListSingleTickers =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamChartDataWithListSingleTickers',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamChartDataWithListSingleTickers);
};


/**
 * @param {!proto.mktservice.RequestListSingleChartDataTicker} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ChartData>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamChartDataWithListSingleTickers =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamChartDataWithListSingleTickers',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamChartDataWithListSingleTickers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestChartDataTickers,
 *   !proto.mktservice.ChartData>}
 */
const methodDescriptor_MarketDataService_GetStreamNetFlowChartData = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamNetFlowChartData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestChartDataTickers,
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestChartDataTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestChartDataTickers,
 *   !proto.mktservice.ChartData>}
 */
const methodInfo_MarketDataService_GetStreamNetFlowChartData = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestChartDataTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestChartDataTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ChartData>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamNetFlowChartData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamNetFlowChartData',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamNetFlowChartData);
};


/**
 * @param {!proto.mktservice.RequestChartDataTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ChartData>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamNetFlowChartData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamNetFlowChartData',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamNetFlowChartData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestChartDataTickers,
 *   !proto.mktservice.ChartData>}
 */
const methodDescriptor_MarketDataService_GetStreamLiQuiDiTytData = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamLiQuiDiTytData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestChartDataTickers,
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestChartDataTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestChartDataTickers,
 *   !proto.mktservice.ChartData>}
 */
const methodInfo_MarketDataService_GetStreamLiQuiDiTytData = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_chart_pb.ChartData,
  /**
   * @param {!proto.mktservice.RequestChartDataTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_chart_pb.ChartData.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestChartDataTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ChartData>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamLiQuiDiTytData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamLiQuiDiTytData',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamLiQuiDiTytData);
};


/**
 * @param {!proto.mktservice.RequestChartDataTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ChartData>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamLiQuiDiTytData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamLiQuiDiTytData',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamLiQuiDiTytData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.IndexInfo>}
 */
const methodDescriptor_MarketDataService_GetIndexInfo = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetIndexInfo',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestPriceInfoTicker,
  common_data_index_pb.IndexInfo,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_index_pb.IndexInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.IndexInfo>}
 */
const methodInfo_MarketDataService_GetIndexInfo = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_index_pb.IndexInfo,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_index_pb.IndexInfo.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.IndexInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.IndexInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getIndexInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetIndexInfo',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetIndexInfo,
      callback);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.IndexInfo>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getIndexInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetIndexInfo',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetIndexInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTickers,
 *   !proto.mktservice.PriceInfoFull>}
 */
const methodDescriptor_MarketDataService_GetStreamPriceInfoFull = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamPriceInfoFull',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestPriceInfoTickers,
  common_data_priceinfo_pb.PriceInfoFull,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoFull.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTickers,
 *   !proto.mktservice.PriceInfoFull>}
 */
const methodInfo_MarketDataService_GetStreamPriceInfoFull = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfoFull,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoFull.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoFull>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamPriceInfoFull =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoFull',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoFull);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoFull>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamPriceInfoFull =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoFull',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoFull);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoFull>}
 */
const methodDescriptor_MarketDataService_GetPriceInfoFull = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetPriceInfoFull',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestPriceInfoTicker,
  common_data_priceinfo_pb.PriceInfoFull,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoFull.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoFull>}
 */
const methodInfo_MarketDataService_GetPriceInfoFull = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfoFull,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoFull.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.PriceInfoFull)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoFull>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getPriceInfoFull =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoFull',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoFull,
      callback);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.PriceInfoFull>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getPriceInfoFull =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoFull',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoFull);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfo>}
 */
const methodDescriptor_MarketDataService_GetPriceInfo = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetPriceInfo',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestPriceInfoTicker,
  common_data_priceinfo_pb.PriceInfo,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfo>}
 */
const methodInfo_MarketDataService_GetPriceInfo = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfo,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfo.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.PriceInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getPriceInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfo',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfo,
      callback);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.PriceInfo>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getPriceInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfo',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestListTickers,
 *   !proto.mktservice.PriceInfo>}
 */
const methodDescriptor_MarketDataService_GetStreamPriceInfoByGroup = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamPriceInfoByGroup',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestListTickers,
  common_data_priceinfo_pb.PriceInfo,
  /**
   * @param {!proto.mktservice.RequestListTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestListTickers,
 *   !proto.mktservice.PriceInfo>}
 */
const methodInfo_MarketDataService_GetStreamPriceInfoByGroup = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfo,
  /**
   * @param {!proto.mktservice.RequestListTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfo.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestListTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfo>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamPriceInfoByGroup =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoByGroup',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoByGroup);
};


/**
 * @param {!proto.mktservice.RequestListTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfo>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamPriceInfoByGroup =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoByGroup',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoByGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestListTickers,
 *   !proto.mktservice.PriceInfoFull>}
 */
const methodDescriptor_MarketDataService_GetStreamPriceInfoFullByGroup = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamPriceInfoFullByGroup',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestListTickers,
  common_data_priceinfo_pb.PriceInfoFull,
  /**
   * @param {!proto.mktservice.RequestListTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoFull.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestListTickers,
 *   !proto.mktservice.PriceInfoFull>}
 */
const methodInfo_MarketDataService_GetStreamPriceInfoFullByGroup = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfoFull,
  /**
   * @param {!proto.mktservice.RequestListTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoFull.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestListTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoFull>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamPriceInfoFullByGroup =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoFullByGroup',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoFullByGroup);
};


/**
 * @param {!proto.mktservice.RequestListTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoFull>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamPriceInfoFullByGroup =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoFullByGroup',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoFullByGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoBasic>}
 */
const methodDescriptor_MarketDataService_GetPriceInfoBasic = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetPriceInfoBasic',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestPriceInfoTicker,
  common_data_priceinfo_pb.PriceInfoBasic,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoBasic.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoBasic>}
 */
const methodInfo_MarketDataService_GetPriceInfoBasic = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfoBasic,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoBasic.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.PriceInfoBasic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoBasic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getPriceInfoBasic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoBasic',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoBasic,
      callback);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.PriceInfoBasic>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getPriceInfoBasic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoBasic',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoBasic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTickers,
 *   !proto.mktservice.PriceInfoLastSale>}
 */
const methodDescriptor_MarketDataService_GetStreamPriceInfoLastSale = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamPriceInfoLastSale',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestPriceInfoTickers,
  common_data_priceinfo_pb.PriceInfoLastSale,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoLastSale.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTickers,
 *   !proto.mktservice.PriceInfoLastSale>}
 */
const methodInfo_MarketDataService_GetStreamPriceInfoLastSale = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfoLastSale,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoLastSale.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoLastSale>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamPriceInfoLastSale =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoLastSale',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoLastSale);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoLastSale>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamPriceInfoLastSale =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoLastSale',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoLastSale);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoLastSale>}
 */
const methodDescriptor_MarketDataService_GetPriceInfoLastSale = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetPriceInfoLastSale',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestPriceInfoTicker,
  common_data_priceinfo_pb.PriceInfoLastSale,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoLastSale.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoLastSale>}
 */
const methodInfo_MarketDataService_GetPriceInfoLastSale = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfoLastSale,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoLastSale.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.PriceInfoLastSale)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoLastSale>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getPriceInfoLastSale =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoLastSale',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoLastSale,
      callback);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.PriceInfoLastSale>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getPriceInfoLastSale =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoLastSale',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoLastSale);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoQuotes>}
 */
const methodDescriptor_MarketDataService_GetPriceInfoQuotes = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetPriceInfoQuotes',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestPriceInfoTicker,
  common_data_priceinfo_pb.PriceInfoQuotes,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoQuotes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoQuotes>}
 */
const methodInfo_MarketDataService_GetPriceInfoQuotes = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfoQuotes,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoQuotes.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.PriceInfoQuotes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoQuotes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getPriceInfoQuotes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoQuotes',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoQuotes,
      callback);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.PriceInfoQuotes>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getPriceInfoQuotes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoQuotes',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoQuotes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoSummary>}
 */
const methodDescriptor_MarketDataService_GetPriceInfoSummary = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetPriceInfoSummary',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestPriceInfoTicker,
  common_data_priceinfo_pb.PriceInfoSummary,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoSummary.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.PriceInfoSummary>}
 */
const methodInfo_MarketDataService_GetPriceInfoSummary = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfoSummary,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoSummary.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.PriceInfoSummary)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoSummary>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getPriceInfoSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoSummary',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoSummary,
      callback);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.PriceInfoSummary>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getPriceInfoSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetPriceInfoSummary',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetPriceInfoSummary);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.CWPriceInfo>}
 */
const methodDescriptor_MarketDataService_GetCWPriceInfo = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetCWPriceInfo',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestPriceInfoTicker,
  common_data_priceinfo_pb.CWPriceInfo,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.CWPriceInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestPriceInfoTicker,
 *   !proto.mktservice.CWPriceInfo>}
 */
const methodInfo_MarketDataService_GetCWPriceInfo = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.CWPriceInfo,
  /**
   * @param {!proto.mktservice.RequestPriceInfoTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.CWPriceInfo.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.CWPriceInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.CWPriceInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getCWPriceInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetCWPriceInfo',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetCWPriceInfo,
      callback);
};


/**
 * @param {!proto.mktservice.RequestPriceInfoTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.CWPriceInfo>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getCWPriceInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetCWPriceInfo',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetCWPriceInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestTimeAndSaleTicker,
 *   !proto.mktservice.TimeAndSale>}
 */
const methodDescriptor_MarketDataService_GetTimeAndSale = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetTimeAndSale',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestTimeAndSaleTicker,
  common_data_timeandsale_pb.TimeAndSale,
  /**
   * @param {!proto.mktservice.RequestTimeAndSaleTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_timeandsale_pb.TimeAndSale.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestTimeAndSaleTicker,
 *   !proto.mktservice.TimeAndSale>}
 */
const methodInfo_MarketDataService_GetTimeAndSale = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_timeandsale_pb.TimeAndSale,
  /**
   * @param {!proto.mktservice.RequestTimeAndSaleTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_timeandsale_pb.TimeAndSale.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestTimeAndSaleTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.TimeAndSale)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.TimeAndSale>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getTimeAndSale =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetTimeAndSale',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetTimeAndSale,
      callback);
};


/**
 * @param {!proto.mktservice.RequestTimeAndSaleTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.TimeAndSale>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getTimeAndSale =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetTimeAndSale',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetTimeAndSale);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestTimeAndSaleTickers,
 *   !proto.mktservice.TimeAndSale>}
 */
const methodDescriptor_MarketDataService_GetStreamTimeAndSale = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamTimeAndSale',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestTimeAndSaleTickers,
  common_data_timeandsale_pb.TimeAndSale,
  /**
   * @param {!proto.mktservice.RequestTimeAndSaleTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_timeandsale_pb.TimeAndSale.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestTimeAndSaleTickers,
 *   !proto.mktservice.TimeAndSale>}
 */
const methodInfo_MarketDataService_GetStreamTimeAndSale = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_timeandsale_pb.TimeAndSale,
  /**
   * @param {!proto.mktservice.RequestTimeAndSaleTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_timeandsale_pb.TimeAndSale.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestTimeAndSaleTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.TimeAndSale>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamTimeAndSale =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamTimeAndSale',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamTimeAndSale);
};


/**
 * @param {!proto.mktservice.RequestTimeAndSaleTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.TimeAndSale>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamTimeAndSale =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamTimeAndSale',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamTimeAndSale);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestOrderFlowDistribution,
 *   !proto.mktservice.OrderFlowDistributions>}
 */
const methodDescriptor_MarketDataService_GetOrderFlowDistribution = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetOrderFlowDistribution',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestOrderFlowDistribution,
  common_data_orderflow_distribution_pb.OrderFlowDistributions,
  /**
   * @param {!proto.mktservice.RequestOrderFlowDistribution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_orderflow_distribution_pb.OrderFlowDistributions.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestOrderFlowDistribution,
 *   !proto.mktservice.OrderFlowDistributions>}
 */
const methodInfo_MarketDataService_GetOrderFlowDistribution = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_orderflow_distribution_pb.OrderFlowDistributions,
  /**
   * @param {!proto.mktservice.RequestOrderFlowDistribution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_orderflow_distribution_pb.OrderFlowDistributions.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestOrderFlowDistribution} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.OrderFlowDistributions)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.OrderFlowDistributions>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getOrderFlowDistribution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetOrderFlowDistribution',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetOrderFlowDistribution,
      callback);
};


/**
 * @param {!proto.mktservice.RequestOrderFlowDistribution} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.OrderFlowDistributions>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getOrderFlowDistribution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetOrderFlowDistribution',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetOrderFlowDistribution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestOrganizationTicker,
 *   !proto.mktservice.OrganizationProfile>}
 */
const methodDescriptor_MarketDataService_GetProfile = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetProfile',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestOrganizationTicker,
  common_data_profile_pb.OrganizationProfile,
  /**
   * @param {!proto.mktservice.RequestOrganizationTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_profile_pb.OrganizationProfile.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestOrganizationTicker,
 *   !proto.mktservice.OrganizationProfile>}
 */
const methodInfo_MarketDataService_GetProfile = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_profile_pb.OrganizationProfile,
  /**
   * @param {!proto.mktservice.RequestOrganizationTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_profile_pb.OrganizationProfile.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestOrganizationTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.OrganizationProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.OrganizationProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetProfile',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetProfile,
      callback);
};


/**
 * @param {!proto.mktservice.RequestOrganizationTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.OrganizationProfile>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetProfile',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestOrganizationTicker,
 *   !proto.mktservice.OrganizationFinance>}
 */
const methodDescriptor_MarketDataService_GetFinance = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetFinance',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestOrganizationTicker,
  common_data_finance_pb.OrganizationFinance,
  /**
   * @param {!proto.mktservice.RequestOrganizationTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_finance_pb.OrganizationFinance.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestOrganizationTicker,
 *   !proto.mktservice.OrganizationFinance>}
 */
const methodInfo_MarketDataService_GetFinance = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_finance_pb.OrganizationFinance,
  /**
   * @param {!proto.mktservice.RequestOrganizationTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_finance_pb.OrganizationFinance.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestOrganizationTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.OrganizationFinance)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.OrganizationFinance>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getFinance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetFinance',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetFinance,
      callback);
};


/**
 * @param {!proto.mktservice.RequestOrganizationTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.OrganizationFinance>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getFinance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetFinance',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetFinance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestOrganizationTicker,
 *   !proto.mktservice.OrganizationFundamental>}
 */
const methodDescriptor_MarketDataService_GetFundamental = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetFundamental',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestOrganizationTicker,
  common_data_fundamental_pb.OrganizationFundamental,
  /**
   * @param {!proto.mktservice.RequestOrganizationTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_fundamental_pb.OrganizationFundamental.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestOrganizationTicker,
 *   !proto.mktservice.OrganizationFundamental>}
 */
const methodInfo_MarketDataService_GetFundamental = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_fundamental_pb.OrganizationFundamental,
  /**
   * @param {!proto.mktservice.RequestOrganizationTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_fundamental_pb.OrganizationFundamental.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestOrganizationTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.OrganizationFundamental)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.OrganizationFundamental>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getFundamental =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetFundamental',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetFundamental,
      callback);
};


/**
 * @param {!proto.mktservice.RequestOrganizationTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.OrganizationFundamental>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getFundamental =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetFundamental',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetFundamental);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestOrganizationTicker,
 *   !proto.mktservice.OrganizationEvents>}
 */
const methodDescriptor_MarketDataService_GetOrganizationEvents = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetOrganizationEvents',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestOrganizationTicker,
  common_data_org_events_pb.OrganizationEvents,
  /**
   * @param {!proto.mktservice.RequestOrganizationTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_org_events_pb.OrganizationEvents.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestOrganizationTicker,
 *   !proto.mktservice.OrganizationEvents>}
 */
const methodInfo_MarketDataService_GetOrganizationEvents = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_org_events_pb.OrganizationEvents,
  /**
   * @param {!proto.mktservice.RequestOrganizationTicker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_org_events_pb.OrganizationEvents.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestOrganizationTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.OrganizationEvents)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.OrganizationEvents>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getOrganizationEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetOrganizationEvents',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetOrganizationEvents,
      callback);
};


/**
 * @param {!proto.mktservice.RequestOrganizationTicker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.OrganizationEvents>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getOrganizationEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetOrganizationEvents',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetOrganizationEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestStatMarketADIndicator,
 *   !proto.mktservice.StatMarketADIndicator>}
 */
const methodDescriptor_MarketDataService_GetStatisticalADMarketIndicator = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStatisticalADMarketIndicator',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestStatMarketADIndicator,
  common_stat_ad_indicator_pb.StatMarketADIndicator,
  /**
   * @param {!proto.mktservice.RequestStatMarketADIndicator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_ad_indicator_pb.StatMarketADIndicator.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestStatMarketADIndicator,
 *   !proto.mktservice.StatMarketADIndicator>}
 */
const methodInfo_MarketDataService_GetStatisticalADMarketIndicator = new grpc.web.AbstractClientBase.MethodInfo(
  common_stat_ad_indicator_pb.StatMarketADIndicator,
  /**
   * @param {!proto.mktservice.RequestStatMarketADIndicator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_ad_indicator_pb.StatMarketADIndicator.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestStatMarketADIndicator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.StatMarketADIndicator)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.StatMarketADIndicator>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStatisticalADMarketIndicator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetStatisticalADMarketIndicator',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStatisticalADMarketIndicator,
      callback);
};


/**
 * @param {!proto.mktservice.RequestStatMarketADIndicator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.StatMarketADIndicator>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStatisticalADMarketIndicator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetStatisticalADMarketIndicator',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStatisticalADMarketIndicator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestStatTopTickers,
 *   !proto.mktservice.StatTopTickers>}
 */
const methodDescriptor_MarketDataService_GetStreamStatisticalTops = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamStatisticalTops',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestStatTopTickers,
  common_stat_top_pb.StatTopTickers,
  /**
   * @param {!proto.mktservice.RequestStatTopTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_top_pb.StatTopTickers.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestStatTopTickers,
 *   !proto.mktservice.StatTopTickers>}
 */
const methodInfo_MarketDataService_GetStreamStatisticalTops = new grpc.web.AbstractClientBase.MethodInfo(
  common_stat_top_pb.StatTopTickers,
  /**
   * @param {!proto.mktservice.RequestStatTopTickers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_top_pb.StatTopTickers.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestStatTopTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.StatTopTickers>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamStatisticalTops =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamStatisticalTops',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamStatisticalTops);
};


/**
 * @param {!proto.mktservice.RequestStatTopTickers} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.StatTopTickers>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamStatisticalTops =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamStatisticalTops',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamStatisticalTops);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestStatBasketContribution,
 *   !proto.mktservice.StatBasketContribution>}
 */
const methodDescriptor_MarketDataService_GetStatisticalBasketContribution = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStatisticalBasketContribution',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestStatBasketContribution,
  common_stat_contribution_pb.StatBasketContribution,
  /**
   * @param {!proto.mktservice.RequestStatBasketContribution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_contribution_pb.StatBasketContribution.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestStatBasketContribution,
 *   !proto.mktservice.StatBasketContribution>}
 */
const methodInfo_MarketDataService_GetStatisticalBasketContribution = new grpc.web.AbstractClientBase.MethodInfo(
  common_stat_contribution_pb.StatBasketContribution,
  /**
   * @param {!proto.mktservice.RequestStatBasketContribution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_contribution_pb.StatBasketContribution.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestStatBasketContribution} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.StatBasketContribution)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.StatBasketContribution>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStatisticalBasketContribution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetStatisticalBasketContribution',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStatisticalBasketContribution,
      callback);
};


/**
 * @param {!proto.mktservice.RequestStatBasketContribution} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.StatBasketContribution>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStatisticalBasketContribution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetStatisticalBasketContribution',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStatisticalBasketContribution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestMarketStats,
 *   !proto.mktservice.StatMarketStats>}
 */
const methodDescriptor_MarketDataService_GetMarketStats = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetMarketStats',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestMarketStats,
  common_stat_market_stats_pb.StatMarketStats,
  /**
   * @param {!proto.mktservice.RequestMarketStats} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_market_stats_pb.StatMarketStats.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestMarketStats,
 *   !proto.mktservice.StatMarketStats>}
 */
const methodInfo_MarketDataService_GetMarketStats = new grpc.web.AbstractClientBase.MethodInfo(
  common_stat_market_stats_pb.StatMarketStats,
  /**
   * @param {!proto.mktservice.RequestMarketStats} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_market_stats_pb.StatMarketStats.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestMarketStats} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.StatMarketStats)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.StatMarketStats>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getMarketStats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetMarketStats',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetMarketStats,
      callback);
};


/**
 * @param {!proto.mktservice.RequestMarketStats} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.StatMarketStats>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getMarketStats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetMarketStats',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetMarketStats);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestMarketDistribution,
 *   !proto.mktservice.StatMarketDistribution>}
 */
const methodDescriptor_MarketDataService_GetMarketDistribution = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetMarketDistribution',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestMarketDistribution,
  common_stat_market_distribution_pb.StatMarketDistribution,
  /**
   * @param {!proto.mktservice.RequestMarketDistribution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_market_distribution_pb.StatMarketDistribution.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestMarketDistribution,
 *   !proto.mktservice.StatMarketDistribution>}
 */
const methodInfo_MarketDataService_GetMarketDistribution = new grpc.web.AbstractClientBase.MethodInfo(
  common_stat_market_distribution_pb.StatMarketDistribution,
  /**
   * @param {!proto.mktservice.RequestMarketDistribution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_market_distribution_pb.StatMarketDistribution.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestMarketDistribution} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.StatMarketDistribution)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.StatMarketDistribution>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getMarketDistribution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetMarketDistribution',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetMarketDistribution,
      callback);
};


/**
 * @param {!proto.mktservice.RequestMarketDistribution} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.StatMarketDistribution>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getMarketDistribution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetMarketDistribution',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetMarketDistribution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestMarketRecommendations,
 *   !proto.mktservice.MarketRecommendations>}
 */
const methodDescriptor_MarketDataService_GetMarketRecommendations = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetMarketRecommendations',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestMarketRecommendations,
  common_data_recommendation_pb.MarketRecommendations,
  /**
   * @param {!proto.mktservice.RequestMarketRecommendations} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_recommendation_pb.MarketRecommendations.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestMarketRecommendations,
 *   !proto.mktservice.MarketRecommendations>}
 */
const methodInfo_MarketDataService_GetMarketRecommendations = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_recommendation_pb.MarketRecommendations,
  /**
   * @param {!proto.mktservice.RequestMarketRecommendations} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_recommendation_pb.MarketRecommendations.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestMarketRecommendations} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.MarketRecommendations)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.MarketRecommendations>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getMarketRecommendations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetMarketRecommendations',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetMarketRecommendations,
      callback);
};


/**
 * @param {!proto.mktservice.RequestMarketRecommendations} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.MarketRecommendations>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getMarketRecommendations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetMarketRecommendations',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetMarketRecommendations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestMarketRecommendations,
 *   !proto.mktservice.MarketRecommendation>}
 */
const methodDescriptor_MarketDataService_GetStreamMarketRecommendations = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamMarketRecommendations',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestMarketRecommendations,
  common_data_recommendation_pb.MarketRecommendation,
  /**
   * @param {!proto.mktservice.RequestMarketRecommendations} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_recommendation_pb.MarketRecommendation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestMarketRecommendations,
 *   !proto.mktservice.MarketRecommendation>}
 */
const methodInfo_MarketDataService_GetStreamMarketRecommendations = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_recommendation_pb.MarketRecommendation,
  /**
   * @param {!proto.mktservice.RequestMarketRecommendations} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_recommendation_pb.MarketRecommendation.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestMarketRecommendations} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.MarketRecommendation>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamMarketRecommendations =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamMarketRecommendations',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamMarketRecommendations);
};


/**
 * @param {!proto.mktservice.RequestMarketRecommendations} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.MarketRecommendation>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamMarketRecommendations =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamMarketRecommendations',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamMarketRecommendations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestMarketCoverWarrant,
 *   !proto.mktservice.PriceInfo>}
 */
const methodDescriptor_MarketDataService_GetStreamPriceInfoByCoverWarrantGroup = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamPriceInfoByCoverWarrantGroup',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestMarketCoverWarrant,
  common_data_priceinfo_pb.PriceInfo,
  /**
   * @param {!proto.mktservice.RequestMarketCoverWarrant} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestMarketCoverWarrant,
 *   !proto.mktservice.PriceInfo>}
 */
const methodInfo_MarketDataService_GetStreamPriceInfoByCoverWarrantGroup = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfo,
  /**
   * @param {!proto.mktservice.RequestMarketCoverWarrant} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfo.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestMarketCoverWarrant} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfo>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamPriceInfoByCoverWarrantGroup =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoByCoverWarrantGroup',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoByCoverWarrantGroup);
};


/**
 * @param {!proto.mktservice.RequestMarketCoverWarrant} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfo>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamPriceInfoByCoverWarrantGroup =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoByCoverWarrantGroup',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoByCoverWarrantGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestMarketCoverWarrant,
 *   !proto.mktservice.PriceInfoFull>}
 */
const methodDescriptor_MarketDataService_GetStreamPriceInfoFullByCoverWarrantGroup = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStreamPriceInfoFullByCoverWarrantGroup',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.mktservice.RequestMarketCoverWarrant,
  common_data_priceinfo_pb.PriceInfoFull,
  /**
   * @param {!proto.mktservice.RequestMarketCoverWarrant} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoFull.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestMarketCoverWarrant,
 *   !proto.mktservice.PriceInfoFull>}
 */
const methodInfo_MarketDataService_GetStreamPriceInfoFullByCoverWarrantGroup = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.PriceInfoFull,
  /**
   * @param {!proto.mktservice.RequestMarketCoverWarrant} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.PriceInfoFull.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestMarketCoverWarrant} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoFull>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStreamPriceInfoFullByCoverWarrantGroup =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoFullByCoverWarrantGroup',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoFullByCoverWarrantGroup);
};


/**
 * @param {!proto.mktservice.RequestMarketCoverWarrant} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.PriceInfoFull>}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStreamPriceInfoFullByCoverWarrantGroup =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mktservice.MarketDataService/GetStreamPriceInfoFullByCoverWarrantGroup',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStreamPriceInfoFullByCoverWarrantGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestListPriceInfoPutThrough,
 *   !proto.mktservice.ListPriceInfoPutThrough>}
 */
const methodDescriptor_MarketDataService_GetListPriceInfoPutThrough = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetListPriceInfoPutThrough',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestListPriceInfoPutThrough,
  common_data_priceinfo_pb.ListPriceInfoPutThrough,
  /**
   * @param {!proto.mktservice.RequestListPriceInfoPutThrough} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.ListPriceInfoPutThrough.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestListPriceInfoPutThrough,
 *   !proto.mktservice.ListPriceInfoPutThrough>}
 */
const methodInfo_MarketDataService_GetListPriceInfoPutThrough = new grpc.web.AbstractClientBase.MethodInfo(
  common_data_priceinfo_pb.ListPriceInfoPutThrough,
  /**
   * @param {!proto.mktservice.RequestListPriceInfoPutThrough} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_data_priceinfo_pb.ListPriceInfoPutThrough.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestListPriceInfoPutThrough} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.ListPriceInfoPutThrough)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.ListPriceInfoPutThrough>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getListPriceInfoPutThrough =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetListPriceInfoPutThrough',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetListPriceInfoPutThrough,
      callback);
};


/**
 * @param {!proto.mktservice.RequestListPriceInfoPutThrough} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.ListPriceInfoPutThrough>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getListPriceInfoPutThrough =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetListPriceInfoPutThrough',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetListPriceInfoPutThrough);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mktservice.RequestStatDividendMovement,
 *   !proto.mktservice.StatDividendMovement>}
 */
const methodDescriptor_MarketDataService_GetStatDividendMovement = new grpc.web.MethodDescriptor(
  '/mktservice.MarketDataService/GetStatDividendMovement',
  grpc.web.MethodType.UNARY,
  proto.mktservice.RequestStatDividendMovement,
  common_stat_dividend_movement_pb.StatDividendMovement,
  /**
   * @param {!proto.mktservice.RequestStatDividendMovement} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_dividend_movement_pb.StatDividendMovement.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.mktservice.RequestStatDividendMovement,
 *   !proto.mktservice.StatDividendMovement>}
 */
const methodInfo_MarketDataService_GetStatDividendMovement = new grpc.web.AbstractClientBase.MethodInfo(
  common_stat_dividend_movement_pb.StatDividendMovement,
  /**
   * @param {!proto.mktservice.RequestStatDividendMovement} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_stat_dividend_movement_pb.StatDividendMovement.deserializeBinary
);


/**
 * @param {!proto.mktservice.RequestStatDividendMovement} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.mktservice.StatDividendMovement)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mktservice.StatDividendMovement>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mktservice.MarketDataServiceClient.prototype.getStatDividendMovement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mktservice.MarketDataService/GetStatDividendMovement',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStatDividendMovement,
      callback);
};


/**
 * @param {!proto.mktservice.RequestStatDividendMovement} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mktservice.StatDividendMovement>}
 *     Promise that resolves to the response
 */
proto.mktservice.MarketDataServicePromiseClient.prototype.getStatDividendMovement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mktservice.MarketDataService/GetStatDividendMovement',
      request,
      metadata || {},
      methodDescriptor_MarketDataService_GetStatDividendMovement);
};


module.exports = proto.mktservice;

