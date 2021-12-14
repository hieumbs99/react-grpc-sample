// package: mktservice
// file: common/stat_contribution.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class StatContributionDetail extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  hasContritotalshares(): boolean;
  clearContritotalshares(): void;
  getContritotalshares(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContritotalshares(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasContriweight(): boolean;
  clearContriweight(): void;
  getContriweight(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContriweight(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasContrivalue(): boolean;
  clearContrivalue(): void;
  getContrivalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContrivalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasContripercentage(): boolean;
  clearContripercentage(): void;
  getContripercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContripercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLastprice(): boolean;
  clearLastprice(): void;
  getLastprice(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLastprice(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedpercentage(): boolean;
  clearChangedpercentage(): void;
  getChangedpercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedpercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasChangedvalue(): boolean;
  clearChangedvalue(): void;
  getChangedvalue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setChangedvalue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTotalvolume(): boolean;
  clearTotalvolume(): void;
  getTotalvolume(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTotalvolume(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatContributionDetail.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatContributionDetail
  ): StatContributionDetail.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatContributionDetail,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatContributionDetail;
  static deserializeBinaryFromReader(
    message: StatContributionDetail,
    reader: jspb.BinaryReader
  ): StatContributionDetail;
}

export namespace StatContributionDetail {
  export type AsObject = {
    ticker: string;
    contritotalshares?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    contriweight?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    contrivalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    contripercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    lastprice?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedpercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    changedvalue?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    totalvolume?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
  };
}

export class StatBasketContribution extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBaskettype(): StatBasketContribution.EBasketTypeMap[keyof StatBasketContribution.EBasketTypeMap];
  setBaskettype(
    value: StatBasketContribution.EBasketTypeMap[keyof StatBasketContribution.EBasketTypeMap]
  ): void;

  getBasketcode(): string;
  setBasketcode(value: string): void;

  hasTotalfloorshares(): boolean;
  clearTotalfloorshares(): void;
  getTotalfloorshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalfloorshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotaldeclineshares(): boolean;
  clearTotaldeclineshares(): void;
  getTotaldeclineshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotaldeclineshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalnochangeshares(): boolean;
  clearTotalnochangeshares(): void;
  getTotalnochangeshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalnochangeshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotaladvanceshares(): boolean;
  clearTotaladvanceshares(): void;
  getTotaladvanceshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotaladvanceshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalceilingshares(): boolean;
  clearTotalceilingshares(): void;
  getTotalceilingshares(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalceilingshares(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearDetailList(): void;
  getDetailList(): Array<StatContributionDetail>;
  setDetailList(value: Array<StatContributionDetail>): void;
  addDetail(
    value?: StatContributionDetail,
    index?: number
  ): StatContributionDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatBasketContribution.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatBasketContribution
  ): StatBasketContribution.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatBasketContribution,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatBasketContribution;
  static deserializeBinaryFromReader(
    message: StatBasketContribution,
    reader: jspb.BinaryReader
  ): StatBasketContribution;
}

export namespace StatBasketContribution {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    baskettype: StatBasketContribution.EBasketTypeMap[keyof StatBasketContribution.EBasketTypeMap];
    basketcode: string;
    totalfloorshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totaldeclineshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalnochangeshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totaladvanceshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    totalceilingshares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
    detailList: Array<StatContributionDetail.AsObject>;
  };

  export interface EBasketTypeMap {
    INDEX: 0;
    INDUSTRY: 1;
  }

  export const EBasketType: EBasketTypeMap;
}
