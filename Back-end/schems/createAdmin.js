const pool = require("../src/repositories/postgres") 
const fs = require("fs");

pool.connect();

pool.query("INSERT INTO users (name, surname, password_hash, birth_certificate_number) VALUES (admin, admin, 123edwqsc123, 00000000) RETURNING *", (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message)
    }
    pool.end;
})
