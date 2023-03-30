const y = () => {
  let r = {
    baseURL: ""
  };
  return {
    config: r,
    login: async (t, n) => fetch(
      r.baseURL + (t || "/api/login"),
      { method: "post", body: n }
    ).then((e) => e.json()).then((e) => e),
    loginOTP: async (t, n) => fetch(r.baseURL + (n || "/api/otp"), { method: "post", body: t }).then((e) => e.json()).then((e) => e),
    getQRSession: async (t) => fetch(r.baseURL + (t || "/api/qr")).then((n) => n.json()).then((n) => n),
    checkSession: async (t) => fetch(r.baseURL + t).then((n) => n.json()).then((n) => n),
    getUserProfile: async (t, n) => fetch(
      r.baseURL + (n || "/api/user/profile"),
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    getUserNumbers: async (t, n) => fetch(
      r.baseURL + (n || "/api/user/profile/mobile-numbers"),
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    getFinancialInfo: async (t, n) => fetch(
      r.baseURL + (n || "/api/user/financial-information"),
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    updateUserProfile: async (t, n) => fetch(
      r.baseURL + (n || "/api/user/profile"),
      { headers: { authorization: t }, method: "put" }
    ).then((e) => e.json()).then((e) => e),
    addMobileNumber: async (t, n, e) => fetch(
      r.baseURL + (e || "/api/user/mobile-numbers"),
      { headers: { authorization: t }, method: "post", body: n }
    ).then((s) => s.json()).then((s) => s),
    updateFinancialInfo: async (t, n) => fetch(
      r.baseURL + (n || "/api/user/financial-information"),
      { headers: { authorization: t }, method: "put" }
    ).then((e) => e.json()).then((e) => e),
    getNewModalSession: async (t, n) => fetch(
      r.baseURL + (n || "/api/user/modal"),
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    claimModalSession: async (t, n) => fetch(
      r.baseURL + n,
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e),
    claimQRSession: async (t, n) => fetch(
      r.baseURL + n,
      { headers: { authorization: t } }
    ).then((e) => e.json()).then((e) => e)
  };
};
export {
  y as werify
};
