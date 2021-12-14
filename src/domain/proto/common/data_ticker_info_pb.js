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
var common_data_common_pb = require('../common/data_common_pb.js');
goog.exportSymbol('proto.mktservice.IndustryInfo', null, global);
goog.exportSymbol('proto.mktservice.IndustryInfos', null, global);
goog.exportSymbol('proto.mktservice.TickerInfo', null, global);
goog.exportSymbol('proto.mktservice.TickerInfos', null, global);

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
proto.mktservice.TickerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mktservice.TickerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.TickerInfo.displayName = 'proto.mktservice.TickerInfo';
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
proto.mktservice.TickerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.TickerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.TickerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.TickerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tickertype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    namevi: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nameen: jspb.Message.getFieldWithDefault(msg, 4, ""),
    marketcode: jspb.Message.getFieldWithDefault(msg, 5, 0),
    securitiestype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    issuercode: jspb.Message.getFieldWithDefault(msg, 7, ""),
    underlyingcode: jspb.Message.getFieldWithDefault(msg, 8, ""),
    contractexpireddate: (f = msg.getContractexpireddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastupdate: (f = msg.getLastupdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 99, 0)
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
 * @return {!proto.mktservice.TickerInfo}
 */
proto.mktservice.TickerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.TickerInfo;
  return proto.mktservice.TickerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.TickerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.TickerInfo}
 */
proto.mktservice.TickerInfo.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {!proto.mktservice.ETickerType} */ (reader.readEnum());
      msg.setTickertype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamevi(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameen(value);
      break;
    case 5:
      var value = /** @type {!proto.mktservice.EMarketCode} */ (reader.readEnum());
      msg.setMarketcode(value);
      break;
    case 6:
      var value = /** @type {!proto.mktservice.ESecuritiesType} */ (reader.readEnum());
      msg.setSecuritiestype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuercode(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnderlyingcode(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setContractexpireddate(value);
      break;
    case 98:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastupdate(value);
      break;
    case 99:
      var value = /** @type {!proto.mktservice.ETILoadStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.mktservice.TickerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.TickerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.TickerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.TickerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTickertype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getNamevi();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameen();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMarketcode();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getSecuritiestype();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getIssuercode();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUnderlyingcode();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getContractexpireddate();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastupdate();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      99,
      f
    );
  }
};


/**
 * optional string Ticker = 1;
 * @return {string}
 */
proto.mktservice.TickerInfo.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.mktservice.TickerInfo.prototype.setTicker = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ETickerType TickerType = 2;
 * @return {!proto.mktservice.ETickerType}
 */
proto.mktservice.TickerInfo.prototype.getTickertype = function() {
  return /** @type {!proto.mktservice.ETickerType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.mktservice.ETickerType} value */
proto.mktservice.TickerInfo.prototype.setTickertype = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string NameVI = 3;
 * @return {string}
 */
proto.mktservice.TickerInfo.prototype.getNamevi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.mktservice.TickerInfo.prototype.setNamevi = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string NameEN = 4;
 * @return {string}
 */
proto.mktservice.TickerInfo.prototype.getNameen = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.mktservice.TickerInfo.prototype.setNameen = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional EMarketCode MarketCode = 5;
 * @return {!proto.mktservice.EMarketCode}
 */
proto.mktservice.TickerInfo.prototype.getMarketcode = function() {
  return /** @type {!proto.mktservice.EMarketCode} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.mktservice.EMarketCode} value */
proto.mktservice.TickerInfo.prototype.setMarketcode = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ESecuritiesType SecuritiesType = 6;
 * @return {!proto.mktservice.ESecuritiesType}
 */
proto.mktservice.TickerInfo.prototype.getSecuritiestype = function() {
  return /** @type {!proto.mktservice.ESecuritiesType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.mktservice.ESecuritiesType} value */
proto.mktservice.TickerInfo.prototype.setSecuritiestype = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string IssuerCode = 7;
 * @return {string}
 */
proto.mktservice.TickerInfo.prototype.getIssuercode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.mktservice.TickerInfo.prototype.setIssuercode = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string UnderlyingCode = 8;
 * @return {string}
 */
proto.mktservice.TickerInfo.prototype.getUnderlyingcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.mktservice.TickerInfo.prototype.setUnderlyingcode = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp ContractExpiredDate = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mktservice.TickerInfo.prototype.getContractexpireddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.mktservice.TickerInfo.prototype.setContractexpireddate = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.mktservice.TickerInfo.prototype.clearContractexpireddate = function() {
  this.setContractexpireddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.TickerInfo.prototype.hasContractexpireddate = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp LastUpdate = 98;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mktservice.TickerInfo.prototype.getLastupdate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 98));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.mktservice.TickerInfo.prototype.setLastupdate = function(value) {
  jspb.Message.setWrapperField(this, 98, value);
};


proto.mktservice.TickerInfo.prototype.clearLastupdate = function() {
  this.setLastupdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.TickerInfo.prototype.hasLastupdate = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional ETILoadStatus Status = 99;
 * @return {!proto.mktservice.ETILoadStatus}
 */
proto.mktservice.TickerInfo.prototype.getStatus = function() {
  return /** @type {!proto.mktservice.ETILoadStatus} */ (jspb.Message.getFieldWithDefault(this, 99, 0));
};


/** @param {!proto.mktservice.ETILoadStatus} value */
proto.mktservice.TickerInfo.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 99, value);
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
proto.mktservice.IndustryInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mktservice.IndustryInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.IndustryInfo.displayName = 'proto.mktservice.IndustryInfo';
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
proto.mktservice.IndustryInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.IndustryInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.IndustryInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.IndustryInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    industrycode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namevi: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nameen: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.mktservice.IndustryInfo}
 */
proto.mktservice.IndustryInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.IndustryInfo;
  return proto.mktservice.IndustryInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.IndustryInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.IndustryInfo}
 */
proto.mktservice.IndustryInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndustrycode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamevi(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameen(value);
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
proto.mktservice.IndustryInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.IndustryInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.IndustryInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.IndustryInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndustrycode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamevi();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNameen();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string IndustryCode = 1;
 * @return {string}
 */
proto.mktservice.IndustryInfo.prototype.getIndustrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.mktservice.IndustryInfo.prototype.setIndustrycode = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string NameVI = 2;
 * @return {string}
 */
proto.mktservice.IndustryInfo.prototype.getNamevi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.mktservice.IndustryInfo.prototype.setNamevi = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string NameEN = 3;
 * @return {string}
 */
proto.mktservice.IndustryInfo.prototype.getNameen = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.mktservice.IndustryInfo.prototype.setNameen = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.mktservice.TickerInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mktservice.TickerInfos.repeatedFields_, null);
};
goog.inherits(proto.mktservice.TickerInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.TickerInfos.displayName = 'proto.mktservice.TickerInfos';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mktservice.TickerInfos.repeatedFields_ = [1];



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
proto.mktservice.TickerInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.TickerInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.TickerInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.TickerInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.mktservice.TickerInfo.toObject, includeInstance)
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
 * @return {!proto.mktservice.TickerInfos}
 */
proto.mktservice.TickerInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.TickerInfos;
  return proto.mktservice.TickerInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.TickerInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.TickerInfos}
 */
proto.mktservice.TickerInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mktservice.TickerInfo;
      reader.readMessage(value,proto.mktservice.TickerInfo.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.mktservice.TickerInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.TickerInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.TickerInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.TickerInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mktservice.TickerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TickerInfo Items = 1;
 * @return {!Array<!proto.mktservice.TickerInfo>}
 */
proto.mktservice.TickerInfos.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.mktservice.TickerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mktservice.TickerInfo, 1));
};


/** @param {!Array<!proto.mktservice.TickerInfo>} value */
proto.mktservice.TickerInfos.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mktservice.TickerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mktservice.TickerInfo}
 */
proto.mktservice.TickerInfos.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mktservice.TickerInfo, opt_index);
};


proto.mktservice.TickerInfos.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.mktservice.IndustryInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mktservice.IndustryInfos.repeatedFields_, null);
};
goog.inherits(proto.mktservice.IndustryInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.IndustryInfos.displayName = 'proto.mktservice.IndustryInfos';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mktservice.IndustryInfos.repeatedFields_ = [1];



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
proto.mktservice.IndustryInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.IndustryInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.IndustryInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.IndustryInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.mktservice.IndustryInfo.toObject, includeInstance)
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
 * @return {!proto.mktservice.IndustryInfos}
 */
proto.mktservice.IndustryInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.IndustryInfos;
  return proto.mktservice.IndustryInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.IndustryInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.IndustryInfos}
 */
proto.mktservice.IndustryInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mktservice.IndustryInfo;
      reader.readMessage(value,proto.mktservice.IndustryInfo.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.mktservice.IndustryInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.IndustryInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.IndustryInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.IndustryInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mktservice.IndustryInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IndustryInfo Items = 1;
 * @return {!Array<!proto.mktservice.IndustryInfo>}
 */
proto.mktservice.IndustryInfos.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.mktservice.IndustryInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mktservice.IndustryInfo, 1));
};


/** @param {!Array<!proto.mktservice.IndustryInfo>} value */
proto.mktservice.IndustryInfos.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mktservice.IndustryInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mktservice.IndustryInfo}
 */
proto.mktservice.IndustryInfos.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mktservice.IndustryInfo, opt_index);
};


proto.mktservice.IndustryInfos.prototype.clearItemsList = function() {
  this.setItemsList([]);
};


goog.object.extend(exports, proto.mktservice);
