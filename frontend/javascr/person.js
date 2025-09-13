baseprice=30;
totaldistance=19.5;
if(totaldistance<=10){
    totalprice=baseprice;
} 
else if(totaldistance>5 && totaldistance<=15){
    totalprice=baseprice+15*(totaldistance-5);
} 
else {
    totalprice=baseprice+15*10+20*(totaldistance-15);
}
console.log(totalprice);