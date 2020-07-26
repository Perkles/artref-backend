const express = require('express');
const app = express();
app.listen(3333);

app.get('/', function(request, response){
    return response.send("hayoy");
});