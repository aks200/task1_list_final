
add=function(){

    let v=document.getElementById("txt1").value;

    if(v==""){
        alert("please enter text!!!!!");
    }
    else{
        //let n=form.main.querySelectAll('txt');
        alert("You Added:"+v);

        let ul=document.createElement("ul");
        document.body.append(ul);

        
        let li=document.createElement("li");
        li.textContent=v;
        ul.append(li);
        //alert(li.innerText);
    }
}



//using jquery...
$( document ).ready(function() {
    $(".list").on('click','li',function() {
    alert($(this).text());
    });
});



    





    

    
