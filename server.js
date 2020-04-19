'use strict'
var express = require('express')
var app = express()
 
app.get('/multiples/print', (req, res) => {
	var a = req.query.inivalue,
		b = req.query.endvalue,
		result = {}

	if (!isNaN(a) && !isNaN(b)) {	
	   var m
	   if ((a<0)||(a>100)) a = 1
	   if ((b<0)||(b>100)) b = 100
		 if (a > b){
			m = getIntervalReplace(b,a)		 
		 }else {
			m = getIntervalReplace(a,b)
		 }
	  res.send(m)
	} else {
		result = {
			"httpCode":"400",
			"httpMessage":"Bad Request",
			"moreInformation":"Check your number intervals"
		}
		result.statusCode=400
	    res.send(result)
	} 
	  
})
app.listen(3000)



function multiple(valor, multiple)
{
	var rest = valor % multiple
	if(rest==0)
		return true
	else
		return false
}
	
function getIntervalReplace(pa, pb) {

	var temp,
	 valores=[]
	for(var i=pa;i<=pb;i++){ 
		console.log(i)
		temp = i;		
		if(multiple(i,3))
			temp='Pe';

		if(multiple(i,5))
			 if (temp=='Pe') temp+='Do'
				else temp='Do';
		 
	 valores.push(temp)
	}
	  return( valores)
}