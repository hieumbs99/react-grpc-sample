/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_data_common_pb = require('../common/data_common_pb.js');
var common_data_priceinfo_pb = require('../common/data_priceinfo_pb.js');
goog.exportSymbol('proto.mktservice.MarketRecommendation', null, global);
goog.exportSymbol('proto.mktservice.MarketRecommendationInfo', null, global);
goog.exportSymbol('proto.mktservice.MarketRecommendationInfo.ESignalMethod', null, global);
goog.exportSymbol('proto.mktservice.MarketRecommendationInfo.ESignalSide', null, global);
goog.exportSymbol('proto.mktservice.MarketRecommendations', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mktservice.MarketRecommendationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mktservice.MarketRecommendationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.MarketRecommendationInfo.displayName = 'proto.mktservice.MarketRecommendationInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mktservice.MarketRecommendationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.MarketRecommendationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.MarketRecommendationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.MarketRecommendationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticker: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signaldate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    signalmethod: jspb.Message.getFieldWithDefault(msg, 4, 0),
    side: jspb.Message.getFieldWithDefault(msg, 5, 0),
    exchangecode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    recommendedprice: (f = msg.getRecommendedprice()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    expectedprice: (f = msg.getExpectedprice()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    analysisreporturl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    languague: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mktservice.MarketRecommendationInfo}
 */
proto.mktservice.MarketRecommendationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.MarketRecommendationInfo;
  return proto.mktservice.MarketRecommendationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.MarketRecommendationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.MarketRecommendationInfo}
 */
proto.mktservice.MarketRecommendationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignaldate(value);
      break;
    case 4:
      var value = /** @type {!proto.mktservice.MarketRecommendationInfo.ESignalMethod} */ (reader.readEnum());
      msg.setSignalmethod(value);
      break;
    case 5:
      var value = /** @type {!proto.mktservice.MarketRecommendationInfo.ESignalSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchangecode(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRecommendedprice(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setExpectedprice(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalysisreporturl(value);
      break;
    case 10:
      var value = /** @type {!proto.mktservice.ELanguage} */ (reader.readEnum());
      msg.setLanguague(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mktservice.MarketRecommendationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.MarketRecommendationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.MarketRecommendationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.MarketRecommendationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignaldate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSignalmethod();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getExchangecode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRecommendedprice();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getExpectedprice();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getAnalysisreporturl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLanguague();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mktservice.MarketRecommendationInfo.ESignalMethod = {
  TA: 0,
  FA: 1,
  TAFA: 2
};

/**
 * @enum {number}
 */
proto.mktservice.MarketRecommendationInfo.ESignalSide = {
  WATCHING: 0,
  BUY: 1,
  SELL: 2,
  POSITIVE: 3
};

/**
 * optional string Ticker = 2;
 * @return {string}
 */
proto.mktservice.MarketRecommendationInfo.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.mktservice.MarketRecommendationInfo.prototype.setTicker = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string SignalDate = 3;
 * @return {string}
 */
proto.mktservice.MarketRecommendationInfo.prototype.getSignaldate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.mktservice.MarketRecommendationInfo.prototype.setSignaldate = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ESignalMethod SignalMethod = 4;
 * @return {!proto.mktservice.MarketRecommendationInfo.ESignalMethod}
 */
proto.mktservice.MarketRecommendationInfo.prototype.getSignalmethod = function() {
  return /** @type {!proto.mktservice.MarketRecommendationInfo.ESignalMethod} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.mktservice.MarketRecommendationInfo.ESignalMethod} value */
proto.mktservice.MarketRecommendationInfo.prototype.setSignalmethod = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional ESignalSide Side = 5;
 * @return {!proto.mktservice.MarketRecommendationInfo.ESignalSide}
 */
proto.mktservice.MarketRecommendationInfo.prototype.getSide = function() {
  return /** @type {!proto.mktservice.MarketRecommendationInfo.ESignalSide} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.mktservice.MarketRecommendationInfo.ESignalSide} value */
proto.mktservice.MarketRecommendationInfo.prototype.setSide = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string ExchangeCode = 6;
 * @return {string}
 */
proto.mktservice.MarketRecommendationInfo.prototype.getExchangecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.mktservice.MarketRecommendationInfo.prototype.setExchangecode = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.DoubleValue RecommendedPrice = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.MarketRecommendationInfo.prototype.getRecommendedprice = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.MarketRecommendationInfo.prototype.setRecommendedprice = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.mktservice.MarketRecommendationInfo.prototype.clearRecommendedprice = function() {
  this.setRecommendedprice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.MarketRecommendationInfo.prototype.hasRecommendedprice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue ExpectedPrice = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.MarketRecommendationInfo.prototype.getExpectedprice = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.MarketRecommendationInfo.prototype.setExpectedprice = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.mktservice.MarketRecommendationInfo.prototype.clearExpectedprice = function() {
  this.setExpectedprice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.MarketRecommendationInfo.prototype.hasExpectedprice = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string AnalysisReportUrl = 9;
 * @return {string}
 */
proto.mktservice.MarketRecommendationInfo.prototype.getAnalysisreporturl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.mktservice.MarketRecommendationInfo.prototype.setAnalysisreporturl = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional ELanguage Languague = 10;
 * @return {!proto.mktservice.ELanguage}
 */
proto.mktservice.MarketRecommendationInfo.prototype.getLanguague = function() {
  return /** @type {!proto.mktservice.ELanguage} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.mktservice.ELanguage} value */
proto.mktservice.MarketRecommendationInfo.prototype.setLanguague = function(value) {
  jspb.Message.setProto3EnumField(this, 10, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mktservice.MarketRecommendation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mktservice.MarketRecommendation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.MarketRecommendation.displayName = 'proto.mktservice.MarketRecommendation';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mktservice.MarketRecommendation.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.MarketRecommendation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.MarketRecommendation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.MarketRecommendation.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.mktservice.MarketRecommendationInfo.toObject(includeInstance, f),
    lastsale: (f = msg.getLastsale()) && common_data_priceinfo_pb.PriceInfoLastSale.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mktservice.MarketRecommendation}
 */
proto.mktservice.MarketRecommendation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.MarketRecommendation;
  return proto.mktservice.MarketRecommendation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.MarketRecommendation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.MarketRecommendation}
 */
proto.mktservice.MarketRecommendation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mktservice.MarketRecommendationInfo;
      reader.readMessage(value,proto.mktservice.MarketRecommendationInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new common_data_priceinfo_pb.PriceInfoLastSale;
      reader.readMessage(value,common_data_priceinfo_pb.PriceInfoLastSale.deserializeBinaryFromReader);
      msg.setLastsale(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mktservice.MarketRecommendation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.MarketRecommendation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.MarketRecommendation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.MarketRecommendation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mktservice.MarketRecommendationInfo.serializeBinaryToWriter
    );
  }
  f = message.getLastsale();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_data_priceinfo_pb.PriceInfoLastSale.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketRecommendationInfo Info = 1;
 * @return {?proto.mktservice.MarketRecommendationInfo}
 */
proto.mktservice.MarketRecommendation.prototype.getInfo = function() {
  return /** @type{?proto.mktservice.MarketRecommendationInfo} */ (
    jspb.Message.getWrapperField(this, proto.mktservice.MarketRecommendationInfo, 1));
};


/** @param {?proto.mktservice.MarketRecommendationInfo|undefined} value */
proto.mktservice.MarketRecommendation.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.mktservice.MarketRecommendation.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.MarketRecommendation.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PriceInfoLastSale LastSale = 2;
 * @return {?proto.mktservice.PriceInfoLastSale}
 */
proto.mktservice.MarketRecommendation.prototype.getLastsale = function() {
  return /** @type{?proto.mktservice.PriceInfoLastSale} */ (
    jspb.Message.getWrapperField(this, common_data_priceinfo_pb.PriceInfoLastSale, 2));
};


/** @param {?proto.mktservice.PriceInfoLastSale|undefined} value */
proto.mktservice.MarketRecommendation.prototype.setLastsale = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.mktservice.MarketRecommendation.prototype.clearLastsale = function() {
  this.setLastsale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.MarketRecommendation.prototype.hasLastsale = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mktservice.MarketRecommendations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mktservice.MarketRecommendations.repeatedFields_, null);
};
goog.inherits(proto.mktservice.MarketRecommendations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.MarketRecommendations.displayName = 'proto.mktservice.MarketRecommendations';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mktservice.MarketRecommendations.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mktservice.MarketRecommendations.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.MarketRecommendations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.MarketRecommendations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.MarketRecommendations.toObject = function(includeInstance, msg) {
  var f, obj = {
    institution: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recommendationsList: jspb.Message.toObjectList(msg.getRecommendationsList(),
    proto.mktservice.MarketRecommendation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mktservice.MarketRecommendations}
 */
proto.mktservice.MarketRecommendations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.MarketRecommendations;
  return proto.mktservice.MarketRecommendations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.MarketRecommendations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.MarketRecommendations}
 */
proto.mktservice.MarketRecommendations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mktservice.ERecommendationSource} */ (reader.readEnum());
      msg.setInstitution(value);
      break;
    case 2:
      var value = new proto.mktservice.MarketRecommendation;
      reader.readMessage(value,proto.mktservice.MarketRecommendation.deserializeBinaryFromReader);
      msg.addRecommendations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mktservice.MarketRecommendations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.MarketRecommendations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.MarketRecommendations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.MarketRecommendations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstitution();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRecommendationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mktservice.MarketRecommendation.serializeBinaryToWriter
    );
  }
};


/**
 * optional ERecommendationSource Institution = 1;
 * @return {!proto.mktservice.ERecommendationSource}
 */
proto.mktservice.MarketRecommendations.prototype.getInstitution = function() {
  return /** @type {!proto.mktservice.ERecommendationSource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.mktservice.ERecommendationSource} value */
proto.mktservice.MarketRecommendations.prototype.setInstitution = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated MarketRecommendation Recommendations = 2;
 * @return {!Array<!proto.mktservice.MarketRecommendation>}
 */
proto.mktservice.MarketRecommendations.prototype.getRecommendationsList = function() {
  return /** @type{!Array<!proto.mktservice.MarketRecommendation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mktservice.MarketRecommendation, 2));
};


/** @param {!Array<!proto.mktservice.MarketRecommendation>} value */
proto.mktservice.MarketRecommendations.prototype.setRecommendationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.mktservice.MarketRecommendation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mktservice.MarketRecommendation}
 */
proto.mktservice.MarketRecommendations.prototype.addRecommendations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.mktservice.MarketRecommendation, opt_index);
};


proto.mktservice.MarketRecommendations.prototype.clearRecommendationsList = function() {
  this.setRecommendationsList([]);
};


goog.object.extend(exports, proto.mktservice);
