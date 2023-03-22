let r = "";
const s = async (n) => {
  r = n;
}, h = async (n, e) => fetch(
  r + n,
  { method: "post", body: e }
).then((t) => t.json()).then((t) => t), a = async (n, e) => fetch(r + n, { method: "post", body: e }).then((t) => t.json()).then((t) => t), c = async (n) => fetch(r + n).then((e) => e.json()).then((e) => e), u = async (n) => fetch(r + n).then((e) => e.json()).then((e) => e), i = async (n, e) => fetch(
  r + n,
  { headers: { authorization: e } }
).then((t) => t.json()).then((t) => t), d = async (n, e) => fetch(
  r + n,
  { headers: { authorization: e } }
).then((t) => t.json()).then((t) => t), f = async (n, e) => fetch(
  r + n,
  { headers: { authorization: e } }
).then((t) => t.json()).then((t) => t), y = async (n, e) => fetch(
  r + n,
  { headers: { authorization: e }, method: "put" }
).then((t) => t.json()).then((t) => t), j = async (n, e, t) => fetch(
  r + n,
  { headers: { authorization: e }, method: "post", body: t }
).then((o) => o.json()).then((o) => o), l = async (n, e) => fetch(
  r + n,
  { headers: { authorization: e }, method: "put" }
).then((t) => t.json()).then((t) => t), m = async (n, e) => fetch(
  r + n,
  { headers: { authorization: e } }
).then((t) => t.json()).then((t) => t), z = async (n, e) => fetch(
  r + n,
  { headers: { authorization: e } }
).then((t) => t.json()).then((t) => t), p = async (n, e) => fetch(
  r + n,
  { headers: { authorization: e } }
).then((t) => t.json()).then((t) => t);
export {
  j as addMobileNumber,
  u as checkQRSession,
  z as claimModalSession,
  p as claimQRSession,
  f as getFinancialInfo,
  m as getNewModalSession,
  c as getQRSession,
  d as getUserNumbers,
  i as getUserProfile,
  h as login,
  a as loginOTP,
  s as setBaseUrl,
  l as updateFinancialInfo,
  y as updateUserProfile
};
