window.addEventListener("load",function(){
    const btnEnviar = document.getElementById("enviar");
    const form = document.getElementById("form1");
    var div = document.getElementById("chat");
    var usuario = form['usuario'];
    var mensaje = form["mensaje"];
    var imagenPre = document.getElementById("imagenPre");
    var ultimo=0;
    var usuarioLogin="Alejandro";
    var codImagen=null;

    btnEnviar.onclick=function(ev){

        //no hagas lo que estas acostumbrado a hacer
        ev.preventDefault();

        if(usuario.value!="" && mensaje.value!="")
        {
            var texto = encodeURI("usuario=" + usuario.value + "&mensaje=" + mensaje.value + "&archivo=" +codImagen);
            const ajax = new XMLHttpRequest();
            ajax.open("POST","insertar.php");
            ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            ajax.send(texto);
            usuario.value="";
            mensaje.value="";
            imagenPre.src="";
        }
    }

    muestraMensajes=function(){
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && ajax.status==200)
            {
                var respuesta = ajax.responseText;
                var vector = JSON.parse(respuesta);

                for(i=0;i<vector.length;i++)
                {
                    var fecha = document.createElement("span");
                    var nombre = document.createElement("span");
                    var br = document.createElement("br");
                    var cajaMensaje = document.createElement("div");
                    
                    var mensaje = document.createElement("span");
                    if(vector[i].usuario==usuarioLogin)
                    {
                        cajaMensaje.className="cajaMiMensaje";
                        nombre.innerText="Yo";
                    }
                    else{
                        cajaMensaje.className="cajaMensaje";
                        nombre.innerText=vector[i].usuario;
                    }
                    mensaje.className="mensaje";
                    

                    mensaje.innerText=vector[i].mensaje;
                    fecha.innerText=vector[i].fecha;
                    

                    cajaMensaje.appendChild(mensaje);
                    cajaMensaje.appendChild(br);
                    cajaMensaje.appendChild(fecha);
                    cajaMensaje.appendChild(nombre);

                    div.appendChild(cajaMensaje);
                    
                    //if(div.)
                    div.scrollTop=div.scrollHeight;
                    ultimo=vector[i].id;
                    
                }
            }
        }
        ajax.open("GET","mensajes.php?ultimo="+ultimo);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        ajax.send();
        
    }


    //muestraMensajes();
    this.setInterval(muestraMensajes, 1000);
})

function readFile(input) {
    
   
    let file = input.files[0];

    let reader = new FileReader();
    
    reader.readAsDataURL(file);
    
    reader.onload = function() {
        imagenPre.src=reader.result; //mostramos la imagen previamente
        codImagen=reader.result;
    };
    
    reader.onerror = function() {
        console.log(reader.error);
    };

    console.log(e);
    
  
}