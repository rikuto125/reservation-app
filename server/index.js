const express = require("express");
// Using Node.js `require()`
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const productRoutes = require('./routes/products')

// MongDBに接続
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
  //useCreateIndex: true
}).then(
  () => {
    // 接続成功後の処理
    const fakeDb = new FakeDb();
    fakeDb.initDb();
  }
).catch(err => console.log(err));

const app = express();

// GET:products
app.use('/api/v1/products', productRoutes)

const PORT = process.env.PORT || '3001';

// サーバー起動
app.listen(PORT, function() {
  console.log('I am running!');
});
