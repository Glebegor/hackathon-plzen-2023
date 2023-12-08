const pool = require("../src/repositories/postgres") 

const result = pool.query(
  'INSERT INTO users (name, username, surname, password_hash, birth_certificate_number, isDoctor, date, email, telephone, insurance_number, problems, reason_id, place, emoji_id) VALUES ($1, $2, $3, $4, $5, true, null, null, null, null, null, null, null, null) RETURNING *',
  ["ADMIN-HLIB", "adminMain", "ADMIN-ARSENIUK", "qwekj12l3kjd09123", "123412321312"]
);
result
.then(result => {
    console.log(result.rows);
})
.catch( err => {
    console.log(err.message);
})

// 
// const result = pool.query("INSERT INTO users (username, name, surname, password_hash, birth_certificate_number, isDoctor) VALUES (admin, admin, admin, 'wqe123qwleko-qweedwqsc123', 0063202310, true) RETURNING *")
