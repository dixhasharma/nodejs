var express=require('express')
var app =express();
var link="<br><br><a href='/'>home</a>  <a href='/about'>about</a><a href='/contact'>contact</a>"

app.get("/",function(req,res){
    res.send("<center><h1> this is home page</h1></center>")
})
app.get("/about",function(req,res){
    res.send("<center><h1> this is about page</h1></center>"+link)

})

app.get("/contact",function(req,res){
    res.send("<center><h1> this is home page</h1></center>"+link)

}).listen(5000)
