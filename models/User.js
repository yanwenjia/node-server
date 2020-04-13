const db = require('../db')

module.exports = db.defineModel('users', {
  email: {
    type: db.STRING(100),
    // unique: true, // 数据库唯一
  },
  password: db.STRING(100),
  name: db.STRING(100)
})
