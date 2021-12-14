// package: mktservice
// file: common/data_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Response extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getRespstatus(): Response.EResponseStatusMap[keyof Response.EResponseStatusMap];
  setRespstatus(
    value: Response.EResponseStatusMap[keyof Response.EResponseStatusMap]
  ): void;

  getRespcode(): number;
  setRespcode(value: number): void;

  hasResptime(): boolean;
  clearResptime(): void;
  getResptime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResptime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearRespdataList(): void;
  getRespdataList(): Array<google_protobuf_any_pb.Any>;
  setRespdataList(value: Array<google_protobuf_any_pb.Any>): void;
  addRespdata(
    value?: google_protobuf_any_pb.Any,
    index?: number
  ): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Response,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(
    message: Response,
    reader: jspb.BinaryReader
  ): Response;
}

export namespace Response {
  export type AsObject = {
    requestid: string;
    respstatus: Response.EResponseStatusMap[keyof Response.EResponseStatusMap];
    respcode: number;
    resptime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    respdataList: Array<google_protobuf_any_pb.Any.AsObject>;
  };

  export interface EResponseStatusMap {
    OK: 0;
    ERROR: -1;
  }

  export const EResponseStatus: EResponseStatusMap;
}
