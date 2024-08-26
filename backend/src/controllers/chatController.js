const chatService = require('../services/chatService');

exports.sendMessage = async (req, res) => {
  try {
    const message = await chatService.sendMessage(req.body);
    res.json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await chatService.getMessages(req.query.roomId);
    res.json(messages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
