import express from 'express'
import postsRoutes from './routes/posts.routes.js'
import fileupload from 'express-fileupload'

const app = express()

//Midlewares
app.use(express.json())
app.use(fileupload({
  useTempFiles: true,
  tempFileDir: './upload'
}))

//rutas
app.use(postsRoutes)


export default app