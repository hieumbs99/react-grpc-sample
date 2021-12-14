// package: mktservice
// file: common/stat_periods.proto

import * as jspb from "google-protobuf";

export class StatPeriods extends jspb.Message {
  getType(): StatPeriods.StatTypeMap[keyof StatPeriods.StatTypeMap];
  setType(value: StatPeriods.StatTypeMap[keyof StatPeriods.StatTypeMap]): void;

  clearUnixtimeperiodsList(): void;
  getUnixtimeperiodsList(): Array<number>;
  setUnixtimeperiodsList(value: Array<number>): void;
  addUnixtimeperiods(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatPeriods.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StatPeriods
  ): StatPeriods.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StatPeriods,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StatPeriods;
  static deserializeBinaryFromReader(
    message: StatPeriods,
    reader: jspb.BinaryReader
  ): StatPeriods;
}

export namespace StatPeriods {
  export type AsObject = {
    type: StatPeriods.StatTypeMap[keyof StatPeriods.StatTypeMap];
    unixtimeperiodsList: Array<number>;
  };

  export interface StatTypeMap {
    STATTYPEUNK: 0;
    TOPS: 1;
    TAS: 2;
  }

  export const StatType: StatTypeMap;
}
