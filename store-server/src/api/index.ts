import Router from "koa-router"
import category from './category'

const apiRouter = new Router()

apiRouter.use('/api/category',category.routes())

export default apiRouter
