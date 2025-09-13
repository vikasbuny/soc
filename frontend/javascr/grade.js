marks=80

marks1=70
marks2=70
marks3=60
marks4=70
marks5=75
average=(marks+marks1+marks2+marks3+marks4)/5
console.log("Average marks: "+average);
if(average>=90){
    console.log("Grade A");
}else if(average>=80){
    console.log("Grade B");
}else if(average>=70){
    console.log("Grade C");
}else if(average>=60){
    console.log("Grade D");
}else{
    console.log("Grade F");
}

