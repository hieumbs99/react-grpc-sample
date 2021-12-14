// package: mktservice
// file: common/data_order_status.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class OrderStatusEvent extends jspb.Message {
  getTransid(): string;
  setTransid(value: string): void;

  getSide(): common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
  setSide(
    value: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap]
  ): void;

  getExectype(): string;
  setExectype(value: string): void;

  getOrderid(): string;
  setOrderid(value: string): void;

  getOrderstatus(): string;
  setOrderstatus(value: string): void;

  getOrigexectype(): string;
  setOrigexectype(value: string): void;

  getOrigorderstatus(): string;
  setOrigorderstatus(value: string): void;

  getAccount(): string;
  setAccount(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasMatchavgprice(): boolean;
  clearMatchavgprice(): void;
  getMatchavgprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setMatchavgprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getOrdertype(): string;
  setOrdertype(value: string): void;

  getTimeinforce(): string;
  setTimeinforce(value: string): void;

  hasOrderqty(): boolean;
  clearOrderqty(): void;
  getOrderqty(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setOrderqty(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasLastqty(): boolean;
  clearLastqty(): void;
  getLastqty(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLastqty(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCumqty(): boolean;
  clearCumqty(): void;
  getCumqty(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCumqty(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasLeaveqty(): boolean;
  clearLeaveqty(): void;
  getLeaveqty(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLeaveqty(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasLastprice(): boolean;
  clearLastprice(): void;
  getLastprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLastprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLastmatchtime(): boolean;
  clearLastmatchtime(): void;
  getLastmatchtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLastmatchtime(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasStopprice(): boolean;
  clearStopprice(): void;
  getStopprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setStopprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getWorkingindicator(): string;
  setWorkingindicator(value: string): void;

  getRejectcode(): string;
  setRejectcode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderStatusEvent.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OrderStatusEvent
  ): OrderStatusEvent.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: OrderStatusEvent,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): OrderStatusEvent;
  static deserializeBinaryFromReader(
    message: OrderStatusEvent,
    reader: jspb.BinaryReader
  ): OrderStatusEvent;
}

export namespace OrderStatusEvent {
  export type AsObject = {
    transid: string;
    side: common_data_common_pb.ETradingSideMap[keyof common_data_common_pb.ETradingSideMap];
    exectype: string;
    orderid: string;
    orderstatus: string;
    origexectype: string;
    origorderstatus: string;
    account: string;
    symbol: string;
    price?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    matchavgprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    ordertype: string;
    timeinforce: string;
    orderqty?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    lastqty?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    cumqty?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    leaveqty?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    lastprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastmatchtime?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    stopprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    workingindicator: string;
    rejectcode: string;
  };
}

export class SessionStatus extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getMarketcode(): common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap];
  setMarketcode(
    value: common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap]
  ): void;

  getSession(): EOTradingSessionMap[keyof EOTradingSessionMap];
  setSession(value: EOTradingSessionMap[keyof EOTradingSessionMap]): void;

  getTradingdate(): string;
  setTradingdate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionStatus.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SessionStatus
  ): SessionStatus.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SessionStatus,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SessionStatus;
  static deserializeBinaryFromReader(
    message: SessionStatus,
    reader: jspb.BinaryReader
  ): SessionStatus;
}

export namespace SessionStatus {
  export type AsObject = {
    status: string;
    marketcode: common_data_common_pb.EMarketCodeMap[keyof common_data_common_pb.EMarketCodeMap];
    session: EOTradingSessionMap[keyof EOTradingSessionMap];
    tradingdate: string;
  };
}

export interface EOTradingSessionMap {
  EOT_UNKNOWN: 0;
  ATO: 1;
  OPEN: 2;
  PAUSE: 3;
  ATC: 4;
  CLOSED: 5;
  OT: 6;
  BOD: 7;
  EOD: 8;
  RUNOFF: 9;
}

export const EOTradingSession: EOTradingSessionMap;

export interface EOExecTypeMap {
  ET_NEW: 0;
  ET_CANCELED: 1;
  ET_REPLACED: 2;
  ET_PENDING: 3;
  ET_REJECTED: 4;
  ET_PENDING_NEW: 5;
  ET_PENDING_REPLACE: 6;
  ET_TRADE: 7;
}

export const EOExecType: EOExecTypeMap;

export interface EOOrderTypeMap {
  OT_MARKET: 0;
  OT_LIMIT: 1;
  OT_STOP: 2;
  OT_STOP_LIMIT: 3;
}

export const EOOrderType: EOOrderTypeMap;

export interface EOTimeInForceMap {
  TIF_DAY: 0;
  TIF_GOOD_TILL_CANCEL: 1;
  TIF_AT_THE_OPENING: 2;
  TIF_IMMEDIATE_OR_CANCEL: 3;
  TIF_FILL_OR_KILL: 4;
  TIF_AT_THE_CLOSE: 5;
}

export const EOTimeInForce: EOTimeInForceMap;

export interface EOOrderStatusMap {
  OS_NEW: 0;
  OS_PARTIAL_FILLED: 1;
  OS_FULL_FILLED: 2;
  OS_CANCELED: 3;
  OS_REPLACED: 4;
  OS_PENDING_CANCEL: 5;
  OS_REJECTED: 6;
  OS_PENDING_NEW: 7;
  OS_PENDING_REPLACE: 8;
}

export const EOOrderStatus: EOOrderStatusMap;
