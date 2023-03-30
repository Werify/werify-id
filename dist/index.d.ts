export declare const werify: () => {
    config: {
        baseURL: string;
    };
    login: (endpoint: string, identifier: any) => Promise<any>;
    loginOTP: (payload: any, endpoint: string) => Promise<any>;
    getQRSession: (endpoint: string) => Promise<any>;
    checkSession: (endpoint: string) => Promise<any>;
    getUserProfile: (accessToken: string, endpoint: string) => Promise<any>;
    getUserNumbers: (accessToken: string, endpoint: string) => Promise<any>;
    getFinancialInfo: (accessToken: string, endpoint: string) => Promise<any>;
    updateUserProfile: (accessToken: string, endpoint: string) => Promise<any>;
    addMobileNumber: (accessToken: string, mobile_number: string, endpoint: string) => Promise<any>;
    updateFinancialInfo: (accessToken: string, endpoint: string) => Promise<any>;
    getNewModalSession: (accessToken: string, endpoint: string) => Promise<any>;
    claimModalSession: (accessToken: string, endpoint: string) => Promise<any>;
    claimQRSession: (accessToken: string, endpoint: string) => Promise<any>;
};
