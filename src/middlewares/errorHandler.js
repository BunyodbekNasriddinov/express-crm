export default (err, req, res, next) => {
  if (err) {
    if (err.status !== 500) {
      return res
        .status(err.status)
        .json({ status: err.status, name: err.name, message: err.message });
    }

    if (process.env.NODE_ENV === "development") {
      return res
        .status(500)
        .json({ status: 500, name: err.name, message: err.message });
    }

    res
      .status(500)
      .json({ status: 500, name: err.name, message: "InternalServerError" });
  }
};
