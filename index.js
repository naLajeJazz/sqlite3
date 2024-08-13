const sqlite3=require("sqlite3").verbose();
let sql;

//conect database
const db = new sqlite3.Database("./test.db",sqlite3.OPEN_READWRITE,(err)=>{
                  if (err) return console.log(err.message)
})

//create table
/*
sql="CREATE TABLE users(id INTEGER PRIMARY KEY,nome)";
db.run(sql);
*/
//drop table 

//db.run("DROP TABLE users");

//insert data into table

/*
sql="INSERT INTO users(nome) VALUES (?)";
db.run(sql,["NOVO"],(err)=>{
                  if (err) return console.log(err.message) 
})
*/

//updade data
/*
sql="UPDATE users SET nome = ? WHERE id = ?";
db.run(sql,["Naima",1],(err)=>{
                  if (err) return console.log(err.message)
})
*/

//deletedada
/*
sql="DELETE FROM users WHERE id = ?";
db.run(sql,[1],(err)=>{
                  if (err) return console.log(err.message)
})
*/
// query the data

sql= "SELECT * FROM users";
db.all(sql,[],(err,rows)=>{
                  if (err) return console.log(err.message);
                  rows.forEach((row)=>{console.log(row)})   
});

///ALTERACOES
