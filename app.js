const serverHandle = (req, res) => {
  //设置返回格式
  res.setHeader('Content-type', 'application/json')

  const resData = {
    name: '张三',
    site: 'imooc',
    env: process.env.ENV
  }

  res.end(JSON.stringify(resData))

}

module.exports = serverHandle