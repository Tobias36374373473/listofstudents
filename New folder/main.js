nameofstudentarray =[];
function submit()
{
    var name_1=document.getElementById("namestudent1").value;
    var name_2=document.getElementById("namestudent2").value;
    var name_3=document.getElementById("namestudent3").value;
    var name_4=document.getElementById("namestudent4").value;

    nameofstudentarray.push(name_1);
    nameofstudentarray.push(name_2);
    nameofstudentarray.push(name_3);
    nameofstudentarray.push(name_4);
    
    console.log(nameofstudentarray);

    document.getElementById("displayname").innerHTML=nameofstudentarray;
    document.getElementById("submitbutton").style.display= "none";
    document.getElementById("sortbutton").style.display= "inline-block";
    
}
function sorting()
{
    nameofstudentarray.sort();
    document.getElementById("displayname").innerHTML=nameofstudentarray;
}
