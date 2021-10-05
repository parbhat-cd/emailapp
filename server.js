const express = require('express');
const app = express(),
  bodyParser = require("body-parser");
port = 3000;

const users = [];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/form/dist/emailgui/"));


app.post('/api/v2login', (req, res) => { 
  console.log("Log-in Api ", req.body);
  var request = require('request');
  var username = req.body.username;
  var password = req.body.password;
  var appname = req.body.appname;
  var loginType = req.body.loginType;
  var portalName = req.body.portalName;
  var deviceInfo = req.body.deviceInfo;

  var url = {
    url: 'http://54.225.122.8:7000/dentsu/forcelogin/v1',
    method: 'post',
    json: {
      "username": username,
      "password": password,
      "appname": appname,
      "loginType": loginType,
      "portalName": portalName,
      "deviceInfo": deviceInfo
    },
    headers:{'Content-Type': 'application/json'}
  };
  console.log("Login url", url);

  request(url, function (error, response, body) {

    try {
      console.log(response.statusCode,body)
      if (!error && response.statusCode == 200) { 
        var responseData;
        responseData = body;
        console.log("responseData",responseData)
        res.json(responseData)

      } else {
        res.json({
          "status": "failure",
          "message": "no login",
          "errorcode": 500
        });
      }

    } catch (e) {
      console.trace(e);
      res.json({
        "status": "failure",
        "message": "exception occured",
        "errorcode": 500
      });
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/form/dist/emailgui/index.html")
});

app.get('/login', (req, res) => {
  console.log("insideloginroute")
  res.sendFile(process.cwd() + "/form/dist/emailgui/index.html")
});

app.get('/page', (req, res) => {
  res.sendFile(process.cwd() + "/form/dist/emailgui/index.html")
});


app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});





























































































































