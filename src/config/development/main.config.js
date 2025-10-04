import "../configSystemAddresses";

if (process.env.NODE_ENV === 'development') {
  
  console.log('You are in << DEVELOPMENT >> mode. It means that all of your apis works with an api version that allows cross-origin requests.');

  window.REQUEST_AUTO_FAIL_TIMEOUT = 5000;
}
