export const responseHandler = (
  res,
  statusCode,
  message,
  status,
  data,
  page,
  limit,
  totalPages
) => {
  res.status(statusCode).json({
    message: message,
    status: status,
    data: {
      current_page: page,
      page_limit: limit,
      totalPages: totalPages,
      data,
    },
  });
};
