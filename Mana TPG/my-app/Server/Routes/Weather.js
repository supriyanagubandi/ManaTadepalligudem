const express = require('express');
var bodyParser = require('body-parser');
const moment = require('moment');
const mysql = require('mysql');
var multer = require('multer');
const axios = require('axios');
var upload = multer();
const app = express();

const router = express.Router();


router.post('/',function(req,res){
		
	axios.get("http://api.openweathermap.org/data/2.5/weather?q=Tadepallegudem&?units=imperial&APPID=b4592441ef1658b5186be5e1d83f295a").then((result)=>{

       console.log(result);
      let   {main, wind, cloud } = result.data;
      console.log(result.data.main)
        res.send({ main ,wind, cloud})
     // res.send(JSON.parse( { weather : main}))

    }).catch(error=>{
        console.log(error);
        res.send(error);
    })
		

			
		
})




module.exports = router; 