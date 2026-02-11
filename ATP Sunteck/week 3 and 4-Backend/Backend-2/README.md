1. Generate package.json
    npm init -y

2. Create server.js

3. Install , import "express" and create HTTP server. Assign port

### connect MongoDB database

        REST API  ----->mongodb native driver------>           MongoDB server
        REST API  ----->mongodb ODM tool(mongoose)------>      MongoDB server
    
    a. install mongoose and connect to mongodb server
    b. create Schema(blueprint of document) of resource
    c. create model of that schema
    d. perform DB operations on that model



### create PRODUCT API

product obj schema:{pid,productNmae,price}
1.post
2.get
3.get<id>
4.put<id>