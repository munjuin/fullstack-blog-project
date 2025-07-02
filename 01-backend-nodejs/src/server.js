const express = require('express');
const app = express();
const port = 8080;

app.listen(port, ()=>{
  console.log(`http://localhost:${port} 에서 서버 실행 중`);
})

app.get('/', (req, res)=>{
  res.send('하이');
})