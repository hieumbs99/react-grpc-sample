// package: mktservice
// file: common/data_org_events.proto

import * as jspb from "google-protobuf";
import * as common_data_common_pb from "../common/data_common_pb";

export class OrganizationEvent extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getAnnounceddate(): string;
  setAnnounceddate(value: string): void;

  getExdate(): string;
  setExdate(value: string): void;

  getLastregisterdate(): string;
  setLastregisterdate(value: string): void;

  getEffectivedate(): string;
  setEffectivedate(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLanguage(): common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
  setLanguage(
    value: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationEvent.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OrganizationEvent
  ): OrganizationEvent.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: OrganizationEvent,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationEvent;
  static deserializeBinaryFromReader(
    message: OrganizationEvent,
    reader: jspb.BinaryReader
  ): OrganizationEvent;
}

export namespace OrganizationEvent {
  export type AsObject = {
    ticker: string;
    announceddate: string;
    exdate: string;
    lastregisterdate: string;
    effectivedate: string;
    description: string;
    language: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
  };
}

export class OrganizationEvents extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getLanguage(): common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
  setLanguage(
    value: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap]
  ): void;

  clearOrgeventsList(): void;
  getOrgeventsList(): Array<OrganizationEvent>;
  setOrgeventsList(value: Array<OrganizationEvent>): void;
  addOrgevents(value?: OrganizationEvent, index?: number): OrganizationEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationEvents.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OrganizationEvents
  ): OrganizationEvents.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: OrganizationEvents,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationEvents;
  static deserializeBinaryFromReader(
    message: OrganizationEvents,
    reader: jspb.BinaryReader
  ): OrganizationEvents;
}

export namespace OrganizationEvents {
  export type AsObject = {
    ticker: string;
    language: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
    orgeventsList: Array<OrganizationEvent.AsObject>;
  };
}
