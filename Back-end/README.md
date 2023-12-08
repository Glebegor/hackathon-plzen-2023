# Back-end on CO-Hackathon 2023
## API

### API lookups
1. "/auth/v1":
    -   "/register"   POST +
    -   "/login"      POST +
2. "/api/v1":
      - "/notes":
          - "/"       POST 
          - "/"       GET 
          - "/:id"    GET 
          - "/:id"    PATCH 
          - "/:id"    DELETE 
      - "/reasons":
          - "/"       POST 
          - "/"       GET 
          - "/:id"    GET 
          - "/:id"    PATCH 
          - "/:id"    DELETE 
      - "/patient":
          - "/"       POST +
          - "/:id"    GET +
          - "/"       GET +
          - "/:id"    PATCH +
          - "/:id"    DELETE +
      - "/emoji":
          - "/"       POST 
          - "/"       GET 
          - "/:id"    GET 
          - "/:id"    DELETE 
Or you can see it in this format(Handler is realizated if has "+" on the right side):<br>
"/auth/v1":<br>
"/auth/v1/register"                  POST<br>
"/auth/v1/login"                     POST<br>
<br>
"/api/v2":<br>
<br>
"/api/v2/notes": - For users<br>
"/api/v2/notes/"                     POST<br>
"/api/v2/notes/"                     GET<br>
"/api/v2/notes/:id"                  GET<br>
"/api/v2/notes/:id"                  PATCH<br>
"/api/v2/notes/:id"                  DELETE<br>
<br>
"/api/v2/reasons": - FOR doctors<br>
"/api/v2/reasons/"                   POST<br>
"/api/v2/reasons/"                   GET<br>
"/api/v2/reasons/:id"                GET<br>
"/api/v2/reasons/:id"                PATCH<br>
"/api/v2/reasons/:id"                DELETE<br>
<br>
"/api/v2/patient": - FOR doctors<br>
"/api/v2/patient/"                   GET<br>
"/api/v2/patient/:id"                GET<br>
"/api/v2/patient/:id"                PATCH<br>
"/api/v2/patient/:id"                DELETE<br>
<br>
"/api/v2/emoji":<br>
"/api/v2/emoji/"                    GET<br>
"/api/v2/emoji/:id"                 GET<br> 
"/api/v2/emoji/"    - FOR doctors   POST<br>
"/api/v2/emoji/:id" - FOR doctors   DELETE<br>

<h3>JWT token and his structure</h3>
<hr>
JWT token looks like this:
<code>qweioucu34ioslk1j23lkjds.dkowjrlekwjriodfslvvldkwsjqr.dsfouqweopriuoiu3oi3o2uadflsk</code>
And has three parts: header.payload.signature<br>
Claims of our JWT token: userId, userUsername, userName, userSurname, userIsDoctor.<br>
Please, save in cookies or session storage. <br>
Header for token: Authorization.<br> 

<h3>Requests and responses on every link</h3>
<h3>AUTH</h3>
<hr>
<h4>"/auth/v1/register", method:POST.</h4>

Type | JSON 
--- | ---
Request | { "username": "Username", "name": "Name","surname": "Surname", "password_hash": "123456789", "birth_certificate_number": "12312391" }
Response | { "Status": "ok" } 
Error Response | { "message": "Some text" } 

<h4>"/auth/v1/login", method:POST.</h4>

Type | JSON 
--- | ---
Request | { "username": "Username", "password_hash": "123456789" }
Response | { "token": "wqewqeqwr123o1kepo2k-c439eropu1j32WADISIADOUI" }
Error Response | { "message": "Some text" } 

<h3>Notes</h3>
<hr>
<h4>"/api/v1/notes/", method:GET.</h4>

Type | JSON |
--- | --- |
Request | --- |
Response | [{ "id": "5321","id_user": "123", "name": "Name", "message": "Text" }... ]
Error Response | { "message": "Some text" }

<h4>"/api/v1/notes/", method:POST.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | { "id_user": "123", "name": "name", "message": "Text" } | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI123!sf09a" 
Response | { "Status": "ok" }| --- 
Error Response | { "message": "Some text" } | --- 

<h4>"/api/v1/notes/:id", method:GET.</h4>

Type | JSON
--- | --- 
Request | --- 
Response | { "id": "5321","id_user": "123", "name": "Name", "message": "Text" } 
Error Response | { "message": "Some text" } 

<h4>"/api/v1/notes/:id", method:PUT.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | { "id": "5321","id_user": "123", "name": "Name", "message": "Text" } | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "Status": "ok" } | --- 
Error Response | { "message": "Some text" } | --- 

<h4>"/api/v1/notes/:id", method:DELETE.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | --- | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "Status": "ok" } | --- 
Error Response | { "message": "Some text" } | --- 

<h3>Patient</h3>
<hr>

<h4>"/api/v1/patient/", method:GET.</h4>

Type | JSON | Headers
--- | --- | ---
Request | --- | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | [ { "id": "123", "username":"Username", "name": "Name", "surname": "Surname", "date": "11-12-2023", "birth_certificate_number": "123412", "email": "email@example.com", "telephone": "+42031490812", "insurance_number": "5231456", "problems": "problems", "reason_id": "52134", "place": "12304"}... ] | ---
Error Response | { "message": "Some text" } | ---

<h4>"/api/v1/patient/:id", method:GET.</h4>

Type | JSON | Headers
--- | --- | ---
Request | {"id": "12309123"} | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "id": "123","username": "Username", "name": "Name", "surname": "Surname", "date": "11-12-2023", "birth_certificate_number": "123412", "email": "email@example.com", "telephone": "+42031490812", "insurance_number": "5231456", "problems": "problems", "reason_id": "52134", "place": "12304"} | ---
Error Response | { "message": "Some text" } | ---

<h4>"/api/v1/patient/:id", method:PUT.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | {"username": "Username", "name": "Name", "surname": "Surname", "date": "11-12-2023", "birth_certificate_number": "123412", "email": "email@example.com", "telephone": "+42031490812", "insurance_number": "5231456", "problems": "problems", "reason_id": "52134", "place": "12304" } | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "Status": "ok" } | --- 
Error Response | { "message": "Some text" } | --- 

<h4>"/api/v1/patient/:id", method:DELETE.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | --- | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "Status": "ok" } | --- 
Error Response | { "message": "Some text" } | --- 

<h3>Reasones</h3>
<hr>
<h4>"/api/v1/reason/", method:GET.</h4>

Type | JSON | Headers
--- | --- | ---
Request | {"id": "12312"} | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | [ {"id": "12312", "name": "Name","description": "Description"}... ]  | ---
Error Response | { "message": "Some text" } | ---

<h4>"/api/v1/reason/", method:POST.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | { "name": "Name","description": "Description" } | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI123!sf09a" 
Response | { "Status": "ok" }| --- 
Error Response | { "message": "Some text" } | --- 

<h4>"/api/v1/reason/:id", method:GET.</h4>

Type | JSON | ---
--- | --- | ---
Request | { "id": "12312"} | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a"  
Response | { "name": "Name","description": "Description" } | --- 
Error Response | { "message": "Some text" } | --- 

<h4>"/api/v1/reason/:id", method:PUT.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | { "name": "Name","description": "Description" } | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "Status": "ok" } | --- 
Error Response | { "message": "Some text" } | --- 

<h4>"/api/v1/reason/:id", method:DELETE.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | --- | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "Status": "ok" } | --- 
Error Response | { "message": "Some text" } | --- 

<h3>Emoji</h3>
<hr>
<h4>"/api/v1/emoji/", method:GET.</h4>

Type | JSON |
--- | --- |
Request | --- |
Response | [{ "id": "5321","HEX": "#1239ee", "charset": "charset"}... ]
Error Response | { "message": "Some text" }

<h4>"/api/v1/emoji/", method:POST.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | { "id": "5321","HEX": "#1239ee", "charset": "charset" } | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI123!sf09a" 
Response | { "Status": "ok" }| --- 
Error Response | { "message": "Some text" } | --- 

<h4>"/api/v1/emoji/:id", method:GET.</h4>

Type | JSON
--- | --- 
Request | --- 
Response | { "id": "5321","HEX": "#1239ee", "charset": "charset" } 
Error Response | { "message": "Some text" } 

<h4>"/api/v1/emoji/:id", method:PUT.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | { "id": "5321","HEX": "#1239ee", "charset": "charset" } | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "Status": "ok" } | --- 
Error Response | { "message": "Some text" } | --- 

<h4>"/api/v1/emoji/:id", method:DELETE.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | --- | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "Status": "ok" } | --- 
Error Response | { "message": "Some text" } | --- 

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