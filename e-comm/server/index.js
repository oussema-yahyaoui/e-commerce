const express = require('express')
const app = express()
const PORT = 3000
const db = require('./database')



app.use(express.json())
app.use(express.static(__dirname + '/../client/build'))
app.use(express.urlencoded({ extended: true }))


app.get("/products", (req, res) => {
   db.query("select * from products", (err, results) => {
      if (err) throw err;
      res.send(results)
   })
});

app.post("/products", (req, res) => {

   const values = Object.values(req.body);
   console.log(values);
   db.query("insert into products (name,image,description,price) values (?,?,?,?) ;", values, (err, results) => {
      if (err) throw err;
      res.send({ msg: "done" })
   })
});
app.delete("/products/:id", (req, res) => {

   db.query("delete from products where id=?;", [req.params.id], (err, results) => {
      if (err) throw err;
      res.send({ msg: "done" })
   })
});

app.put("/products/:id", (req, res) => {

   // res.send(req.body)

   db.query("update products set name=?, image=?, description=?, price=? where id=? ", [req.body.name, req.body.image, req.body.description, req.body.price, req.params.id], (err, results) => {

      if (err) throw err;
      res.send({ msg: "done" })
   })
});








app.listen(PORT, () => {
   console.log(`Example app listening at http://localhost:${PORT}`);
})