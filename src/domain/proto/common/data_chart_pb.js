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
goog.exportSymbol('proto.mktservice.ChartData', null, global);
goog.exportSymbol('proto.mktservice.ChartDataSingle', null, global);
goog.exportSymbol('proto.mktservice.ChartDataSingle.EFieldType', null, global);
goog.exportSymbol('proto.mktservice.EResolutions', null, global);

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
proto.mktservice.ChartDataSingle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mktservice.ChartDataSingle.repeatedFields_, null);
};
goog.inherits(proto.mktservice.ChartDataSingle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.ChartDataSingle.displayName = 'proto.mktservice.ChartDataSingle';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mktservice.ChartDataSingle.repeatedFields_ = [5,6];



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
proto.mktservice.ChartDataSingle.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.ChartDataSingle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.ChartDataSingle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.ChartDataSingle.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resolution: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fieldtype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timeList: jspb.Message.toObjectList(msg.getTimeList(),
    google_protobuf_timestamp_pb.Timestamp.toObject, includeInstance),
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance)
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
 * @return {!proto.mktservice.ChartDataSingle}
 */
proto.mktservice.ChartDataSingle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.ChartDataSingle;
  return proto.mktservice.ChartDataSingle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.ChartDataSingle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.ChartDataSingle}
 */
proto.mktservice.ChartDataSingle.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.mktservice.EResolutions} */ (reader.readEnum());
      msg.setResolution(value);
      break;
    case 3:
      var value = /** @type {!proto.mktservice.ChartDataSingle.EFieldType} */ (reader.readEnum());
      msg.setFieldtype(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.addTime(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addValue(value);
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
proto.mktservice.ChartDataSingle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.ChartDataSingle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.ChartDataSingle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.ChartDataSingle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResolution();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFieldtype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTimeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mktservice.ChartDataSingle.EFieldType = {
  EFIELDTYPE_UNK: 0,
  EFIELDTYPE_OPEN: 1,
  EFIELDTYPE_HIGH: 2,
  EFIELDTYPE_LOW: 3,
  EFIELDTYPE_CLOSE: 4,
  EFIELDTYPE_VOLUME: 5,
  EFIELDTYPE_NETVALUES: 6,
  EFIELDTYPE_VALUE: 7,
  EFIELDTYPE_VALUE_ALL: 8
};

/**
 * optional string Ticker = 1;
 * @return {string}
 */
proto.mktservice.ChartDataSingle.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.mktservice.ChartDataSingle.prototype.setTicker = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EResolutions Resolution = 2;
 * @return {!proto.mktservice.EResolutions}
 */
proto.mktservice.ChartDataSingle.prototype.getResolution = function() {
  return /** @type {!proto.mktservice.EResolutions} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.mktservice.EResolutions} value */
proto.mktservice.ChartDataSingle.prototype.setResolution = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional EFieldType FieldType = 3;
 * @return {!proto.mktservice.ChartDataSingle.EFieldType}
 */
proto.mktservice.ChartDataSingle.prototype.getFieldtype = function() {
  return /** @type {!proto.mktservice.ChartDataSingle.EFieldType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.mktservice.ChartDataSingle.EFieldType} value */
proto.mktservice.ChartDataSingle.prototype.setFieldtype = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated google.protobuf.Timestamp Time = 5;
 * @return {!Array<!proto.google.protobuf.Timestamp>}
 */
proto.mktservice.ChartDataSingle.prototype.getTimeList = function() {
  return /** @type{!Array<!proto.google.protobuf.Timestamp>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {!Array<!proto.google.protobuf.Timestamp>} value */
proto.mktservice.ChartDataSingle.prototype.setTimeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.protobuf.Timestamp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.mktservice.ChartDataSingle.prototype.addTime = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.Timestamp, opt_index);
};


proto.mktservice.ChartDataSingle.prototype.clearTimeList = function() {
  this.setTimeList([]);
};


/**
 * repeated google.protobuf.DoubleValue Value = 6;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.mktservice.ChartDataSingle.prototype.getValueList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/** @param {!Array<!proto.google.protobuf.DoubleValue>} value */
proto.mktservice.ChartDataSingle.prototype.setValueList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartDataSingle.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


proto.mktservice.ChartDataSingle.prototype.clearValueList = function() {
  this.setValueList([]);
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
proto.mktservice.ChartData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mktservice.ChartData.repeatedFields_, null);
};
goog.inherits(proto.mktservice.ChartData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.ChartData.displayName = 'proto.mktservice.ChartData';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mktservice.ChartData.repeatedFields_ = [5,6,7,8,9,10,11,12,13];



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
proto.mktservice.ChartData.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.ChartData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.ChartData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.ChartData.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resolution: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tradingdate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timeList: jspb.Message.toObjectList(msg.getTimeList(),
    google_protobuf_timestamp_pb.Timestamp.toObject, includeInstance),
    openList: jspb.Message.toObjectList(msg.getOpenList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance),
    highList: jspb.Message.toObjectList(msg.getHighList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance),
    lowList: jspb.Message.toObjectList(msg.getLowList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance),
    closedList: jspb.Message.toObjectList(msg.getClosedList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance),
    volumeList: jspb.Message.toObjectList(msg.getVolumeList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance),
    netvalueList: jspb.Message.toObjectList(msg.getNetvalueList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance),
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance),
    valueallList: jspb.Message.toObjectList(msg.getValueallList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance),
    referenceprice: (f = msg.getReferenceprice()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    ceilingprice: (f = msg.getCeilingprice()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    floorprice: (f = msg.getFloorprice()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.mktservice.ChartData}
 */
proto.mktservice.ChartData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.ChartData;
  return proto.mktservice.ChartData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.ChartData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.ChartData}
 */
proto.mktservice.ChartData.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.mktservice.EResolutions} */ (reader.readEnum());
      msg.setResolution(value);
      break;
    case 3:
      var value = /** @type {!proto.mktservice.ETradingDate} */ (reader.readEnum());
      msg.setTradingdate(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.addTime(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addOpen(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addHigh(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addLow(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addClosed(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addVolume(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addNetvalue(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addValue(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addValueall(value);
      break;
    case 20:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setReferenceprice(value);
      break;
    case 22:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setCeilingprice(value);
      break;
    case 23:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFloorprice(value);
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
proto.mktservice.ChartData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.ChartData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.ChartData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.ChartData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResolution();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTradingdate();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTimeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOpenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHighList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLowList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getClosedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getVolumeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getNetvalueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getValueallList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getReferenceprice();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getCeilingprice();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFloorprice();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Ticker = 1;
 * @return {string}
 */
proto.mktservice.ChartData.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.mktservice.ChartData.prototype.setTicker = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EResolutions Resolution = 2;
 * @return {!proto.mktservice.EResolutions}
 */
proto.mktservice.ChartData.prototype.getResolution = function() {
  return /** @type {!proto.mktservice.EResolutions} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.mktservice.EResolutions} value */
proto.mktservice.ChartData.prototype.setResolution = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ETradingDate TradingDate = 3;
 * @return {!proto.mktservice.ETradingDate}
 */
proto.mktservice.ChartData.prototype.getTradingdate = function() {
  return /** @type {!proto.mktservice.ETradingDate} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.mktservice.ETradingDate} value */
proto.mktservice.ChartData.prototype.setTradingdate = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated google.protobuf.Timestamp Time = 5;
 * @return {!Array<!proto.google.protobuf.Timestamp>}
 */
proto.mktservice.ChartData.prototype.getTimeList = function() {
  return /** @type{!Array<!proto.google.protobuf.Timestamp>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {!Array<!proto.google.protobuf.Timestamp>} value */
proto.mktservice.ChartData.prototype.setTimeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.protobuf.Timestamp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.mktservice.ChartData.prototype.addTime = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.Timestamp, opt_index);
};


proto.mktservice.ChartData.prototype.clearTimeList = function() {
  this.setTimeList([]);
};


/**
 * repeated google.protobuf.DoubleValue Open = 6;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.mktservice.ChartData.prototype.getOpenList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/** @param {!Array<!proto.google.protobuf.DoubleValue>} value */
proto.mktservice.ChartData.prototype.setOpenList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.addOpen = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


proto.mktservice.ChartData.prototype.clearOpenList = function() {
  this.setOpenList([]);
};


/**
 * repeated google.protobuf.DoubleValue High = 7;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.mktservice.ChartData.prototype.getHighList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/** @param {!Array<!proto.google.protobuf.DoubleValue>} value */
proto.mktservice.ChartData.prototype.setHighList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.addHigh = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


proto.mktservice.ChartData.prototype.clearHighList = function() {
  this.setHighList([]);
};


/**
 * repeated google.protobuf.DoubleValue Low = 8;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.mktservice.ChartData.prototype.getLowList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/** @param {!Array<!proto.google.protobuf.DoubleValue>} value */
proto.mktservice.ChartData.prototype.setLowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.addLow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


proto.mktservice.ChartData.prototype.clearLowList = function() {
  this.setLowList([]);
};


/**
 * repeated google.protobuf.DoubleValue Closed = 9;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.mktservice.ChartData.prototype.getClosedList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/** @param {!Array<!proto.google.protobuf.DoubleValue>} value */
proto.mktservice.ChartData.prototype.setClosedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.addClosed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


proto.mktservice.ChartData.prototype.clearClosedList = function() {
  this.setClosedList([]);
};


/**
 * repeated google.protobuf.DoubleValue Volume = 10;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.mktservice.ChartData.prototype.getVolumeList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 10));
};


/** @param {!Array<!proto.google.protobuf.DoubleValue>} value */
proto.mktservice.ChartData.prototype.setVolumeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.addVolume = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


proto.mktservice.ChartData.prototype.clearVolumeList = function() {
  this.setVolumeList([]);
};


/**
 * repeated google.protobuf.DoubleValue NetValue = 11;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.mktservice.ChartData.prototype.getNetvalueList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 11));
};


/** @param {!Array<!proto.google.protobuf.DoubleValue>} value */
proto.mktservice.ChartData.prototype.setNetvalueList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.addNetvalue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


proto.mktservice.ChartData.prototype.clearNetvalueList = function() {
  this.setNetvalueList([]);
};


/**
 * repeated google.protobuf.DoubleValue Value = 12;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.mktservice.ChartData.prototype.getValueList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 12));
};


/** @param {!Array<!proto.google.protobuf.DoubleValue>} value */
proto.mktservice.ChartData.prototype.setValueList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


proto.mktservice.ChartData.prototype.clearValueList = function() {
  this.setValueList([]);
};


/**
 * repeated google.protobuf.DoubleValue ValueAll = 13;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.mktservice.ChartData.prototype.getValueallList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 13));
};


/** @param {!Array<!proto.google.protobuf.DoubleValue>} value */
proto.mktservice.ChartData.prototype.setValueallList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.addValueall = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


proto.mktservice.ChartData.prototype.clearValueallList = function() {
  this.setValueallList([]);
};


/**
 * optional google.protobuf.DoubleValue ReferencePrice = 20;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.getReferenceprice = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 20));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.ChartData.prototype.setReferenceprice = function(value) {
  jspb.Message.setWrapperField(this, 20, value);
};


proto.mktservice.ChartData.prototype.clearReferenceprice = function() {
  this.setReferenceprice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.ChartData.prototype.hasReferenceprice = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional google.protobuf.DoubleValue CeilingPrice = 22;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.getCeilingprice = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 22));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.ChartData.prototype.setCeilingprice = function(value) {
  jspb.Message.setWrapperField(this, 22, value);
};


proto.mktservice.ChartData.prototype.clearCeilingprice = function() {
  this.setCeilingprice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.ChartData.prototype.hasCeilingprice = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional google.protobuf.DoubleValue FloorPrice = 23;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.ChartData.prototype.getFloorprice = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 23));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.ChartData.prototype.setFloorprice = function(value) {
  jspb.Message.setWrapperField(this, 23, value);
};


proto.mktservice.ChartData.prototype.clearFloorprice = function() {
  this.setFloorprice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.ChartData.prototype.hasFloorprice = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * @enum {number}
 */
proto.mktservice.EResolutions = {
  RESOLUTION_UNK: 0,
  MINUTE_1M: 1,
  MINUTE_5M: 2,
  MINUTE_15M: 3,
  HOUR_1H: 4,
  HOUR_4H: 5,
  DAY_1D: 6,
  WEEK_1W: 10,
  WEEK_2W: 11,
  MONTH_1M: 12
};

goog.object.extend(exports, proto.mktservice);