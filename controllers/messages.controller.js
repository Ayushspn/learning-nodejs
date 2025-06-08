function getMessages(req, res){
  res.send('<ul><li>Message 1</li><li>Message 2</li></ul>');
}

function postMessage(req, res){
  res.send('<ul><li>Message 1</li><li>Message 2</li></ul>');
}

module.exports = {
  getMessages,
  postMessage
};