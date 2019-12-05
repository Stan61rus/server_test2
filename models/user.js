const { Schema, model } = require('mongoose')

const schema = new Schema({ email: String , phone: String })

module.exports = model('User', schema)