// package: mktservice
// file: service_market.proto

var service_market_pb = require("./service_market_pb");
var common_data_common_pb = require("./common/data_common_pb");
var common_data_ticker_info_pb = require("./common/data_ticker_info_pb");
var common_data_timeandsale_pb = require("./common/data_timeandsale_pb");
var common_data_index_pb = require("./common/data_index_pb");
var common_data_priceinfo_pb = require("./common/data_priceinfo_pb");
var common_data_recommendation_pb = require("./common/data_recommendation_pb");
var common_data_chart_pb = require("./common/data_chart_pb");
var common_data_profile_pb = require("./common/data_profile_pb");
var common_data_fundamental_pb = require("./common/data_fundamental_pb");
var common_data_finance_pb = require("./common/data_finance_pb");
var common_data_org_events_pb = require("./common/data_org_events_pb");
var common_stat_top_pb = require("./common/stat_top_pb");
var common_stat_contribution_pb = require("./common/stat_contribution_pb");
var common_stat_market_stats_pb = require("./common/stat_market_stats_pb");
var common_stat_market_distribution_pb = require("./common/stat_market_distribution_pb");
var common_stat_ad_indicator_pb = require("./common/stat_ad_indicator_pb");
var common_data_orderflow_distribution_pb = require("./common/data_orderflow_distribution_pb");
var common_stat_dividend_movement_pb = require("./common/stat_dividend_movement_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MarketDataService = (function () {
  function MarketDataService() {}
  MarketDataService.serviceName = "mktservice.MarketDataService";
  return MarketDataService;
}());

MarketDataService.GetStreamSupportedSecurities = {
  methodName: "GetStreamSupportedSecurities",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestListTickers,
  responseType: common_data_ticker_info_pb.TickerInfo
};

MarketDataService.GetListSupportedSecurities = {
  methodName: "GetListSupportedSecurities",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestListTickers,
  responseType: common_data_ticker_info_pb.TickerInfos
};

MarketDataService.GetListSupportedIndustry = {
  methodName: "GetListSupportedIndustry",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: common_data_common_pb.Noop,
  responseType: common_data_ticker_info_pb.IndustryInfos
};

MarketDataService.GetStreamSupportedIndustry = {
  methodName: "GetStreamSupportedIndustry",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: common_data_common_pb.Noop,
  responseType: common_data_ticker_info_pb.IndustryInfo
};

MarketDataService.GetChartData = {
  methodName: "GetChartData",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestChartDataTicker,
  responseType: common_data_chart_pb.ChartData
};

MarketDataService.GetStreamChartData = {
  methodName: "GetStreamChartData",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestChartDataTickers,
  responseType: common_data_chart_pb.ChartData
};

MarketDataService.GetStreamChartDataWithListSingleTickers = {
  methodName: "GetStreamChartDataWithListSingleTickers",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestListSingleChartDataTicker,
  responseType: common_data_chart_pb.ChartData
};

MarketDataService.GetStreamNetFlowChartData = {
  methodName: "GetStreamNetFlowChartData",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestChartDataTickers,
  responseType: common_data_chart_pb.ChartData
};

MarketDataService.GetStreamLiQuiDiTytData = {
  methodName: "GetStreamLiQuiDiTytData",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestChartDataTickers,
  responseType: common_data_chart_pb.ChartData
};

MarketDataService.GetIndexInfo = {
  methodName: "GetIndexInfo",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestPriceInfoTicker,
  responseType: common_data_index_pb.IndexInfo
};

MarketDataService.GetStreamPriceInfoFull = {
  methodName: "GetStreamPriceInfoFull",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestPriceInfoTickers,
  responseType: common_data_priceinfo_pb.PriceInfoFull
};

MarketDataService.GetStreamIndexInfo = {
  methodName: "GetStreamIndexInfo",
  service: MarketDataService,
  requestStream: true,
  responseStream: true,
  requestType: service_market_pb.RequestPriceInfoTicker,
  responseType: common_data_index_pb.IndexInfo
};

MarketDataService.GetPriceInfoFull = {
  methodName: "GetPriceInfoFull",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestPriceInfoTicker,
  responseType: common_data_priceinfo_pb.PriceInfoFull
};

MarketDataService.GetPriceInfo = {
  methodName: "GetPriceInfo",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestPriceInfoTicker,
  responseType: common_data_priceinfo_pb.PriceInfo
};

MarketDataService.GetStreamPriceInfoByGroup = {
  methodName: "GetStreamPriceInfoByGroup",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestListTickers,
  responseType: common_data_priceinfo_pb.PriceInfo
};

MarketDataService.GetStreamPriceInfoFullByGroup = {
  methodName: "GetStreamPriceInfoFullByGroup",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestListTickers,
  responseType: common_data_priceinfo_pb.PriceInfoFull
};

MarketDataService.GetPriceInfoBasic = {
  methodName: "GetPriceInfoBasic",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestPriceInfoTicker,
  responseType: common_data_priceinfo_pb.PriceInfoBasic
};

MarketDataService.GetStreamPriceInfoLastSale = {
  methodName: "GetStreamPriceInfoLastSale",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestPriceInfoTickers,
  responseType: common_data_priceinfo_pb.PriceInfoLastSale
};

MarketDataService.GetPriceInfoLastSale = {
  methodName: "GetPriceInfoLastSale",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestPriceInfoTicker,
  responseType: common_data_priceinfo_pb.PriceInfoLastSale
};

MarketDataService.GetPriceInfoQuotes = {
  methodName: "GetPriceInfoQuotes",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestPriceInfoTicker,
  responseType: common_data_priceinfo_pb.PriceInfoQuotes
};

MarketDataService.GetPriceInfoSummary = {
  methodName: "GetPriceInfoSummary",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestPriceInfoTicker,
  responseType: common_data_priceinfo_pb.PriceInfoSummary
};

MarketDataService.GetCWPriceInfo = {
  methodName: "GetCWPriceInfo",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestPriceInfoTicker,
  responseType: common_data_priceinfo_pb.CWPriceInfo
};

MarketDataService.GetTimeAndSale = {
  methodName: "GetTimeAndSale",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestTimeAndSaleTicker,
  responseType: common_data_timeandsale_pb.TimeAndSale
};

MarketDataService.GetStreamTimeAndSale = {
  methodName: "GetStreamTimeAndSale",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestTimeAndSaleTickers,
  responseType: common_data_timeandsale_pb.TimeAndSale
};

MarketDataService.GetOrderFlowDistribution = {
  methodName: "GetOrderFlowDistribution",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestOrderFlowDistribution,
  responseType: common_data_orderflow_distribution_pb.OrderFlowDistributions
};

MarketDataService.GetProfile = {
  methodName: "GetProfile",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestOrganizationTicker,
  responseType: common_data_profile_pb.OrganizationProfile
};

MarketDataService.GetFinance = {
  methodName: "GetFinance",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestOrganizationTicker,
  responseType: common_data_finance_pb.OrganizationFinance
};

MarketDataService.GetFundamental = {
  methodName: "GetFundamental",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestOrganizationTicker,
  responseType: common_data_fundamental_pb.OrganizationFundamental
};

MarketDataService.GetOrganizationEvents = {
  methodName: "GetOrganizationEvents",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestOrganizationTicker,
  responseType: common_data_org_events_pb.OrganizationEvents
};

MarketDataService.GetStatisticalADMarketIndicator = {
  methodName: "GetStatisticalADMarketIndicator",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestStatMarketADIndicator,
  responseType: common_stat_ad_indicator_pb.StatMarketADIndicator
};

MarketDataService.GetStreamStatisticalTops = {
  methodName: "GetStreamStatisticalTops",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestStatTopTickers,
  responseType: common_stat_top_pb.StatTopTickers
};

MarketDataService.GetStatisticalBasketContribution = {
  methodName: "GetStatisticalBasketContribution",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestStatBasketContribution,
  responseType: common_stat_contribution_pb.StatBasketContribution
};

MarketDataService.GetMarketStats = {
  methodName: "GetMarketStats",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestMarketStats,
  responseType: common_stat_market_stats_pb.StatMarketStats
};

MarketDataService.GetMarketDistribution = {
  methodName: "GetMarketDistribution",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestMarketDistribution,
  responseType: common_stat_market_distribution_pb.StatMarketDistribution
};

MarketDataService.GetMarketRecommendations = {
  methodName: "GetMarketRecommendations",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestMarketRecommendations,
  responseType: common_data_recommendation_pb.MarketRecommendations
};

MarketDataService.GetStreamMarketRecommendations = {
  methodName: "GetStreamMarketRecommendations",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestMarketRecommendations,
  responseType: common_data_recommendation_pb.MarketRecommendation
};

MarketDataService.GetStreamPriceInfoByCoverWarrantGroup = {
  methodName: "GetStreamPriceInfoByCoverWarrantGroup",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestMarketCoverWarrant,
  responseType: common_data_priceinfo_pb.PriceInfo
};

MarketDataService.GetStreamPriceInfoFullByCoverWarrantGroup = {
  methodName: "GetStreamPriceInfoFullByCoverWarrantGroup",
  service: MarketDataService,
  requestStream: false,
  responseStream: true,
  requestType: service_market_pb.RequestMarketCoverWarrant,
  responseType: common_data_priceinfo_pb.PriceInfoFull
};

MarketDataService.GetListPriceInfoPutThrough = {
  methodName: "GetListPriceInfoPutThrough",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestListPriceInfoPutThrough,
  responseType: common_data_priceinfo_pb.ListPriceInfoPutThrough
};

MarketDataService.GetStatDividendMovement = {
  methodName: "GetStatDividendMovement",
  service: MarketDataService,
  requestStream: false,
  responseStream: false,
  requestType: service_market_pb.RequestStatDividendMovement,
  responseType: common_stat_dividend_movement_pb.StatDividendMovement
};

exports.MarketDataService = MarketDataService;

function MarketDataServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MarketDataServiceClient.prototype.getStreamSupportedSecurities = function getStreamSupportedSecurities(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamSupportedSecurities, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getListSupportedSecurities = function getListSupportedSecurities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetListSupportedSecurities, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getListSupportedIndustry = function getListSupportedIndustry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetListSupportedIndustry, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamSupportedIndustry = function getStreamSupportedIndustry(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamSupportedIndustry, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getChartData = function getChartData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetChartData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamChartData = function getStreamChartData(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamChartData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamChartDataWithListSingleTickers = function getStreamChartDataWithListSingleTickers(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamChartDataWithListSingleTickers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamNetFlowChartData = function getStreamNetFlowChartData(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamNetFlowChartData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamLiQuiDiTytData = function getStreamLiQuiDiTytData(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamLiQuiDiTytData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getIndexInfo = function getIndexInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetIndexInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamPriceInfoFull = function getStreamPriceInfoFull(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamPriceInfoFull, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamIndexInfo = function getStreamIndexInfo(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(MarketDataService.GetStreamIndexInfo, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getPriceInfoFull = function getPriceInfoFull(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetPriceInfoFull, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getPriceInfo = function getPriceInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetPriceInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamPriceInfoByGroup = function getStreamPriceInfoByGroup(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamPriceInfoByGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamPriceInfoFullByGroup = function getStreamPriceInfoFullByGroup(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamPriceInfoFullByGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getPriceInfoBasic = function getPriceInfoBasic(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetPriceInfoBasic, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamPriceInfoLastSale = function getStreamPriceInfoLastSale(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamPriceInfoLastSale, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getPriceInfoLastSale = function getPriceInfoLastSale(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetPriceInfoLastSale, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getPriceInfoQuotes = function getPriceInfoQuotes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetPriceInfoQuotes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getPriceInfoSummary = function getPriceInfoSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetPriceInfoSummary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getCWPriceInfo = function getCWPriceInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetCWPriceInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getTimeAndSale = function getTimeAndSale(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetTimeAndSale, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamTimeAndSale = function getStreamTimeAndSale(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamTimeAndSale, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getOrderFlowDistribution = function getOrderFlowDistribution(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetOrderFlowDistribution, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getProfile = function getProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetProfile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getFinance = function getFinance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetFinance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getFundamental = function getFundamental(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetFundamental, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getOrganizationEvents = function getOrganizationEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetOrganizationEvents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStatisticalADMarketIndicator = function getStatisticalADMarketIndicator(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetStatisticalADMarketIndicator, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamStatisticalTops = function getStreamStatisticalTops(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamStatisticalTops, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStatisticalBasketContribution = function getStatisticalBasketContribution(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetStatisticalBasketContribution, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getMarketStats = function getMarketStats(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetMarketStats, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getMarketDistribution = function getMarketDistribution(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetMarketDistribution, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getMarketRecommendations = function getMarketRecommendations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetMarketRecommendations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamMarketRecommendations = function getStreamMarketRecommendations(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamMarketRecommendations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamPriceInfoByCoverWarrantGroup = function getStreamPriceInfoByCoverWarrantGroup(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamPriceInfoByCoverWarrantGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStreamPriceInfoFullByCoverWarrantGroup = function getStreamPriceInfoFullByCoverWarrantGroup(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketDataService.GetStreamPriceInfoFullByCoverWarrantGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getListPriceInfoPutThrough = function getListPriceInfoPutThrough(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetListPriceInfoPutThrough, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MarketDataServiceClient.prototype.getStatDividendMovement = function getStatDividendMovement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketDataService.GetStatDividendMovement, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MarketDataServiceClient = MarketDataServiceClient;

