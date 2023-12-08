const pool = require("../src/repositories/postgres") 
const fs = require("fs");

pool.connect();

pool.query("INSERT INTO users (username, name, surname, password_hash, birth_certificate_number, isDoctor) VALUES (admin, admin, admin, wqe123qwleko-qweedwqsc123, 0063202310, true) RETURNING *", (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message)
    }
    pool.end;
})
