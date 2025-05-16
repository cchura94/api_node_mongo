const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bd_api_node_mongo');

module.exports = mongoose;
