// package: mktservice
// file: common/data_profile.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_data_common_pb from "../common/data_common_pb";

export class OrganizationProfile extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  getLanguage(): common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
  setLanguage(
    value: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap]
  ): void;

  getListeddate(): string;
  setListeddate(value: string): void;

  hasForeignownershippercentage(): boolean;
  clearForeignownershippercentage(): void;
  getForeignownershippercentage():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setForeignownershippercentage(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  hasForeignremainroompercentage(): boolean;
  clearForeignremainroompercentage(): void;
  getForeignremainroompercentage():
    | google_protobuf_wrappers_pb.DoubleValue
    | undefined;
  setForeignremainroompercentage(
    value?: google_protobuf_wrappers_pb.DoubleValue
  ): void;

  clearStakeholdersList(): void;
  getStakeholdersList(): Array<OrganizationProfile.StakeHolder>;
  setStakeholdersList(value: Array<OrganizationProfile.StakeHolder>): void;
  addStakeholders(
    value?: OrganizationProfile.StakeHolder,
    index?: number
  ): OrganizationProfile.StakeHolder;

  clearExecutivekeysList(): void;
  getExecutivekeysList(): Array<OrganizationProfile.ExecutiveKey>;
  setExecutivekeysList(value: Array<OrganizationProfile.ExecutiveKey>): void;
  addExecutivekeys(
    value?: OrganizationProfile.ExecutiveKey,
    index?: number
  ): OrganizationProfile.ExecutiveKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationProfile.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OrganizationProfile
  ): OrganizationProfile.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: OrganizationProfile,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationProfile;
  static deserializeBinaryFromReader(
    message: OrganizationProfile,
    reader: jspb.BinaryReader
  ): OrganizationProfile;
}

export namespace OrganizationProfile {
  export type AsObject = {
    ticker: string;
    name: string;
    description: string;
    industry: string;
    language: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
    listeddate: string;
    foreignownershippercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    foreignremainroompercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    stakeholdersList: Array<OrganizationProfile.StakeHolder.AsObject>;
    executivekeysList: Array<OrganizationProfile.ExecutiveKey.AsObject>;
  };

  export class StakeHolder extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getTicker(): string;
    setTicker(value: string): void;

    getLanguage(): common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
    setLanguage(
      value: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap]
    ): void;

    hasShares(): boolean;
    clearShares(): void;
    getShares(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setShares(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasPercentage(): boolean;
    clearPercentage(): void;
    getPercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeHolder.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: StakeHolder
    ): StakeHolder.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: StakeHolder,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): StakeHolder;
    static deserializeBinaryFromReader(
      message: StakeHolder,
      reader: jspb.BinaryReader
    ): StakeHolder;
  }

  export namespace StakeHolder {
    export type AsObject = {
      name: string;
      ticker: string;
      language: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
      shares?: google_protobuf_wrappers_pb.Int64Value.AsObject;
      percentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    };
  }

  export class ExecutiveKey extends jspb.Message {
    getFullname(): string;
    setFullname(value: string): void;

    getPosition(): string;
    setPosition(value: string): void;

    clearPositiontypesList(): void;
    getPositiontypesList(): Array<
      OrganizationProfile.ExecutiveKey.EPositionMap[keyof OrganizationProfile.ExecutiveKey.EPositionMap]
    >;
    setPositiontypesList(
      value: Array<
        OrganizationProfile.ExecutiveKey.EPositionMap[keyof OrganizationProfile.ExecutiveKey.EPositionMap]
      >
    ): void;
    addPositiontypes(
      value: OrganizationProfile.ExecutiveKey.EPositionMap[keyof OrganizationProfile.ExecutiveKey.EPositionMap],
      index?: number
    ): OrganizationProfile.ExecutiveKey.EPositionMap[keyof OrganizationProfile.ExecutiveKey.EPositionMap];

    getLanguage(): common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
    setLanguage(
      value: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap]
    ): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutiveKey.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: ExecutiveKey
    ): ExecutiveKey.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: ExecutiveKey,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): ExecutiveKey;
    static deserializeBinaryFromReader(
      message: ExecutiveKey,
      reader: jspb.BinaryReader
    ): ExecutiveKey;
  }

  export namespace ExecutiveKey {
    export type AsObject = {
      fullname: string;
      position: string;
      positiontypesList: Array<
        OrganizationProfile.ExecutiveKey.EPositionMap[keyof OrganizationProfile.ExecutiveKey.EPositionMap]
      >;
      language: common_data_common_pb.ELanguageMap[keyof common_data_common_pb.ELanguageMap];
    };

    export interface EPositionMap {
      EPOS_UNSPECIFIED: 0;
      COFOUNDER: 8;
      CHAIRMAN: 1;
      VICEPRESIDENT: 2;
      PERMANENTVICECHAIRMAN: 3;
      MEMBEROFBOARDCHAIRMAN: 4;
      CHIEFOFSUPERVISORYBOARD: 5;
      DEPUTYOFSUPERVISORYBOARD: 6;
      MEMBEROFSUPERVISORYBOARD: 7;
      CHIEFEXCUTIVEOFFICER: 10;
      CHIEFACCOUNTANT: 11;
      DEPUTYCHIEFEXCUTIVEOFFICER: 12;
      PERMANENTDEPUTYCHIEFEXCUTIVEOFFICER: 13;
      SENIORMEMBEROFBOARDOFMANAGEMENT: 14;
      MEMBEROFBOARDOFMANAGEMENT: 15;
      CHIEFFINANCEOFFICER: 16;
      EXECUTIVEDIRECTOR: 17;
      OPERATIVEDIRECTOR: 18;
      CHIEFINFORMATIONOFFICER: 19;
      DIRECTOR: 38;
      STAFF: 39;
      CHEIFOFINTERNALAUDIT: 40;
      MEMBEROFINTERNALAUDIT: 41;
      INFOSUPPLIER: 42;
      CONTACTPERSION: 43;
    }

    export const EPosition: EPositionMap;
  }
}
