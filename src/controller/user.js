const { exec } = require('../db/mysql')

const loginCheck = (username, password) =>{
  const sql = `
    select username, realname from users where username='${username}' and password='${password}'
  `
  return exec(sql).then(rows => {
    return rows[0] || {}  //防止rows[0]出现undefined，在后面判断用户名、密码时报错
  })
}

module.exports = {
  loginCheck
}