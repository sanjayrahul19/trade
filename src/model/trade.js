import mongoose from "mongoose";

const trade = new mongoose.Schema({
  id: {
    type: String,
  },
  expire: {
    type: String,
  },
  contracts_sold: {
    type: String,
  },
  quantity: {
    type: String,
  },
  transaction_fee: {
    type: String,
  },
  unknown: {
    type: String,
  },
  time: {
    type: String,
  },
  trade_occurred: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  symbol: {
    type: String,
  },
  highest_price: {
    type: String,
  },
  lowest_price: {
    type: String,
  },
  open_interest: {
    type: String,
  },
  underlying_interest: {
    type: String,
  },
  market_price_underlying_interest: {
    type: String,
  },
  type_of_option_contact: {
    type: String,
  },
  unique_identifier: {
    type: String,
  },
});

export const Trade = mongoose.model("trade", trade);
