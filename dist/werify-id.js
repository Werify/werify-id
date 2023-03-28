const y = () => {
  let r = {
    baseURL: ""
  };
  return {
    config: r,
    login: async (n, t) => fetch(
      r.baseURL + (n || "/api/login"),
      { method: "post", body: t }
    ).then((e) => e.json()).then((e) => e),
    loginOTP: async (n, t) => fetch(r.baseURL + (n || "/api/otp"), { method: "post", body: t }).then((e) => e.json()).then((e) => e),
    getQRSession: async (n) => fetch(r.baseURL + (n || "/api/qr")).then((t) => t.json()).then((t) => t),
    checkSession: async (n) => fetch(r.baseURL + n).then((t) => t.json()).then((t) => t),
    getUserProfile: async (n, t) => fetch(
      r.baseURL + (n || "/api/user/profile"),
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    getUserNumbers: async (n, t) => fetch(
      r.baseURL + (n || "/api/user/profile/mobile-numbers"),
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    getFinancialInfo: async (n, t) => fetch(
      r.baseURL + (n || "/api/user/financial-information"),
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    updateUserProfile: async (n, t) => fetch(
      r.baseURL + (n || "/api/user/profile"),
      { headers: { authorization: t }, method: "put" }
    ).then((e) => e.json()).then((e) => e),
    addMobileNumber: async (n, t, e) => fetch(
      r.baseURL + (n || "/api/user/mobile-numbers"),
      { headers: { authorization: t }, method: "post", body: e }
    ).then((s) => s.json()).then((s) => s),
    updateFinancialInfo: async (n, t) => fetch(
      r.baseURL + (n || "/api/user/financial-information"),
      { headers: { authorization: t }, method: "put" }
    ).then((e) => e.json()).then((e) => e),
    getNewModalSession: async (n, t) => fetch(
      r.baseURL + (n || "/api/user/modal"),
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    claimModalSession: async (n, t) => fetch(
      r.baseURL + n,
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    claimQRSession: async (n, t) => fetch(
      r.baseURL + n,
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e)
  };
};
export {
  y as werify
};
