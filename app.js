import express from 'express'
import mongoose from 'mongoose'
import router from './routes/products.js'
import user from './routes/user.js'
import SwaggerUi from 'swagger-ui-express'
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./swagger.yaml');

const url = 'mongodb://localhost:27017/demo'
const app = express()
const port = 3000

mongoose.connect(url)
const con = mongoose.connection
con.on('open', function() {
  console.log('db connected...');
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  next();
});


app.use('/api', router)
app.use('/user', user)


app.use(
  '/api-docs',
  SwaggerUi.serve, 
  SwaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})