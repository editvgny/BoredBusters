##Registration
###Requests to http://127.0.0.1:8000/api/register with POST method
##1. test case:
- registration, all data is valid
- response returns with 201 status code
- request body: {"email": "test@gmail.com", "username":"test", "password1":"test", "password2": "test"}
- test:
```javascript
pm.test("Status test", function () {
            pm.response.to.have.status(201);
});
```
- result: PASS

##2. test case:
- registration, only email is NOT valid
- response returns with 422 status code
- request body: {"email": "", "username":"test", "password1":"test", "password2": "test"}
- test:
```javascript
pm.test("Status test", function () {
pm.response.to.have.status(422);
});
```
- result: PASS

##3. test case:
- registration, only username is NOT valid
- response returns with 422 status code
- request body: {"email": "test@gmail.com", "username":"", "password1":"test", "password2": "test"}
- test:
```javascript
pm.test("Status test", function () {
    pm.response.to.have.status(422);
});
```
- result: PASS

##4. test case:
- registration, no passwords provided
- response returns with 422 status code
- request body: {"email": "test@gmail.com", "username":"test", "password1":"", "password2": ""}
- test:
```javascript
pm.test("Status test", function () {
    pm.response.to.have.status(422);
});
```
- result: PASS

##5. test case:
- registration, passwords don't match
- response returns with 422 status code
- request body: {"email": "test@gmail.com", "username":"test", "password1":"test", "password2": ""}
- test:
```javascript
pm.test("Status test", function () {
    pm.response.to.have.status(422);
});
```
- result: PASS

##6. test case:
- registration, no data is valid
- response returns with 422 status code
- request body: {"email": "", "username":"", "password1":"", "password2": ""}
- test:
```javascript
pm.test("Status test", function () {
    pm.response.to.have.status(422);
});
```
- result: PASS

##Login
###Requests to http://127.0.0.1:8000/api/login with POST method

##1. test case:
- login, no data provided
- response returns with 401 status code
- request body: {"email": "", "password":""}
- test:
```javascript
pm.test("Status test", function () {
    pm.response.to.have.status(401);
});
```
- result: PASS

##2.test case:
- login, no password provided
- response returns with 401 status code
- request body: {"email": "email", "password":""}
- test:
```javascript
pm.test("Status test", function () {
    pm.response.to.have.status(401);
});
```
- result: PASS

##3.test case:
- login, no username provided
- response returns with 401 status code
- request body: {"email": "", "password":"password"}
- test:
```javascript
pm.test("Status test", function () {
    pm.response.to.have.status(401);
});
```
- result: PASS

##4.test case:
- login, not valid data provided
- response returns with 401 status code
- request body: {"email": "email", "password":"password"}
- test:
```javascript
pm.test("Status test", function () {
    pm.response.to.have.status(401);
});
```
- result: PASS

##5.test case:
- login, valid data provided
- response returns with 200 status code
- request body: {"email": "test", "password":"test"}
- test:
```javascript
pm.test("Status test", function () {
    pm.response.to.have.status(200);
});
```
- result: PASS

