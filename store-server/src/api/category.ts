import Router from 'koa-router'
const router = new Router()
router
    .get('/', async(ctx,next) => {
        ctx.body = [
            {id:1, title:'Computer'},
            {id:2, title:'Fantasy'}
        ]
    })
export default router
