(() => { 

  const mergeAddress = (protocol, domain, port) => {
    const localhost = window.location.hostname;
    const defaultProtocol = "//";
    const address = (
      `${(protocol && `${protocol}://`) || defaultProtocol}` +
      `${domain || localhost}` +
      `${(port && `:${port}`) || ""}`
    );

    return address;
  }

  const {
    REACT_APP_API_PROTOCOL: apiProtocol,
    REACT_APP_API_DOMAIN: apiDomain,
    REACT_APP_API_PORT: apiPort,
    REACT_APP_WEBSOCKET_PROTOCOL: websokcetProocol,
    REACT_APP_WEBSOCKET_DOMAIN: websocketDomain,
    REACT_APP_WEBSOCKET_PORT: websocketPort,
    REACT_APP_STATIC_PROTOCOL: staticProtocol,
    REACT_APP_STATIC_DOMAIN: staticDomain,
    REACT_APP_STATIC_PORT: staticPort
  } = process.env;


  window.BASE_URL = mergeAddress(apiProtocol, apiDomain, apiPort);
  window.WEBSOCKET_BASE_URL = mergeAddress(websokcetProocol, websocketDomain, websocketPort);
  window.STATIC_BASE_URL = mergeAddress(staticProtocol, staticDomain, staticPort)

})();