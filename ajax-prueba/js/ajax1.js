window.addEventListener("load",function(){
    const form=document.getElementById("form1");
    const respuesta=document.getElementById("respuesta");
    const ultimas=document.getElementById("ultimas");
    form["enviar"].onclick=function(ev){
        ev.preventDefault();
        var nombre=form["nombre"].value;
        var apellidos=form["apellidos"].value;
        const ajax=new XMLHttpRequest();
        ajax.onload=function(){
            respuesta.innerHTML=this.responseText;
        }
        url = "responder.php?nombre="+nombre+"&apellidos="+apellidos;
        url = encodeURI(url);
        ajax.open("POST","responder.php");
        //ajax.setRequestHeader
        ajax.send(url);
    }
    function actualiza(){
        const ajax=new XMLHttpRequest();
        ajax.onload=function(){
            ultimas.innerHTML=this.responseText;
        }
        ajax.open("GET","ultimaNoticia.txt");
        ajax.send();
    }
    window.setInterval(actualiza(),5000);
})