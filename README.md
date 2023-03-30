# Werify-ID
## Simple and lightweight auth service by **Werify**


![Werify](https://avatars.githubusercontent.com/u/125675596?s=200&v=4)



**** First of all set your **baseURL** using `config` Object ****

```javascript
import { werify } from '@werify/werify-id';

// Create the package instance
const authService = werify()

// Now you have access to everything :)
authService.config.baseURL = 'your_baseURL_here'
```

**If you want to use the default endpoints feel free to leave the `endpoint` parameter in each function**

**Recommended Stack :**
1. **Vite**
2. **Vue** or **react**


## Dependencies
- No dependencies needed

## Installation
```bash
npm install @werify/werify-id
```
```bash
yarn add @werify/werify-id
```

## Usage
1. You can import and use all of your required functions
2. all functions return a promise for ease of use


```javascript
import { werify } from '@werify/werify-id';

// Create the package instance
const authService = werify()

// Use Functions
authService.login('/endpoint', payload).then().catch()
```

## Public Routes ( Doesn't need any credintials or authorization )

----------


Function | method | params | default endpoint
---- | ---- | ---- | --- |
login| POST | identifier | /api/login
loginOTP| POST | id, hash, otp | /api/otp
getQRSession| GET | _ | /api/qr
checkSession| GET | _ | /api/session-check/model/{hash}/{id}


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
Function | method | params | default endpoint
---- | ---- | ---- | --- |
getUserProfile| GET | _ | /api/user/profile
getUserNumbers| GET | _ | /api/user/profile/mobile-numbers
getFinancialInfo| GET | _ | /api/user/financial-information
updateUserProfile| PUT | form data | /api/user/profile
addMobileNumber| POST | mobile_number | /api/user/mobile-numbers
updateFinancialInfo| PUT | form data | /api/user/financial-information/
getNewModalSession| GET | _ | /api/user/modal
claimModalSession| GET | _ | /api/modal/{hash}/{id}
claimQRSession| GET | _ | /api/qr/{hash}/{id}

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