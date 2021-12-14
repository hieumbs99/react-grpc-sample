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
goog.exportSymbol('proto.mktservice.StatBasketContribution', null, global);
goog.exportSymbol('proto.mktservice.StatBasketContribution.EBasketType', null, global);
goog.exportSymbol('proto.mktservice.StatContributionDetail', null, global);

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
proto.mktservice.StatContributionDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mktservice.StatContributionDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.StatContributionDetail.displayName = 'proto.mktservice.StatContributionDetail';
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
proto.mktservice.StatContributionDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.StatContributionDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.StatContributionDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.StatContributionDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contritotalshares: (f = msg.getContritotalshares()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    contriweight: (f = msg.getContriweight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    contrivalue: (f = msg.getContrivalue()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    contripercentage: (f = msg.getContripercentage()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    lastprice: (f = msg.getLastprice()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    changedpercentage: (f = msg.getChangedpercentage()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    changedvalue: (f = msg.getChangedvalue()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    totalvolume: (f = msg.getTotalvolume()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.mktservice.StatContributionDetail}
 */
proto.mktservice.StatContributionDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.StatContributionDetail;
  return proto.mktservice.StatContributionDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.StatContributionDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.StatContributionDetail}
 */
proto.mktservice.StatContributionDetail.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setContritotalshares(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setContriweight(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setContrivalue(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setContripercentage(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLastprice(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setChangedpercentage(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setChangedvalue(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTotalvolume(value);
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
proto.mktservice.StatContributionDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.StatContributionDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.StatContributionDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.StatContributionDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContritotalshares();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getContriweight();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getContrivalue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getContripercentage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLastprice();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getChangedpercentage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getChangedvalue();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTotalvolume();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Ticker = 1;
 * @return {string}
 */
proto.mktservice.StatContributionDetail.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.mktservice.StatContributionDetail.prototype.setTicker = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.DoubleValue ContriTotalShares = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.StatContributionDetail.prototype.getContritotalshares = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.StatContributionDetail.prototype.setContritotalshares = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.mktservice.StatContributionDetail.prototype.clearContritotalshares = function() {
  this.setContritotalshares(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatContributionDetail.prototype.hasContritotalshares = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue ContriWeight = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.StatContributionDetail.prototype.getContriweight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.StatContributionDetail.prototype.setContriweight = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.mktservice.StatContributionDetail.prototype.clearContriweight = function() {
  this.setContriweight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatContributionDetail.prototype.hasContriweight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue ContriValue = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.StatContributionDetail.prototype.getContrivalue = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.StatContributionDetail.prototype.setContrivalue = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.mktservice.StatContributionDetail.prototype.clearContrivalue = function() {
  this.setContrivalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatContributionDetail.prototype.hasContrivalue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue ContriPercentage = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.StatContributionDetail.prototype.getContripercentage = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.StatContributionDetail.prototype.setContripercentage = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.mktservice.StatContributionDetail.prototype.clearContripercentage = function() {
  this.setContripercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatContributionDetail.prototype.hasContripercentage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue LastPrice = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.StatContributionDetail.prototype.getLastprice = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.StatContributionDetail.prototype.setLastprice = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.mktservice.StatContributionDetail.prototype.clearLastprice = function() {
  this.setLastprice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatContributionDetail.prototype.hasLastprice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue ChangedPercentage = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.StatContributionDetail.prototype.getChangedpercentage = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.StatContributionDetail.prototype.setChangedpercentage = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.mktservice.StatContributionDetail.prototype.clearChangedpercentage = function() {
  this.setChangedpercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatContributionDetail.prototype.hasChangedpercentage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue ChangedValue = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.StatContributionDetail.prototype.getChangedvalue = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.StatContributionDetail.prototype.setChangedvalue = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.mktservice.StatContributionDetail.prototype.clearChangedvalue = function() {
  this.setChangedvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatContributionDetail.prototype.hasChangedvalue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.DoubleValue TotalVolume = 10;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.mktservice.StatContributionDetail.prototype.getTotalvolume = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 10));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.mktservice.StatContributionDetail.prototype.setTotalvolume = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.mktservice.StatContributionDetail.prototype.clearTotalvolume = function() {
  this.setTotalvolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatContributionDetail.prototype.hasTotalvolume = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.mktservice.StatBasketContribution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mktservice.StatBasketContribution.repeatedFields_, null);
};
goog.inherits(proto.mktservice.StatBasketContribution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mktservice.StatBasketContribution.displayName = 'proto.mktservice.StatBasketContribution';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mktservice.StatBasketContribution.repeatedFields_ = [20];



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
proto.mktservice.StatBasketContribution.prototype.toObject = function(opt_includeInstance) {
  return proto.mktservice.StatBasketContribution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mktservice.StatBasketContribution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.StatBasketContribution.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    baskettype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    basketcode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalfloorshares: (f = msg.getTotalfloorshares()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    totaldeclineshares: (f = msg.getTotaldeclineshares()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    totalnochangeshares: (f = msg.getTotalnochangeshares()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    totaladvanceshares: (f = msg.getTotaladvanceshares()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    totalceilingshares: (f = msg.getTotalceilingshares()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    detailList: jspb.Message.toObjectList(msg.getDetailList(),
    proto.mktservice.StatContributionDetail.toObject, includeInstance)
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
 * @return {!proto.mktservice.StatBasketContribution}
 */
proto.mktservice.StatBasketContribution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mktservice.StatBasketContribution;
  return proto.mktservice.StatBasketContribution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mktservice.StatBasketContribution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mktservice.StatBasketContribution}
 */
proto.mktservice.StatBasketContribution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {!proto.mktservice.StatBasketContribution.EBasketType} */ (reader.readEnum());
      msg.setBaskettype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasketcode(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setTotalfloorshares(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setTotaldeclineshares(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setTotalnochangeshares(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setTotaladvanceshares(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setTotalceilingshares(value);
      break;
    case 20:
      var value = new proto.mktservice.StatContributionDetail;
      reader.readMessage(value,proto.mktservice.StatContributionDetail.deserializeBinaryFromReader);
      msg.addDetail(value);
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
proto.mktservice.StatBasketContribution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mktservice.StatBasketContribution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mktservice.StatBasketContribution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mktservice.StatBasketContribution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getBaskettype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getBasketcode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalfloorshares();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getTotaldeclineshares();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getTotalnochangeshares();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getTotaladvanceshares();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getTotalceilingshares();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getDetailList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.mktservice.StatContributionDetail.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mktservice.StatBasketContribution.EBasketType = {
  INDEX: 0,
  INDUSTRY: 1
};

/**
 * optional google.protobuf.Timestamp Date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mktservice.StatBasketContribution.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.mktservice.StatBasketContribution.prototype.setDate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.mktservice.StatBasketContribution.prototype.clearDate = function() {
  this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatBasketContribution.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EBasketType BasketType = 2;
 * @return {!proto.mktservice.StatBasketContribution.EBasketType}
 */
proto.mktservice.StatBasketContribution.prototype.getBaskettype = function() {
  return /** @type {!proto.mktservice.StatBasketContribution.EBasketType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.mktservice.StatBasketContribution.EBasketType} value */
proto.mktservice.StatBasketContribution.prototype.setBaskettype = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string BasketCode = 3;
 * @return {string}
 */
proto.mktservice.StatBasketContribution.prototype.getBasketcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.mktservice.StatBasketContribution.prototype.setBasketcode = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Int64Value TotalFloorShares = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.mktservice.StatBasketContribution.prototype.getTotalfloorshares = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.mktservice.StatBasketContribution.prototype.setTotalfloorshares = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.mktservice.StatBasketContribution.prototype.clearTotalfloorshares = function() {
  this.setTotalfloorshares(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatBasketContribution.prototype.hasTotalfloorshares = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value TotalDeclineShares = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.mktservice.StatBasketContribution.prototype.getTotaldeclineshares = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.mktservice.StatBasketContribution.prototype.setTotaldeclineshares = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.mktservice.StatBasketContribution.prototype.clearTotaldeclineshares = function() {
  this.setTotaldeclineshares(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatBasketContribution.prototype.hasTotaldeclineshares = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Int64Value TotalNoChangeShares = 7;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.mktservice.StatBasketContribution.prototype.getTotalnochangeshares = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 7));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.mktservice.StatBasketContribution.prototype.setTotalnochangeshares = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.mktservice.StatBasketContribution.prototype.clearTotalnochangeshares = function() {
  this.setTotalnochangeshares(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatBasketContribution.prototype.hasTotalnochangeshares = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Int64Value TotalAdvanceShares = 8;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.mktservice.StatBasketContribution.prototype.getTotaladvanceshares = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 8));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.mktservice.StatBasketContribution.prototype.setTotaladvanceshares = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.mktservice.StatBasketContribution.prototype.clearTotaladvanceshares = function() {
  this.setTotaladvanceshares(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatBasketContribution.prototype.hasTotaladvanceshares = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Int64Value TotalCeilingShares = 9;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.mktservice.StatBasketContribution.prototype.getTotalceilingshares = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 9));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.mktservice.StatBasketContribution.prototype.setTotalceilingshares = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.mktservice.StatBasketContribution.prototype.clearTotalceilingshares = function() {
  this.setTotalceilingshares(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.mktservice.StatBasketContribution.prototype.hasTotalceilingshares = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated StatContributionDetail Detail = 20;
 * @return {!Array<!proto.mktservice.StatContributionDetail>}
 */
proto.mktservice.StatBasketContribution.prototype.getDetailList = function() {
  return /** @type{!Array<!proto.mktservice.StatContributionDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mktservice.StatContributionDetail, 20));
};


/** @param {!Array<!proto.mktservice.StatContributionDetail>} value */
proto.mktservice.StatBasketContribution.prototype.setDetailList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.mktservice.StatContributionDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mktservice.StatContributionDetail}
 */
proto.mktservice.StatBasketContribution.prototype.addDetail = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.mktservice.StatContributionDetail, opt_index);
};


proto.mktservice.StatBasketContribution.prototype.clearDetailList = function() {
  this.setDetailList([]);
};


goog.object.extend(exports, proto.mktservice);
