var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);

/*create an adapter/interface to support upload of data/files to multiple apis (dropbox,mediafire)
you can develop the methods for invoking mediafire api and use the methods for invoking dropbox api developed by  team member who has been assigned task 1

Methods needed :-
login,uploadfile,downloadfile,deletefile

these methods should invoke the corresponding apis based on the provider info sent dynamically.

If the input params contain the provider as "dropbox", it should invoke the dropbox login via your login method.
*/
