// sign in:
const UserModel = require('../models/User.js')
module.exports = {
  'POST /signin': async (ctx, next) => {
    var name = ctx.request.body.name || '',
      password = ctx.request.body.password || ''
      if (name && password){
        return UserModel.findAll({
          where:{
            name,
            password
          }
        }).then((res)=>{
          if (res.length > 0){
            ctx.render('sign-result.html',{result:'登录成功'+name})
          } else {
            ctx.render('sign-result.html',{result:'用户名或密码错误'})
          }
        }).catch((err)=>{
          console.log(err)
        })
      } else {
        ctx.render('sign-result.html',{result:'请输入用户名或密码'})
      }
  },
  'POST /signup': async (ctx, next) => {
    const name = ctx.request.body.name || ''
    const password = ctx.request.body.password || ''
    return UserModel.create({
      name,
      password
    }).then((res)=>{
        ctx.render('signup-result.html', {
              result: '注册成功'
            })
    }).catch((err)=>{
      console.log(err)
        ctx.render('signup-result.html', {
          result: '注册失败'
            })
    })
  }
}
