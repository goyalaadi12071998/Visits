const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host : 'redis-server',
    port : 6379
});
client.set('visits',0);
app.get('/',function(req,res){
    //sprocess.exit(1);
    client.get('visits' , function(err,visits){
        res.send('No of client visited ' + visits); 
        client.set('visits' , parseInt(visits)+1);
    });
});


app.listen(8081,function(){
    console.log('Server running on port 8081');
});
