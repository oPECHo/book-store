import Router from 'koa-router'
import db from '../db'
const router = new Router()
router
    .get('/', async(ctx,next) => {
        ctx.body = await db('category').select('*').orderBy('id')
    })
    .get('/:id', async(ctx,next) => {
        const id = parseInt(ctx.params.id)
        const category = await db('category').select('*').where('id').first()
        if(!category){
           ctx.response.status = 404
           return
        }
        ctx.body = category
    })
export default router
