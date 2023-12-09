const pool = require("../src/repositories/postgres") 
const fs = require("fs");

fs.readFile("./schems/000001_init.up.sql", "utf-8", (err, query) => {
    if (err != null || err != undefined) {
        console.log(err.message);
        return;
    }
    pool.connect();

    pool.query(query, (err, res)=>{
        if(!err){
            console.log(res.rows);
        } else{
            console.log(err.message)
        }
        pool.end;
    })
});