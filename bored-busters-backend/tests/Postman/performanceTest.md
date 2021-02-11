##Registration
###Requests to http://127.0.0.1:8000/api/register with POST method

##1. test case:
- registration with valid data
- response time is less than 200ms in average (10 tests)
- request body: {"email": "test@gmail.com", "username":"test", "password1":"test", "password2": "test"}
- test:
```javascript
 pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
```
- result: 
```
1.  FAIL, 230ms
2.  FAIL, 226ms
3.  PASS, 163ms
4.  PASS, 186ms
5.  PASS, 153ms
6.  PASS, 191ms
7.  FAIL, 335ms
8.  PASS, 155ms
9.  PASS, 154ms
10. FAIL, 350ms
AVERAGE: 214,3ms overall: FAIL
```

##2. test case:
- registration with invalid data (no data provided)
- response time is less than 200ms in average (10 tests)
- request body: {"email": "", "username":"", "password1":"", "password2": ""}
- test:
```javascript
 pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
```
- result:
```
1.  FAIL, 202ms
2.  PASS, 198ms
3.  PASS, 154ms
4.  FAIL, 209ms
5.  PASS, 143ms
6.  FAIL, 209ms
7.  PASS, 164ms
8.  FAIL, 218ms
9.  FAIL, 257ms
10. PASS, 131ms
AVERAGE: 188,5ms overall: PASS
```

##Login
###Requests to http://127.0.0.1:8000/api/login with POST method

##1. test case:
- login with valid data
- response time is less than 400ms in average (10 tests)
- request body: {"email": "test@gmail.com", "password":"test"}
- test:
```javascript
 pm.test("Response time is less than 400ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(400);
});
```
- result:
```
1.  PASS, 290ms
2.  PASS, 329ms
3.  PASS, 355ms
4.  PASS, 269ms
5.  PASS, 370ms
6.  PASS, 387ms
7.  PASS, 325ms
8.  PASS, 363ms
9.  PASS, 382ms
10. PASS, 309ms
AVERAGE: 337,9ms overall: PASS
```

##2. test case:
- login with invalid data (no data provided)
- response time is less than 200ms in average (10 tests)
- request body: {"email": "", "password":""}
- test:
```javascript
 pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
```
- result:
```
1.  FAIL, 227ms
2.  PASS, 146ms
3.  PASS, 141ms
4.  PASS, 178ms
5.  FAIL, 203ms
6.  FAIL, 236ms
7.  FAIL, 213ms
8.  PASS, 164ms
9.  PASS, 166ms
10. PASS, 136ms
AVERAGE: 181ms overall: PASS
```
