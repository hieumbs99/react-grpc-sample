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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_data_common_pb = require('../common/data_common_pb.js');
var common_data_priceinfo_pb = require('../common/data_priceinfo_pb.js');
goog.exportSymbol('proto.mktservice.StatTopTickers', null, global);
goog.exportSymbol('proto.mktservice.StatTopTickers.EDirection', null, global);
goog.exportSymbol('proto.mktservice.StatTopTickers.EPeriod', null, global);
goog.exportSymbol('proto.mktservice.StatTopTickers.EStatTopType', null, global);
goog.exportSymbol('proto.mktservice.StatTopTickers.TickerInfo', null, global);

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
proto.mktservice.StatTopTickers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mktservice.StatTopTickers.repeatedFields_, null);
};
goog.inherits(proto.mktservice.StatTopTickers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.StatTopTickers.displayName = 'proto.mktservice.StatTopTickers';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mktservice.StatTopTickers.repeatedFields_ = [5,8,6];



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
proto.mktservice.StatTopTickers.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.StatTopTickers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.StatTopTickers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.StatTopTickers.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    direction: jspb.Message.getFieldWithDefault(msg, 2, 0),
    period: jspb.Message.getFieldWithDefault(msg, 3, 0),
    basket: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fulltickersList: jspb.Message.getRepeatedField(msg, 5),
    fulltickerinfoList: jspb.Message.toObjectList(msg.getFulltickerinfoList(),
    proto.mktservice.StatTopTickers.TickerInfo.toObject, includeInstance),
    lastsalesList: jspb.Message.toObjectList(msg.getLastsalesList(),
    common_data_priceinfo_pb.PriceInfoLastSale.toObject, includeInstance),
    date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.mktservice.StatTopTickers}
 */
proto.mktservice.StatTopTickers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.StatTopTickers;
  return proto.mktservice.StatTopTickers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.StatTopTickers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.StatTopTickers}
 */
proto.mktservice.StatTopTickers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mktservice.StatTopTickers.EStatTopType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.mktservice.StatTopTickers.EDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {!proto.mktservice.StatTopTickers.EPeriod} */ (reader.readEnum());
      msg.setPeriod(value);
      break;
    case 4:
      var value = /** @type {!proto.mktservice.EStatisticalTopBasket} */ (reader.readEnum());
      msg.setBasket(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFulltickers(value);
      break;
    case 8:
      var value = new proto.mktservice.StatTopTickers.TickerInfo;
      reader.readMessage(value,proto.mktservice.StatTopTickers.TickerInfo.deserializeBinaryFromReader);
      msg.addFulltickerinfo(value);
      break;
    case 6:
      var value = new common_data_priceinfo_pb.PriceInfoLastSale;
      reader.readMessage(value,common_data_priceinfo_pb.PriceInfoLastSale.deserializeBinaryFromReader);
      msg.addLastsales(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
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
proto.mktservice.StatTopTickers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.StatTopTickers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.StatTopTickers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.StatTopTickers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPeriod();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getBasket();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getFulltickersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getFulltickerinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.mktservice.StatTopTickers.TickerInfo.serializeBinaryToWriter
    );
  }
  f = message.getLastsalesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      common_data_priceinfo_pb.PriceInfoLastSale.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mktservice.StatTopTickers.EStatTopType = {
  TOPPRICE: 0,
  TOPVOLUME: 1,
  TOPVALUE: 2,
  TOPHIGHLOWRANGE: 3,
  TOPFOREIGNBUY: 4,
  TOPFOREIGNSELL: 5,
  TOPFOREIGNBUYVALUES: 6,
  TOPFOREIGNSELLVALUES: 7,
  TOPFOREIGNNETVALUES: 8
};

/**
 * @enum {number}
 */
proto.mktservice.StatTopTickers.EPeriod = {
  STATTOP_1D: 0,
  STATTOP_1W: 1,
  STATTOP_1M: 2,
  STATTOP_3M: 3,
  STATTOP_6M: 4,
  STATTOP_1Y: 5,
  STATTOP_ALL: 6
};

/**
 * @enum {number}
 */
proto.mktservice.StatTopTickers.EDirection = {
  LEFT: 0,
  RIGHT: 1
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
proto.mktservice.StatTopTickers.TickerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mktservice.StatTopTickers.TickerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.StatTopTickers.TickerInfo.displayName = 'proto.mktservice.StatTopTickers.TickerInfo';
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
proto.mktservice.StatTopTickers.TickerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.StatTopTickers.TickerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.StatTopTickers.TickerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.StatTopTickers.TickerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    topvalue: (f = msg.getTopvalue()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.mktservice.StatTopTickers.TickerInfo}
 */
proto.mktservice.StatTopTickers.TickerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.StatTopTickers.TickerInfo;
  return proto.mktservice.StatTopTickers.TickerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.StatTopTickers.TickerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.StatTopTickers.TickerInfo}
 */
proto.mktservice.StatTopTickers.TickerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 24:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTopvalue(value);
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
proto.mktservice.StatTopTickers.TickerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.StatTopTickers.TickerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.StatTopTickers.TickerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.StatTopTickers.TickerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTopvalue();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Ticker = 1;
 * @return {string}
 */
proto.mktservice.StatTopTickers.TickerInfo.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.mktservice.StatTopTickers.TickerInfo.prototype.setTicker = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.DoubleValue TopValue = 24;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.StatTopTickers.TickerInfo.prototype.getTopvalue = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 24));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.StatTopTickers.TickerInfo.prototype.setTopvalue = function(value) {
  jspb.Message.setWrapperField(this, 24, value);
};


proto.mktservice.StatTopTickers.TickerInfo.prototype.clearTopvalue = function() {
  this.setTopvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatTopTickers.TickerInfo.prototype.hasTopvalue = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional EStatTopType Type = 1;
 * @return {!proto.mktservice.StatTopTickers.EStatTopType}
 */
proto.mktservice.StatTopTickers.prototype.getType = function() {
  return /** @type {!proto.mktservice.StatTopTickers.EStatTopType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.mktservice.StatTopTickers.EStatTopType} value */
proto.mktservice.StatTopTickers.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional EDirection Direction = 2;
 * @return {!proto.mktservice.StatTopTickers.EDirection}
 */
proto.mktservice.StatTopTickers.prototype.getDirection = function() {
  return /** @type {!proto.mktservice.StatTopTickers.EDirection} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.mktservice.StatTopTickers.EDirection} value */
proto.mktservice.StatTopTickers.prototype.setDirection = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional EPeriod Period = 3;
 * @return {!proto.mktservice.StatTopTickers.EPeriod}
 */
proto.mktservice.StatTopTickers.prototype.getPeriod = function() {
  return /** @type {!proto.mktservice.StatTopTickers.EPeriod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.mktservice.StatTopTickers.EPeriod} value */
proto.mktservice.StatTopTickers.prototype.setPeriod = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional EStatisticalTopBasket Basket = 4;
 * @return {!proto.mktservice.EStatisticalTopBasket}
 */
proto.mktservice.StatTopTickers.prototype.getBasket = function() {
  return /** @type {!proto.mktservice.EStatisticalTopBasket} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.mktservice.EStatisticalTopBasket} value */
proto.mktservice.StatTopTickers.prototype.setBasket = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated string FullTickers = 5;
 * @return {!Array<string>}
 */
proto.mktservice.StatTopTickers.prototype.getFulltickersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.mktservice.StatTopTickers.prototype.setFulltickersList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.mktservice.StatTopTickers.prototype.addFulltickers = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.mktservice.StatTopTickers.prototype.clearFulltickersList = function() {
  this.setFulltickersList([]);
};


/**
 * repeated TickerInfo FullTickerInfo = 8;
 * @return {!Array<!proto.mktservice.StatTopTickers.TickerInfo>}
 */
proto.mktservice.StatTopTickers.prototype.getFulltickerinfoList = function() {
  return /** @type{!Array<!proto.mktservice.StatTopTickers.TickerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mktservice.StatTopTickers.TickerInfo, 8));
};


/** @param {!Array<!proto.mktservice.StatTopTickers.TickerInfo>} value */
proto.mktservice.StatTopTickers.prototype.setFulltickerinfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.mktservice.StatTopTickers.TickerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mktservice.StatTopTickers.TickerInfo}
 */
proto.mktservice.StatTopTickers.prototype.addFulltickerinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.mktservice.StatTopTickers.TickerInfo, opt_index);
};


proto.mktservice.StatTopTickers.prototype.clearFulltickerinfoList = function() {
  this.setFulltickerinfoList([]);
};


/**
 * repeated PriceInfoLastSale LastSales = 6;
 * @return {!Array<!proto.mktservice.PriceInfoLastSale>}
 */
proto.mktservice.StatTopTickers.prototype.getLastsalesList = function() {
  return /** @type{!Array<!proto.mktservice.PriceInfoLastSale>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_data_priceinfo_pb.PriceInfoLastSale, 6));
};


/** @param {!Array<!proto.mktservice.PriceInfoLastSale>} value */
proto.mktservice.StatTopTickers.prototype.setLastsalesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.mktservice.PriceInfoLastSale=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mktservice.PriceInfoLastSale}
 */
proto.mktservice.StatTopTickers.prototype.addLastsales = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.mktservice.PriceInfoLastSale, opt_index);
};


proto.mktservice.StatTopTickers.prototype.clearLastsalesList = function() {
  this.setLastsalesList([]);
};


/**
 * optional google.protobuf.Timestamp Date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mktservice.StatTopTickers.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.mktservice.StatTopTickers.prototype.setDate = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.mktservice.StatTopTickers.prototype.clearDate = function() {
  this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatTopTickers.prototype.hasDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.mktservice);
