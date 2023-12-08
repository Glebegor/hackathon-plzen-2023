# Back-end on CO-Hackathon 2023
## API

### API lookups
1. "/auth/v1":
    -   "/register"   POST
    -   "/login"      POST
    -   "/verify"     GET    
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
      - "/pacient":
          - "/"       POST
          - "/"       GET
          - "/:id"    GET
          - "/:id"    PATCH
          - "/:id"    DELETE
         
Or you can see it in this format(Handler is realizated if has "+" on the right side):<br>
"/auth/v1":<br>
"/auth/v1/register"                  POST<br>
"/auth/v1/login"                     POST<br>
"/auth/v1/verify"                    GET<br>
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
"/api/v2/pacient": - FOR doctors<br>
"/api/v2/pacient/"                   POST<br>
"/api/v2/pacient/"                   GET<br>
"/api/v2/pacient/:id"                GET<br>
"/api/v2/pacient/:id"                PATCH<br>
"/api/v2/pacient/:id"                DELETE<br>

<h3>JWT token and his structure</h3>
<hr>
JWT token looks like this:
<code>qweioucu34ioslk1j23lkjds.dkowjrlekwjriodfslvvldkwsjqr.dsfouqweopriuoiu3oi3o2uadflsk</code>
And has three parts: header.payload.signature<br>
Claims of our JWT token: userId.<br>
Please, save in cookies or session storage. <br>
Header for token: Authorization.<br> 

<h3>Requests and responses on every link</h3>
<h3>AUTH</h3>
<hr>
<h4>"/auth/v1/register", method:POST.</h4>


Type | JSON 
--- | ---
Request | { "name": "Name","surname": "Surname", "password_hash": "123456789", "birth_certificate_number": "12312391" }
Response | { "Status": "OK" } 
Error Response | { "message": "Some text" } 

<h4>"/auth/v1/login", method:POST.</h4>

Type | JSON 
--- | ---
Request | { "name": "Name", "password_hash": "123456789" }
Response | { "token": "wqewqeqwr123o1kepo2k-c439eropu1j32WADISIADOUI" }
Error Response | { "message": "Some text" } 

<h4>"/auth/v1/verify", method:GET.</h4>

Type | JSON 
--- | --- 
Request | { "token": "wqewqeqwr123o1kepo2k-c439!fpeowipoj2134WJDWADISIADOUI" }
Response | { "status": "OK" } 
Error Response | { "message": "Some text" } | Headers

<h3>Notes</h3>
<hr>
<h4>"/api/v1/notes/", method:GET.</h4>

Type | JSON |
--- | --- |
Request | --- |
Response | {data: [{ "id": "5321","id_user": "123", "name": "Name", "message": "Text" }... ]}
Error Response | { "message": "Some text" }

<h4>"/api/v1/notes/", method:POST.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | { "id_user": "123", "name": "Name", "message": "Text" } | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI123!sf09a" 
Response | { "Status": "OK" }| --- 
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
Response | { "Status": "OK" } | --- 
Error Response | { "message": "Some text" } | --- 

<h4>"/api/v1/notes/:id", method:DELETE.</h4>

Type | JSON | Headers 
--- | --- | --- 
Request | --- | Authorization: "Bearer tokenqw.qweqweqe.qwesaid0@OI#U!sf09a" 
Response | { "Status": "OK" } | --- 
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