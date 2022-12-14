import Router from "koa-router";
const router = new Router()
router
    .get('/', async(ctx,next) => {
        ctx.body = [
            {
                id: 1,
                title: 'Harry Potter',
                price: 560,
                category: {id: 2, title:'Fantasy'},
                stockAmount: 2
            }            
        ]
    })
export default router
