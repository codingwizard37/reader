# Steps to push to server

1. Login to server
2. Pull changes (`git pull`)
3. Back-end
  1. `forever stop 1` (ends old process)
  2. `npm install`
    * `node server.js` to test
    * `forever start server.js` to install
5. Front-end
  1. `npm install`
  2. `npm run build`
  3. `cp -rp dist/* /var/www/reader.jake-searle.com/`
