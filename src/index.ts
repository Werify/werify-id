let baseURL = ''
/**
  * @description Set Base URL
  * @param endpoint: string
  * @returns BaseUrl Set
  */
export const setBaseUrl = async (baseEndpoint: string) => {
  baseURL = baseEndpoint
}

//#region Login Apis (Public Routes)

/**
  * @description request user login otp
  * @param identifier: string
  * @returns a session 
  */
export const login = async (endpoint: string, identifier: any) => {
  return fetch(baseURL + endpoint,
    { method: 'post', body: identifier })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description Login user with OTP
  * @param id: string
  * @param hash: string
  * @param otp: string
  * @returns Access Token and User Data
  */
export const loginOTP = async (endpoint: string, payload: any) => {
  return fetch(baseURL + endpoint, { method: 'post', body: payload })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description Get a new QR session
  * @returns a QR session 
  */
export const getQRSession = async (endpoint: string,) => {
  return fetch(baseURL + endpoint)
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description Get login session (both QR and modal)
  * @argument hash
  * @argument id
  * @example api/session-check/modal or qr/{hash}/{id}
  * @returns token and user data
  */
export const checkSession = async (endpoint: string,) => {
  return fetch(baseURL + endpoint)
    .then(response => response.json())
    .then(json => { return json })
}

//#endregion

//#region Private Routes

/**
  * @description Get User Profile Data
  * @argument token
  * @returns user data
  */
export const getUserProfile = async (endpoint: string, accessToken: string) => {
  return fetch(baseURL + endpoint,
    { headers: { 'authorization': accessToken } })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description Get User Mobile numbers
  * @argument token
  * @returns user Numbers
  */
export const getUserNumbers = async (endpoint: string, accessToken: string) => {
  return fetch(baseURL + endpoint,
    { headers: { 'authorization': accessToken } })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description Get User Financial Information
  * @argument token
  * @returns User Financial Information
  */
export const getFinancialInfo = async (endpoint: string, accessToken: string) => {
  return fetch(baseURL + endpoint,
    { headers: { 'authorization': accessToken } })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description PUT Update UserProfile
  * @param any: send fields ou want to change
  * @argument token
  * @returns updated user data
  */
export const updateUserProfile = async (endpoint: string, accessToken: string) => {
  return fetch(baseURL + endpoint,
    { headers: { 'authorization': accessToken }, method: 'put' })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description Post Add mobile Number
  * @param mobile_number: send mobile number
  * @argument token
  * @returns mobile number list
  */
export const addMobileNumber = async (endpoint: string, accessToken: string, mobile_number: string) => {
  return fetch(baseURL + endpoint,
    { headers: { 'authorization': accessToken }, method: 'post', body: mobile_number })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description PUT Update Financial Info
  * @param any: Send Fields tou want to change
  * @argument token
  * @returns User Financial Information
  */
export const updateFinancialInfo = async (endpoint: string, accessToken: string) => {
  return fetch(baseURL + endpoint,
    { headers: { 'authorization': accessToken }, method: 'put' })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description Get New Modal Session
  * @argument token
  * @example api/user/modal
  * @returns New Session from modal and user
  */
export const getNewModalSession = async (endpoint: string, accessToken: string) => {
  return fetch(baseURL + endpoint,
    { headers: { 'authorization': accessToken } })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description Get Claim Modal Session
  * @example api/modal/{hash}/{id}
  * @argument token
  * @returns returns new session for modal and user
  */
export const claimModalSession = async (endpoint: string, accessToken: string) => {
  return fetch(baseURL + endpoint,
    { headers: { 'authorization': accessToken } })
    .then(response => response.json())
    .then(json => { return json })
}

/**
  * @description Get Claim QR session
  * @example api/qr/{hash}/{id}
  * @argument token
  * @returns User Financial Information
  */
export const claimQRSession = async (endpoint: string, accessToken: string) => {
  return fetch(baseURL + endpoint,
    { headers: { 'authorization': accessToken } })
    .then(response => response.json())
    .then(json => { return json })
}

//#endregion

