import { RequestPriceInfoTicker } from 'domain/proto/service_market_pb';
import { MarketDataServiceClient } from 'domain/proto/service_market_pb_service';

import { v4 as uuid } from "uuid";

const url = process.env.REACT_APP_GRPC_URL;
const port = process.env.REACT_APP_GRPC_PORT;

const host = url + ":" + port;
export const marketClient = new MarketDataServiceClient(host);
export default interface IndexInfoInterface {
    ticker?: string;
    indexvalue: number;
    changedindexpercentage: number;
    changedindexvalue: number;
    color?: number;
    totalsharestraded?: number;
    totalvaluestraded?: number;
    timeValue?: number;
    open?: number;
  }
  
export const getStreamIndexInfo = () => {

    const req1: RequestPriceInfoTicker = new RequestPriceInfoTicker();
    req1.setRequestid(uuid());
    req1.setTicker("VNIndex");
  
    const req2: RequestPriceInfoTicker = new RequestPriceInfoTicker();
    req2.setRequestid(uuid());
    req2.setTicker("HNXIndex");
  
    const req3: RequestPriceInfoTicker = new RequestPriceInfoTicker();
    req3.setRequestid(uuid());
    req3.setTicker("VN30");
  
    const req4: RequestPriceInfoTicker = new RequestPriceInfoTicker();
    req4.setRequestid(uuid());
    req4.setTicker("UPCOMIndex");
  
    return new Promise((resolve) => {
      marketClient
        .getStreamIndexInfo()
        .write(req1)
        .write(req2)
        .write(req3)
        .write(req4)
        .on("data", (info) => {
          const data: IndexInfoInterface = {
            ticker: info?.getTicker(),
            indexvalue: info?.getIndexvalue()?.getValue() ?? 0,
            changedindexpercentage:
              info?.getChangedindexpercentage()?.getValue() ?? 0,
            changedindexvalue: info?.getChangedindexvalue()?.getValue() ?? 0,
            color: info?.getIndexcolor(),
            totalsharestraded:
              info?.getTotalsharestraded()?.toObject()?.value ?? 0,
            totalvaluestraded:
              info?.getTotalvaluestraded()?.toObject()?.value ?? 0,
            timeValue: info?.getTime()?.toObject().seconds,
            open: info?.getOpen()?.getValue() ?? 0,
          };
          console.log(data);
        })
        .on("status", (status) => {console.log(status)})
        .on("end", () => {
          return resolve(true);
        });
    });
  
} 