import { Trade } from "../model/trade";
import { responseHandler } from "../response/responseHandler";
import axios from "axios";
import mongoose from "mongoose";
export const addData = async (req, res) => {
  try {
    const collection = mongoose.Collection(Trade).drop();
    const webData = await axios.get(
      "https://public.fyers.in/sym_details/NSE_FO.csv"
    );

    const array = webData.data.split("None\n");

    let objects = [];

    for (let i = 0; i < array.length; i++) {
      let obj = {};
      const split = array[i].split(",");
      obj.id = split[0];
      obj.expire_date = split[1];
      obj.contracts_sold = split[2];
      obj.quantity = split[3];
      obj.transaction_fee = split[4];
      obj.unknown = split[5];
      obj.time = split[6];
      obj.trade_occurred = split[7];
      obj.timestamp = split[8];
      obj.symbol = split[9];
      obj.highest_price = split[10];
      obj.lowest_price = split[11];
      obj.open_interest = split[12];
      obj.underlying_interest = split[13];
      obj.market_price_underlying_interest = split[14];
      obj.type_of_option_contact = split[15];
      obj.unique_identifier = split[16];

      objects.push(obj);
    }
    const data = await Trade.create(objects);
    console.log(data);
    return responseHandler(res, 200, "Data successfully added", true, data);
  } catch (error) {
    return responseHandler(res, 500, error.message, false);
  }
};
