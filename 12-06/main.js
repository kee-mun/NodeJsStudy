var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id;

  if (_url == '/'){
    fs.readFile('helloworld.html',function(error, data){
      response.end(data);
    });
  }else {
    response.end('Not Data!')
  }
});

app.listen(8080)
