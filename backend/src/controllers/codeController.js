const codeService = require('../services/codeService');

exports.saveCode = async (req, res) => {
  try {
    const code = await codeService.saveCode(req.body);
    res.json(code);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCode = async (req, res) => {
  try {
    const code = await codeService.getCode(req.params.id);
    res.json(code);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
