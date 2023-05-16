const ctrlWrapper = (controller) => {
  const insider = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return insider;
};

module.exports = ctrlWrapper;
