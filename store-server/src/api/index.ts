import Router from "koa-router"
import category from './category'
import book from './book'

const apiRouter = new Router()

apiRouter.use('/api/category',category.routes())
apiRouter.use('/api/book',book.routes())

export default apiRouter
