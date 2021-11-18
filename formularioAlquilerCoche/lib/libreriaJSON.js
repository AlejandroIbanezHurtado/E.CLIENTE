window.addEventListener("load",function(){
    var btnProcesar=document.getElementById("botonProv");
    var txtareaInformacion=document.getElementById("informacion");
    var selProvincia=document.getElementById("provincia");
    var selMunicipio=document.getElementById("municipio");

    btnProcesar.onclick=function(ev){
        ev.preventDefault();
        var contenido = txtareaInformacion.value;
        contenido=contenido.replaceAll("\"","");
        var filas = contenido.split("\n");
        var provincias=[];
        for (let i=0; i<filas.length; i++)
        {
            let partes = filas[i].split(";");
            if (provincias[partes[0]] == undefined)
            {
                provincias[partes[0]] = [];
            }
            provincias[partes[0]].push(partes[1]);
        }

        for (provincia in provincias){
            selProvincia.innerHTML+="<option value='" +provincia+ "'> " +provincia + "</option>";
        }
        selProvincia.onchange=function(){
            selMunicipio.innerHTML="";
            for (let i=0; i<provincias[this.value].length; i++){
                let municipio=provincias[this.value][i];
                
                selMunicipio.innerHTML+="<option value='" +municipio+ "'> " +municipio + "</option>";
                
                
            }
        }
    }
   
    
})
