const express = require('express')
const app = express()
const router = require('./api/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static("public"));
app.use(bodyParser());
app.use(cors());
app.use('/api',router);








const PORT =  process.env.PORT;
app.listen(process.env.PORT || 5055, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
app.get('/',(req,res)=>{
    res.send("hello from the server !");
});

