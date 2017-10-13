var axios = require('axios');

  
 axios.post('http://localhost:8983/solr/facilities/update/json?&wt=json',
 [{ id : 27, title : 'Hello10' }]
)
     .then(function (parsedBody) {
        console.log("Succeeded", parsedBody);
     })
     .catch(function (err) {
         console.log("Error: ", err);
     });






//var solr = require('solr-client');
//var http = require('http');
//var  SolrError = require('./solr-error');
//var rp = require('request-promise');

/* var options = {
   // method: 'POST',
    uri: 'http://localhost:8983/solr/facilities/update/json?&wt=json',
    body: [{ id : 26, title : 'Hello10' }],
    json: true // Automatically stringifies the body to JSON
};
 
rp.post(options)
    .then(function (parsedBody) {
       console.log("Succeeded", parsedBody);
    })
    .catch(function (err) {
        console.log("Error: ", err);
    }); */

// Create a client
/* var client = solr.createClient({core:'facilities'});

// Add a new document
client.add({ id : 13, title : 'Hello2' },function(err,obj){
   if(err){
      console.log(err);
   }else{
      console.log('Solr response:', obj);
   }
}); */

/* function handleJSONResponse(request, callback){
    return function onJSONResponse(response){
        console.log("Here response");
       var text = '';
       var err = null;
       var data = null;
 
       // This properly handles multi-byte characters
       response.setEncoding('utf-8');
 
       response.on('data',function(chunk){
          text += chunk;
       });
 
       response.on('end',function(){
          if(response.statusCode < 200 || response.statusCode > 299){
             err = new SolrError(request,response,text);
             if(callback)  callback(err,null);
          }else{
             try{
                data = JSON.parse(text);
             }catch(error){
                err = error;
             }finally{
                if(callback)  callback(err,data);
             }
          }
       });
    };
 };
 
var postData = JSON.stringify([{ id : 19, title : 'Hello5' }]);
var options = {
    host : 'localhost',
    port : 8983,
    method : 'POST',
    headers :  {
        'content-type' : 'application/json; charset=utf-8',
        'accept' : 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData)
     },
    path : '/solr/facilities/update/json?&wt=json'
 };
console.log("Here");

 var request = http.request(options);

 

console.log("Here2");
 request.on('response', handleJSONResponse(request, function(err,obj){
    if(err){
       console.log(err);
    }else{
       console.log('Solr response:', obj);
    }
 }));

 console.log("Here3");

 request.on('error',function onError(err){
    if (callback) callback(err,null);
 });

 console.log("Here4");

 request.write(postData);
 request.end();

 console.log("End");
 */