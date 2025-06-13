import express from "express";

const app = express();
const port = 3000;

const day=new Date().getDay();

var dayT="";

var ad="";

if(day>0){
  dayT="a Weekday";
  ad=" it's time to work hard 🤦‍♂️";
}
else{
  dayT="the Weekend";
  ad="Let's rock 🤘";
}

app.get("/", (req, res) => {
  res.render("index.ejs",{dayType:dayT,advice:ad});
});

app.listen(port,()=>{
    console.log(`server is runnig at http://localhost:${port}`);
});


