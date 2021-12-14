// package: mktservice
// file: common/data_finance.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class OrganizationFinanceIndicatorMapper extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getYearlyMap(): jspb.Map<
    number,
    OrganizationFinanceIndicatorMapper.Indicators
  >;
  clearYearlyMap(): void;
  getQuarterlyMap(): jspb.Map<
    number,
    OrganizationFinanceIndicatorMapper.Indicators
  >;
  clearQuarterlyMap(): void;
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): OrganizationFinanceIndicatorMapper.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OrganizationFinanceIndicatorMapper
  ): OrganizationFinanceIndicatorMapper.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: OrganizationFinanceIndicatorMapper,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): OrganizationFinanceIndicatorMapper;
  static deserializeBinaryFromReader(
    message: OrganizationFinanceIndicatorMapper,
    reader: jspb.BinaryReader
  ): OrganizationFinanceIndicatorMapper;
}

export namespace OrganizationFinanceIndicatorMapper {
  export type AsObject = {
    ticker: string;
    yearlyMap: Array<
      [number, OrganizationFinanceIndicatorMapper.Indicators.AsObject]
    >;
    quarterlyMap: Array<
      [number, OrganizationFinanceIndicatorMapper.Indicators.AsObject]
    >;
  };

  export class Indicators extends jspb.Message {
    clearItemsList(): void;
    getItemsList(): Array<OrganizationFinanceIndicator.Indicator>;
    setItemsList(value: Array<OrganizationFinanceIndicator.Indicator>): void;
    addItems(
      value?: OrganizationFinanceIndicator.Indicator,
      index?: number
    ): OrganizationFinanceIndicator.Indicator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Indicators.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: Indicators
    ): Indicators.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: Indicators,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Indicators;
    static deserializeBinaryFromReader(
      message: Indicators,
      reader: jspb.BinaryReader
    ): Indicators;
  }

  export namespace Indicators {
    export type AsObject = {
      itemsList: Array<OrganizationFinanceIndicator.Indicator.AsObject>;
    };
  }
}

export class OrganizationFinanceIndicator extends jspb.Message {
  getType(): OrganizationFinanceIndicator.EIndicatorTypeMap[keyof OrganizationFinanceIndicator.EIndicatorTypeMap];
  setType(
    value: OrganizationFinanceIndicator.EIndicatorTypeMap[keyof OrganizationFinanceIndicator.EIndicatorTypeMap]
  ): void;

  clearYearlyList(): void;
  getYearlyList(): Array<OrganizationFinanceIndicator.Indicator>;
  setYearlyList(value: Array<OrganizationFinanceIndicator.Indicator>): void;
  addYearly(
    value?: OrganizationFinanceIndicator.Indicator,
    index?: number
  ): OrganizationFinanceIndicator.Indicator;

  clearQuarterlyList(): void;
  getQuarterlyList(): Array<OrganizationFinanceIndicator.Indicator>;
  setQuarterlyList(value: Array<OrganizationFinanceIndicator.Indicator>): void;
  addQuarterly(
    value?: OrganizationFinanceIndicator.Indicator,
    index?: number
  ): OrganizationFinanceIndicator.Indicator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationFinanceIndicator.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OrganizationFinanceIndicator
  ): OrganizationFinanceIndicator.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: OrganizationFinanceIndicator,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationFinanceIndicator;
  static deserializeBinaryFromReader(
    message: OrganizationFinanceIndicator,
    reader: jspb.BinaryReader
  ): OrganizationFinanceIndicator;
}

export namespace OrganizationFinanceIndicator {
  export type AsObject = {
    type: OrganizationFinanceIndicator.EIndicatorTypeMap[keyof OrganizationFinanceIndicator.EIndicatorTypeMap];
    yearlyList: Array<OrganizationFinanceIndicator.Indicator.AsObject>;
    quarterlyList: Array<OrganizationFinanceIndicator.Indicator.AsObject>;
  };

  export class Indicator extends jspb.Message {
    getYear(): string;
    setYear(value: string): void;

    getQuarterly(): string;
    setQuarterly(value: string): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRatio(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasYoy(): boolean;
    clearYoy(): void;
    getYoy(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setYoy(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Indicator.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: Indicator
    ): Indicator.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: Indicator,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Indicator;
    static deserializeBinaryFromReader(
      message: Indicator,
      reader: jspb.BinaryReader
    ): Indicator;
  }

  export namespace Indicator {
    export type AsObject = {
      year: string;
      quarterly: string;
      ratio?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
      yoy?: google_protobuf_wrappers_pb.DoubleValue.AsObject;
    };
  }

  export interface EIndicatorTypeMap {
    EIT_UNSPECIFIED: 0;
    EPS: 40;
    ROE: 1;
    ROCE: 2;
    ROA: 3;
    TBVPS: 4;
    LEVERAGE: 5;
    NETMARGIN: 6;
    OPERATINGMARGIN: 7;
    GROSSMARGIN: 8;
    ASSETTURNOVER: 9;
    RECEIVABLETURNOVER: 10;
    INVENTORYTURNOVER: 11;
    PAYABLETURNOVER: 12;
    LIQUIDITYCURRENTRATIO: 13;
    LIQUIDITYQUICKRATIO: 14;
    LIQUIDITYCASHRATIO: 15;
    SOLVENCYDEBTASSETS: 16;
    SOLVENCYCASHASSETS: 17;
    SOLVENCYNETDEBTASSETS: 18;
    NETREVENUE: 19;
    GROSSPROFIT: 20;
    OPERATINGINCOME: 21;
    NETINCOME: 22;
    BALANCETOTALASSETS: 23;
    BALANCECURRENTASSETS: 24;
    BALANCENONCURRENTASSETS: 25;
    BALANCETOTALLIABILITIES: 26;
    BALANCECURRENTLIABILITIES: 27;
    BALANCENONCURRENTLIABILITIES: 28;
    BALANCETOTALEQUITY: 29;
    CASHFLOWOPERATING: 30;
    CASHFLOWINVESTING: 31;
    CASHFLOWFINANCE: 32;
    CASHFLOWEXPENSE: 33;
    FREECASHFLOW: 34;
    FORECASTINGMBSSCORE: 35;
    FORECASTINGMAGICSCORE: 36;
    FORECASTINGFSCORE: 37;
    FORECASTINGZSCORE: 38;
    FORECASTINGMSCORE: 39;
  }

  export const EIndicatorType: EIndicatorTypeMap;
}

export class OrganizationFinance extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  clearIndicatorsList(): void;
  getIndicatorsList(): Array<OrganizationFinanceIndicator>;
  setIndicatorsList(value: Array<OrganizationFinanceIndicator>): void;
  addIndicators(
    value?: OrganizationFinanceIndicator,
    index?: number
  ): OrganizationFinanceIndicator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationFinance.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: OrganizationFinance
  ): OrganizationFinance.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: OrganizationFinance,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationFinance;
  static deserializeBinaryFromReader(
    message: OrganizationFinance,
    reader: jspb.BinaryReader
  ): OrganizationFinance;
}

export namespace OrganizationFinance {
  export type AsObject = {
    ticker: string;
    indicatorsList: Array<OrganizationFinanceIndicator.AsObject>;
  };
}
