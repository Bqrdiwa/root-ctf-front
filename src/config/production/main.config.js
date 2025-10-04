import "../configSystemAddresses";

if (process.env.NODE_ENV === "production") {
  
  window.Log = (...params) => console.log(params);
  window.Error = (...params) => console.log(params);
  window.POSTFIX_URL = "/";
  window.REQUEST = method => method || "get";
  window.RESPONSE = status => status || [200];

  window.REQUEST_AUTO_FAIL_TIMEOUT = 120000;
}
