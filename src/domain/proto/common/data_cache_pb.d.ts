// package: mktservice
// file: common/data_cache.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class LocalCacheMessage extends jspb.Message {
  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastupdated(): boolean;
  clearLastupdated(): void;
  getLastupdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastupdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearDataList(): void;
  getDataList(): Array<google_protobuf_any_pb.Any>;
  setDataList(value: Array<google_protobuf_any_pb.Any>): void;
  addData(
    value?: google_protobuf_any_pb.Any,
    index?: number
  ): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalCacheMessage.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LocalCacheMessage
  ): LocalCacheMessage.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: LocalCacheMessage,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): LocalCacheMessage;
  static deserializeBinaryFromReader(
    message: LocalCacheMessage,
    reader: jspb.BinaryReader
  ): LocalCacheMessage;
}

export namespace LocalCacheMessage {
  export type AsObject = {
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    lastupdated?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    dataList: Array<google_protobuf_any_pb.Any.AsObject>;
  };
}
