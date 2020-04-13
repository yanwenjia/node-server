const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const templating = require('./templating')
// 导入controller middleware:
const controller = require('./controller')
const staticFiles = require('./static-files')

const app = new Koa()

// 处理静态文件
app.use(staticFiles('/static/', __dirname + '/static'))
// 解析post请求
app.use(bodyParser())

// 给ctx加上render
const isProduction = process.env.NODE_ENV === 'production'
app.use(
  templating('views', {
    noCache: !isProduction,
    watch: !isProduction,
  })
)
// 处理路由
app.use(controller())

app.listen(3000)
console.log('app started at port 3000...')
