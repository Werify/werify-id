const g = () => {
  let s = {
    baseURL: ""
  };
  return {
    config: s,
    login: async (t, n) => fetch(
      s.baseURL + (t || "/api/login"),
      { method: "post", body: n }
    ).then((e) => e.json()).then((e) => e),
    loginOTP: async (t, n) => fetch(s.baseURL + t, { method: "post", body: n }).then((e) => e.json()).then((e) => e),
    getQRSession: async (t) => fetch(s.baseURL + t).then((n) => n.json()).then((n) => n),
    checkSession: async (t) => fetch(s.baseURL + t).then((n) => n.json()).then((n) => n),
    getUserProfile: async (t, n) => fetch(
      s.baseURL + t,
      { headers: { authorization: n } }
    ).then((e) => e.json()).then((e) => e),
    getUserNumbers: async (t, n) => fetch(
      s.baseURL + t,
      { headers: { authorization: n } }
    ).then((e) => e.json()).then((e) => e),
    getFinancialInfo: async (t, n) => fetch(
      s.baseURL + t,
      { headers: { authorization: n } }
    ).then((e) => e.json()).then((e) => e),
    updateUserProfile: async (t, n) => fetch(
      s.baseURL + t,
      { headers: { authorization: n }, method: "put" }
    ).then((e) => e.json()).then((e) => e),
    addMobileNumber: async (t, n, e) => fetch(
      s.baseURL + t,
      { headers: { authorization: n }, method: "post", body: e }
    ).then((r) => r.json()).then((r) => r),
    updateFinancialInfo: async (t, n) => fetch(
      s.baseURL + t,
      { headers: { authorization: n }, method: "put" }
    ).then((e) => e.json()).then((e) => e),
    getNewModalSession: async (t, n) => fetch(
      s.baseURL + t,
      { headers: { authorization: n } }
    ).then((e) => e.json()).then((e) => e),
    claimModalSession: async (t, n) => fetch(
      s.baseURL + t,
      { headers: { authorization: n } }
    ).then((e) => e.json()).then((e) => e),
    claimQRSession: async (t, n) => fetch(
      s.baseURL + t,
      { headers: { authorization: n } }
    ).then((e) => e.json()).then((e) => e)
  };
};
export {
  g as werify
};
