window.addEventListener("load",function(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var y=0;
    var width = c.width;
    var height = c.height;
  
    var muevePelota = function()
    {
        clear();
        ctx.beginPath();
        ctx.arc(150, y+40, 40, 0, 2 * Math.PI); //crear circulo
        ctx.strokeStyle="black"; //color de borde
        ctx.fillStyle="orange"; //color de relleno
        ctx.fill(); //poner relleno
        ctx.stroke(); //poner borde
        ctx.closePath();
        arriba = false;

        if(!arriba)
        {
            y=y+2;
        }

        if(y==height-80)
        {
            arriba = true;
        }

        if(arriba)
        {
            y=y-2;
        }

        if(y==height+40)
        {
            arriba = false;
        }
        
    }

    var clear = function()
    {
        ctx.clearRect(0,0,width,height);
    }

    var init = function(){
        muevePelota();
    }

   

    this.setInterval(init,1);
})