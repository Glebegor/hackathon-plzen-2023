# Back-end on CO-Hackathon 2023
## API
- /auth/v1/
    - /register
    - /login
    - /verify
- /api/v1/
    - /notes CRUD
    - /pacient CRUD // Delete only for doctor
    
## Config
.env
```
POSTGRES_PASSWORD="password"
SECRET_KEY="secret"
```

configs/yml
```
PORT: port

db:
  name: "name"
  username: "username"
  host: "host"
  port: "port"
  sslmode: "disabled"
```