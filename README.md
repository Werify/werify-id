# Werify-ID

![Werify](https://avatars.githubusercontent.com/u/125675596?s=200&v=4)


## Simple and lightweight auth service

**** First of all set your **baseURL** using `setBaseUrl` function ****

**Recommended Stack :**
1. **Vite**
2. **Vue** or **react**


## Dependencies
- No dependencies needed

## Installation
```bash
npm install werify-id
```
```bash
yarn add werify-id
```

## Usage
1. You can import and use all of your required functions
2. all functions return a promise for ease of use


```javascript
import { setBaseUrl, login } from 'werify-id';

// Set Base Url
setBaseUrl('yoursite.com/api')

// Use Functions
login('/endpoint', payload).then().catch()
```

## Public Routes ( Doesn't need any credintials or authorization )

----------


Function | method | params
---- | ---- | ---- |
setBaseUrl| _ | url 
login| POST | identifier
loginOTP| POST | id, hash, otp
getQRSession| GET | _
checkSession| GET | _


#### request user login otp 
POST `/api/login` requires `identifier` & returns session.

#### login user with otp
POST `/api/otp` requires `id`,`hash`,`otp` & returns token for user with some info.

#### get new qr session
GET `api/qr/` return qr code session.

#### check login session ( both qr and modal )
GET `api/session-check/modal/{hash}/{id}` returns token for user with some info.



## Private Routes ( Needs token in request header )
----------
Function | method | params
---- | ---- | ---- |
getUserProfile| GET | _ 
getUserNumbers| GET | _
getFinancialInfo| GET | _
updateUserProfile| PUT | form data
addMobileNumber| POST | mobile_number
updateFinancialInfo| PUT | form data
getNewModalSession| GET | _
claimModalSession| GET | _
claimQRSession| GET | _

#### user profile
GET `api/user/profile/`.

#### user mobile numbers
GET `api/user/profile/mobile-numbers`.

#### user financial informations
GET `api/user/financial-information/`.

#### update user profile
PUT `api/user/profile/` send fields you want to change.

#### add new mobile number
POST `api/user/mobile-numbers/` send `mobile_number` field.

#### update financial information
PUT `api/user/mobile-numbers/` send fields you want to change.

#### get new modal session
GET `api/user/modal` returns new session for modal and user.

#### claim modal session
GET `api/modal/{hash}/{id}` returns new session for modal and user.

#### claim qr session
GET `api/qr/{hash}/{id}` returns new session for modal and user.

----------