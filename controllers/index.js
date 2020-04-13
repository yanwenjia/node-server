module.exports = {
  'GET /': async (ctx, next) => {
    ctx.render('sign.html', {
      title: 'Welcome',
    })
  },
  'GET /sign-up': async (ctx, next) => {
    ctx.render('sign-up.html', {
      title: '注册',
    })
  },
}
