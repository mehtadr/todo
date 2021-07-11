exports.getCategories = (req, res, next) => {
  res.status(200).json({
    status: true,
    message: "get all category",
  });
};

exports.createCategory = (req, res, next) => {
  res.status(200).json({ status: true, message: "created" });
};

exports.updateCategory = (req, res, next) => {
  res.status(200).json({ status: true, message: "updated" });
};

exports.deleteCategory = (req, res, next) => {
  res.status(200).json({ status: true, message: "deleted" });
};

exports.getCategory = (req, res, next) => {
  res.status(200).json({ status: true, message: "fetched" });
};
