const { exec } = require('../db/mysql')

const getList = (author, keyword) =>{
  let sql = `select * from blogs where 1=1`
  if(author) {
    sql += `and author='${author}'`
  }
  if(keyword) {
    sql += `and title like '%${keyword}%'`
  }
  // 会报错，说mysql版本问题
  // sql += `order by createtime desc`

  //返回promise
  return exec(sql)

}

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: '2j2k4224244',
    author: 'zhangsan'
  }
}

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含title, content等属性

  return {
    id: 3 //表示新建博客，插入到数据库中的id
  }
}

const updateBlog = (id, blogData = {}) => {
  //id就是要更新博客的id
  //blogData是一个博客对象，包含title、content属性

  return true
}

const delBlog = (id) => {
  //id是要删除博客id

  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}