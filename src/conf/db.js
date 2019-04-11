//环境参数
const env = process.env.Env

//配置
let MYSQL_CONF
console.log('hahahah', env)

if(env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123',
    port: 3306,
    database: 'myblog'
  }
}

if(env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123',
    port: 3306,
    database: 'myblog'
  }
}

module.exports = {
  MYSQL_CONF
}

