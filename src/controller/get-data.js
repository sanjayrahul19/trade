import { Trade } from "../model/trade";
import { responseHandler } from "../response/responseHandler";

export const getData = async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const totalNoOfDocs = (await Trade.find({})).length;
    const totalPages = Math.ceil(totalNoOfDocs / limit);
    console.log(totalPages);
    const data = await Trade.find({})
      .skip((page - 1) * limit)
      .limit(limit);
    return responseHandler(
      res,
      200,
      "Data sent successfully",
      true,
      data,
      page,
      limit,
      totalPages
    );
  } catch (error) {
    return responseHandler(res, 500, error.message, false);
  }
};
