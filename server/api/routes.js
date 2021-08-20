const express = require('express');
const router = express.Router();
const connection = require('../sqlcon');

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.get('/',(req,res)=>{
    res.send('hello from the api route');
});

router.get('/customers',(req,res)=>{
    let sql =  'SELECT * FROM customers';

    connection.query(sql,(err,result)=>{
        if(err) throw err;
        else
        {
           // console.log(result);
            res.json(result);
        }
    });
});
router.get('/givetransactions',(req,res)=>{
    let sql =  'SELECT * FROM transactions';

    connection.query(sql,(err,result)=>{
        if(err) throw err;
        else
        {
           // console.log(result);
            res.json(result);
        }
    });
});

router.post('/transactions',(req,res)=>{

    let sender = connection.escape(req.body.sender) ;
    let receiver = connection.escape(req.body.receiver) ;
    let ammount = parseFloat(connection.escape(req.body.ammount)) ;
    console.log(sender,receiver,ammount);
    sql = `INSERT INTO transactions ( sender, receiver, ammount) VALUES (${sender}, ${receiver}, ${ammount})`;
    sql1 = `update customers set customers.balance = customers.balance + ${ammount} where customers.email = ${receiver}`;
    sql2 = `update customers set customers.balance = customers.balance - ${ammount} where customers.email = ${sender}`;


    connection.query(sql2,(err,result)=>{
            if(err) {
                json.status(200).json({
                    "message" : "there is an error occured"
                });

                throw err;
                
            }
            else
            {
                
            //  console.log(result);
                
            }
        });
    
    connection.query(sql1,(err,result)=>{
        if(err) {
            
            json.status(200).json({
                "message" : "there is an error occured"
            });
            console.log(err);
            throw err;
        }
        else
        {
            
          //  console.log(result);
          //  ress.status(200).send('query done');
        }
    });
    connection.query(sql,(err,result)=>{
        if(err) {
            json.status(200).json({
                
                "message" : "there is an error occured"
            });
            console.log(err);
        }
        else
        {
            
            res.status(200).json({
                "message" : "transaction successfull"
            });
        }
    });
    
});

router.get('/customers/:id',(req,res)=>{

    let email = connection.escape(req.params.id);
 //   console.log(email);
    let sql =  `SELECT * FROM customers where email = ${email}`;

    connection.query(sql,(err,result)=>{
        if(err) throw err;
        else
        {
            
          //  console.log(result);
            res.json(result);
        }
    });
});


module.exports = router;