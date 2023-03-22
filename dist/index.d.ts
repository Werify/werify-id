/**
  * @description Set Base URL
  * @param endpoint: string
  * @returns BaseUrl Set
  */
export declare const setBaseUrl: (baseEndpoint: string) => Promise<void>;
/**
  * @description request user login otp
  * @param identifier: string
  * @returns a session
  */
export declare const login: (endpoint: string, identifier: any) => Promise<any>;
/**
  * @description Login user with OTP
  * @param id: string
  * @param hash: string
  * @param otp: string
  * @returns Access Token and User Data
  */
export declare const loginOTP: (endpoint: string, payload: any) => Promise<any>;
/**
  * @description Get a new QR session
  * @returns a QR session
  */
export declare const getQRSession: (endpoint: string) => Promise<any>;
/**
  * @description Get login session (both QR and modal)
  * @argument hash
  * @argument id
  * @example api/session-check/modal or qr/{hash}/{id}
  * @returns token and user data
  */
export declare const checkQRSession: (endpoint: string) => Promise<any>;
/**
  * @description Get User Profile Data
  * @argument token
  * @returns user data
  */
export declare const getUserProfile: (endpoint: string, accessToken: string) => Promise<any>;
/**
  * @description Get User Mobile numbers
  * @argument token
  * @returns user Numbers
  */
export declare const getUserNumbers: (endpoint: string, accessToken: string) => Promise<any>;
/**
  * @description Get User Financial Information
  * @argument token
  * @returns User Financial Information
  */
export declare const getFinancialInfo: (endpoint: string, accessToken: string) => Promise<any>;
/**
  * @description PUT Update UserProfile
  * @param any: send fields ou want to change
  * @argument token
  * @returns updated user data
  */
export declare const updateUserProfile: (endpoint: string, accessToken: string) => Promise<any>;
/**
  * @description Post Add mobile Number
  * @param mobile_number: send mobile number
  * @argument token
  * @returns mobile number list
  */
export declare const addMobileNumber: (endpoint: string, accessToken: string, mobile_number: string) => Promise<any>;
/**
  * @description PUT Update Financial Info
  * @param any: Send Fields tou want to change
  * @argument token
  * @returns User Financial Information
  */
export declare const updateFinancialInfo: (endpoint: string, accessToken: string) => Promise<any>;
/**
  * @description Get New Modal Session
  * @argument token
  * @example api/user/modal
  * @returns New Session from modal and user
  */
export declare const getNewModalSession: (endpoint: string, accessToken: string) => Promise<any>;
/**
  * @description Get Claim Modal Session
  * @example api/modal/{hash}/{id}
  * @argument token
  * @returns returns new session for modal and user
  */
export declare const claimModalSession: (endpoint: string, accessToken: string) => Promise<any>;
/**
  * @description Get Claim QR session
  * @example api/qr/{hash}/{id}
  * @argument token
  * @returns User Financial Information
  */
export declare const claimQRSession: (endpoint: string, accessToken: string) => Promise<any>;
