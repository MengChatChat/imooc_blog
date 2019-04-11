const { exec } = require('../db/mysql')

const getList = (author, keyword) =>{
  //注意要加空格，否则会拼接出错
  let sql = `select * from blogs where 1=1 `
  if(author) {
    sql += `and author='${author}' `
  }
  if(keyword) {
    sql += `and title like '%${keyword}%' `
  }
  // 会报错，说mysql版本问题
  sql += `order by createtime desc`

  console.log('查询语句', sql)
  //返回promise
  return exec(sql)

}

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`
  console.log(sql)
  return exec(sql).then(rows => {
    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含title, content等属性
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createTime = Date.now()

  const sql = `
    insert into blogs (title, content , createtime, author)
    values ('${title}', '${content}', ${createTime}, '${author}')
  `

  return exec(sql).then(insertData => {
    // console.log('insertData is', insertData)
    return {
      id: insertData.insertId
    }
  })

}

const updateBlog = (id, blogData = {}) => {
  //id就是要更新博客的id
  //blogData是一个博客对象，包含title、content属性

  const title = blogData.title
  const content = blogData.content

  const sql = `
    update blogs set title='${title}', content='${content}' where id=${id}
  `

  console.log(sql)
  return exec(sql).then(updateData => {
    console.log('updateData is', updateData)
    if(updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

const delBlog = (id, author) => {
  //id是要删除博客id
  const sql = `delete from blogs where id='${id}' and author='${author}'`
  return exec(sql).then(delData => {
    if(delData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}