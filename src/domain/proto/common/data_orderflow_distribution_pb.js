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
goog.exportSymbol('proto.mktservice.OrderFlowDistributions', null, global);
goog.exportSymbol('proto.mktservice.OrderFlowDistributions.Distribution', null, global);
goog.exportSymbol('proto.mktservice.OrderFlowDistributions.Distribution.DistributionType', null, global);
goog.exportSymbol('proto.mktservice.OrderFlowDistributions.Distribution.EFlow', null, global);

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
proto.mktservice.OrderFlowDistributions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mktservice.OrderFlowDistributions.repeatedFields_, null);
};
goog.inherits(proto.mktservice.OrderFlowDistributions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.OrderFlowDistributions.displayName = 'proto.mktservice.OrderFlowDistributions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mktservice.OrderFlowDistributions.repeatedFields_ = [2];



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
proto.mktservice.OrderFlowDistributions.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.OrderFlowDistributions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.OrderFlowDistributions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.OrderFlowDistributions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    distributionsList: jspb.Message.toObjectList(msg.getDistributionsList(),
    proto.mktservice.OrderFlowDistributions.Distribution.toObject, includeInstance)
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
 * @return {!proto.mktservice.OrderFlowDistributions}
 */
proto.mktservice.OrderFlowDistributions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.OrderFlowDistributions;
  return proto.mktservice.OrderFlowDistributions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.OrderFlowDistributions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.OrderFlowDistributions}
 */
proto.mktservice.OrderFlowDistributions.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new proto.mktservice.OrderFlowDistributions.Distribution;
      reader.readMessage(value,proto.mktservice.OrderFlowDistributions.Distribution.deserializeBinaryFromReader);
      msg.addDistributions(value);
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
proto.mktservice.OrderFlowDistributions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.OrderFlowDistributions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.OrderFlowDistributions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.OrderFlowDistributions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDistributionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mktservice.OrderFlowDistributions.Distribution.serializeBinaryToWriter
    );
  }
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
proto.mktservice.OrderFlowDistributions.Distribution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mktservice.OrderFlowDistributions.Distribution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.OrderFlowDistributions.Distribution.displayName = 'proto.mktservice.OrderFlowDistributions.Distribution';
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
proto.mktservice.OrderFlowDistributions.Distribution.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.OrderFlowDistributions.Distribution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.OrderFlowDistributions.Distribution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.OrderFlowDistributions.Distribution.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: (f = msg.getCount()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    value: (f = msg.getValue()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    percentage: (f = msg.getPercentage()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    flow: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.mktservice.OrderFlowDistributions.Distribution}
 */
proto.mktservice.OrderFlowDistributions.Distribution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.OrderFlowDistributions.Distribution;
  return proto.mktservice.OrderFlowDistributions.Distribution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.OrderFlowDistributions.Distribution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.OrderFlowDistributions.Distribution}
 */
proto.mktservice.OrderFlowDistributions.Distribution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mktservice.OrderFlowDistributions.Distribution.DistributionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setCount(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setPercentage(value);
      break;
    case 2:
      var value = /** @type {!proto.mktservice.OrderFlowDistributions.Distribution.EFlow} */ (reader.readEnum());
      msg.setFlow(value);
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
proto.mktservice.OrderFlowDistributions.Distribution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.OrderFlowDistributions.Distribution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.OrderFlowDistributions.Distribution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.OrderFlowDistributions.Distribution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getPercentage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFlow();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mktservice.OrderFlowDistributions.Distribution.DistributionType = {
  EDT_UNSPECIFIED: 0,
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3
};

/**
 * @enum {number}
 */
proto.mktservice.OrderFlowDistributions.Distribution.EFlow = {
  EFL_UNSPECIFIED: 0,
  INFLOW: 1,
  OUTFLOW: 2
};

/**
 * optional DistributionType Type = 1;
 * @return {!proto.mktservice.OrderFlowDistributions.Distribution.DistributionType}
 */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.getType = function() {
  return /** @type {!proto.mktservice.OrderFlowDistributions.Distribution.DistributionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.mktservice.OrderFlowDistributions.Distribution.DistributionType} value */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.DoubleValue Count = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.getCount = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.setCount = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.mktservice.OrderFlowDistributions.Distribution.prototype.clearCount = function() {
  this.setCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.hasCount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue Value = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.mktservice.OrderFlowDistributions.Distribution.prototype.clearValue = function() {
  this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.hasValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue Percentage = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.getPercentage = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.setPercentage = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.mktservice.OrderFlowDistributions.Distribution.prototype.clearPercentage = function() {
  this.setPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.hasPercentage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional EFlow Flow = 2;
 * @return {!proto.mktservice.OrderFlowDistributions.Distribution.EFlow}
 */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.getFlow = function() {
  return /** @type {!proto.mktservice.OrderFlowDistributions.Distribution.EFlow} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.mktservice.OrderFlowDistributions.Distribution.EFlow} value */
proto.mktservice.OrderFlowDistributions.Distribution.prototype.setFlow = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string Ticker = 1;
 * @return {string}
 */
proto.mktservice.OrderFlowDistributions.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.mktservice.OrderFlowDistributions.prototype.setTicker = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp Timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mktservice.OrderFlowDistributions.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.mktservice.OrderFlowDistributions.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.mktservice.OrderFlowDistributions.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.OrderFlowDistributions.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Distribution Distributions = 2;
 * @return {!Array<!proto.mktservice.OrderFlowDistributions.Distribution>}
 */
proto.mktservice.OrderFlowDistributions.prototype.getDistributionsList = function() {
  return /** @type{!Array<!proto.mktservice.OrderFlowDistributions.Distribution>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mktservice.OrderFlowDistributions.Distribution, 2));
};


/** @param {!Array<!proto.mktservice.OrderFlowDistributions.Distribution>} value */
proto.mktservice.OrderFlowDistributions.prototype.setDistributionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.mktservice.OrderFlowDistributions.Distribution=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mktservice.OrderFlowDistributions.Distribution}
 */
proto.mktservice.OrderFlowDistributions.prototype.addDistributions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.mktservice.OrderFlowDistributions.Distribution, opt_index);
};


proto.mktservice.OrderFlowDistributions.prototype.clearDistributionsList = function() {
  this.setDistributionsList([]);
};


goog.object.extend(exports, proto.mktservice);
