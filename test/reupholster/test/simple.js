var request = require('../../../node_modules/couchapp/node_modules/request/main');

var root_app = process.argv[2];
console.log(root_app);

request(root_app, function (error, response, body) {
  if (!error && response.statusCode == 200) {
        if (body.indexOf('<title>Sample Application</title>') > 0) {
            console.log("reupholster success") // Print the google web page.
            process.exit(0);
        } else {
            console.log(body);
            process.exit(1);
        }
  } else {
      console.log(response.statusCode + ' ' + error);
      process.exit(1);
  }


})