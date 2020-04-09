module.exports = {
  'GET /': async (ctx, next) => {
    ctx.render('sign.html', {
      title: 'Welcome',
    })
  },
}
