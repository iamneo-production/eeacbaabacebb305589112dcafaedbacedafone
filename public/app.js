function calculate()
{
    var dat = document.getElementById("birthDate").value;
    const today = new Date();
    const bday = new Date(dat); 
    const age = today.getFullYear()-bday.getFullYear();
    if((today.getMonth()<bday.getMonth())||(today.getMonth()===bday.getMonth())&&(today.getDate()<bday.getDate()))
        age = age-1
    if(age>=18)
    {
        document.getElementById("ans").innerHTML = "Age:"+age+"(Eligible Voter)";
        document.getElementById("ans").style.color = "green";
    }
    else{
        document.getElementById("ans").innerHTML = "Age:"+age+"(Not Eligible to Vote)";
        document.getElementById("ans").style.color ="red";
    }
    
}