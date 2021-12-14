// package: mktservice
// file: common/data_orderflow_distribution.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class OrderFlowDistributions extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearDistributionsList(): void;
  getDistributionsList(): Array<OrderFlowDistributions.Distribution>;
  setDistributionsList(value: Array<OrderFlowDistributions.Distribution>): void;
  addDistributions(
    value?: OrderFlowDistributions.Distribution,
    index?: number
  ): OrderFlowDistributions.Distribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderFlowDistributions.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OrderFlowDistributions
  ): OrderFlowDistributions.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: OrderFlowDistributions,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): OrderFlowDistributions;
  static deserializeBinaryFromReader(
    message: OrderFlowDistributions,
    reader: jspb.BinaryReader
  ): OrderFlowDistributions;
}

export namespace OrderFlowDistributions {
  export type AsObject = {
    ticker: string;
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    distributionsList: Array<OrderFlowDistributions.Distribution.AsObject>;
  };

  export class Distribution extends jspb.Message {
    getType(): OrderFlowDistributions.Distribution.DistributionTypeMap[keyof OrderFlowDistributions.Distribution.DistributionTypeMap];
    setType(
      value: OrderFlowDistributions.Distribution.DistributionTypeMap[keyof OrderFlowDistributions.Distribution.DistributionTypeMap]
    ): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setCount(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasPercentage(): boolean;
    clearPercentage(): void;
    getPercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    getFlow(): OrderFlowDistributions.Distribution.EFlowMap[keyof OrderFlowDistributions.Distribution.EFlowMap];
    setFlow(
      value: OrderFlowDistributions.Distribution.EFlowMap[keyof OrderFlowDistributions.Distribution.EFlowMap]
    ): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Distribution.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: Distribution
    ): Distribution.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: Distribution,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Distribution;
    static deserializeBinaryFromReader(
      message: Distribution,
      reader: jspb.BinaryReader
    ): Distribution;
  }

  export namespace Distribution {
    export type AsObject = {
      type: OrderFlowDistributions.Distribution.DistributionTypeMap[keyof OrderFlowDistributions.Distribution.DistributionTypeMap];
      count?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
      value?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
      percentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
      flow: OrderFlowDistributions.Distribution.EFlowMap[keyof OrderFlowDistributions.Distribution.EFlowMap];
    };

    export interface DistributionTypeMap {
      EDT_UNSPECIFIED: 0;
      SMALL: 1;
      MEDIUM: 2;
      LARGE: 3;
    }

    export const DistributionType: DistributionTypeMap;

    export interface EFlowMap {
      EFL_UNSPECIFIED: 0;
      INFLOW: 1;
      OUTFLOW: 2;
    }

    export const EFlow: EFlowMap;
  }
}
