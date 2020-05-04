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
            // ctx.response.status = 500
            // ctx.response.body = {
            //   message:'success'
            // }
            ctx.success('success')
            // ctx.render('sign-result.html',{result:'登录成功'+name})
          } else {
            ctx.error('error')
            // ctx.render('sign-result.html',{result:'用户名或密码错误'})
          }
        }).catch((err)=>{
          ctx.error(err)
        })
      } else {
        ctx.error('账户名或者密码为空')
      }
  },
  'POST /signup': async (ctx, next) => {
    const name = ctx.request.body.name || ''
    const password = ctx.request.body.password || ''
    return UserModel.create({
      name,
      password
    }).then((res)=>{
      ctx.success('success')
    }).catch((err)=>{
      ctx.error(err)
    })
  }
}
