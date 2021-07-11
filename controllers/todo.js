exports.getTodos = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: req.hello,
  });
};

exports.getTodo = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "",
  });
};

exports.createTodo = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Create Todo",
  });
};

exports.updateTodo = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: req.params.id,
  });
};

exports.deleteTodo = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "",
  });
};
