const express = require('express')
const app = express()
const PORT = 3000



app.use(express.json())
app.use(express.static(__dirname + '/../client/build'))
app.use(express.urlencoded({extended:true }))


app.listen(PORT,()=>{
   console.log(`Example app listening at http://localhost:${PORT}`);  
})