export const werify = () => {
  /**
    * @description Set Base URL and other configs
    * @param endpoint: string
    * @returns your base URL is Set
    */
  let config = {
    baseURL: ''
  }

  //#region Login Apis (Public Routes)

  /**
    * @description request user login otp
    * @param identifier: string
    * @returns a session 
    * @default /api/login
    */
  const login = async (endpoint: string, identifier: any) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/login'),
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
    * @default /api/otp
    */
  const loginOTP = async (payload: any, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/otp'), { method: 'post', body: payload })
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description Get a new QR session
    * @returns a QR session 
    * @default /api/qr
    */
  const getQRSession = async (endpoint: string,) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/qr'))
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description Get login session (both QR and modal)
    * @argument hash
    * @argument id
    * @example api/session-check/modal or qr/{hash}/{id}
    * @returns token and user data
    * @default /api/session-check/modal/{hash}/{id}
    */
  const checkSession = async (endpoint: string,) => {
    return fetch(config.baseURL + endpoint)
      .then(response => response.json())
      .then(json => { return json })
  }

  //#endregion

  //#region Private Routes

  /**
    * @description Get User Profile Data
    * @argument token
    * @returns user data
    * @default /api/user/profile
    */
  const getUserProfile = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/profile'),
      { headers: { 'authorization': accessToken } })
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description Get User Mobile numbers
    * @argument token
    * @returns user Numbers
    * @default /api/user/profile/mobile-numbers
    */
  const getUserNumbers = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/profile/mobile-numbers'),
      { headers: { 'authorization': accessToken } })
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description Get User Financial Information
    * @argument token
    * @returns User Financial Information
    * @default /api/user/financial-information
    */
  const getFinancialInfo = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/financial-information'),
      { headers: { 'authorization': accessToken } })
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description PUT Update UserProfile
    * @param any: send fields ou want to change
    * @argument token
    * @returns updated user data
    * @default /api/user/profile
    */
  const updateUserProfile = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/profile'),
      { headers: { 'authorization': accessToken }, method: 'put' })
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description Post Add mobile Number
    * @param mobile_number: send mobile number
    * @argument token
    * @returns mobile number list
    * @default /api/user/mobile-numbers
    */
  const addMobileNumber = async (accessToken: string, mobile_number: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/mobile-numbers'),
      { headers: { 'authorization': accessToken }, method: 'post', body: mobile_number })
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description PUT Update Financial Info
    * @param any: Send Fields tou want to change
    * @argument token
    * @returns User Financial Information
    * @default /api/user/financial-information
    */
  const updateFinancialInfo = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/financial-information'),
      { headers: { 'authorization': accessToken }, method: 'put' })
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description Get New Modal Session
    * @argument token
    * @example api/user/modal
    * @returns New Session from modal and user
    * @default /api/user/modal
    */
  const getNewModalSession = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/modal'),
      { headers: { 'authorization': accessToken } })
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description Get Claim Modal Session
    * @example api/modal/{hash}/{id}
    * @argument token
    * @returns returns new session for modal and user
    * @default /api/modal/{hash}/{id}
    */
  const claimModalSession = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + endpoint,
      { headers: { 'authorization': accessToken } })
      .then(response => response.json())
      .then(json => { return json })
  }

  /**
    * @description Get Claim QR session
    * @example api/qr/{hash}/{id}
    * @argument token
    * @returns User Financial Information
    * @default /api/qr/{hash}/{id}
    */
  const claimQRSession = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + endpoint,
      { headers: { 'authorization': accessToken } })
      .then(response => response.json())
      .then(json => { return json })
  }

  //#endregion
  return {
    config,
    login,
    loginOTP,
    getQRSession,
    checkSession,
    getUserProfile,
    getUserNumbers,
    getFinancialInfo,
    updateUserProfile,
    addMobileNumber,
    updateFinancialInfo,
    getNewModalSession,
    claimModalSession,
    claimQRSession,
  }
}