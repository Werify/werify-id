export declare const werify: () => {
    config: {
        baseURL: string;
    };
    login: (endpoint: string, identifier: any) => Promise<any>;
    loginOTP: (endpoint: string, payload: any) => Promise<any>;
    getQRSession: (endpoint: string) => Promise<any>;
    checkSession: (endpoint: string) => Promise<any>;
    getUserProfile: (endpoint: string, accessToken: string) => Promise<any>;
    getUserNumbers: (endpoint: string, accessToken: string) => Promise<any>;
    getFinancialInfo: (endpoint: string, accessToken: string) => Promise<any>;
    updateUserProfile: (endpoint: string, accessToken: string) => Promise<any>;
    addMobileNumber: (endpoint: string, accessToken: string, mobile_number: string) => Promise<any>;
    updateFinancialInfo: (endpoint: string, accessToken: string) => Promise<any>;
    getNewModalSession: (endpoint: string, accessToken: string) => Promise<any>;
    claimModalSession: (endpoint: string, accessToken: string) => Promise<any>;
    claimQRSession: (endpoint: string, accessToken: string) => Promise<any>;
};
