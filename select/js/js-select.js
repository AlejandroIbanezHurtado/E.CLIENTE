window.addEventListener("load", function(){
    const btnAllDer = document.getElementById("btnAllDer");
    const btnAllIzq = document.getElementById("btnAllIzq");
    const selecIzq = document.getElementById("selAlumnos");
    const selecDer = document.getElementById("selSeleccionados");
    const btnDer = document.getElementById("btnDer");
    const btnIzq = document.getElementById("btnIzq");
    const btnAnadir = document.getElementById("btnAnadir");
    const btnBorrar = document.getElementById("btnBorrar");
    const btnGrabar = document.getElementById("btnGrabar");
    const txtAnadir = document.getElementById("txtAnadir");
    const txtBorrar = document.getElementById("txtBorrar");

    btnAllDer.onclick=function(){
        selecDer.annadirTodos(selecIzq);
    }

    btnAllIzq.onclick=function(){
        selecIzq.annadirTodos(selecDer);
    }

    btnDer.onclick=function(){
        selecDer.annadirTodos(selecIzq, true);
        selecDer.ordenar();
    }

    btnIzq.onclick=function(){
        selecIzq.annadirTodos(selecDer, true);
        selecIzq.ordenar();
    }

    btnAnadir.onclick=function(){
        selecIzq.anadeOption(txtAnadir.value);
    }

    btnBorrar.onclick=function(){
        selecIzq.borraOption(txtBorrar.value);
    }

    btnGrabar.onclick=function(){
        localStorage.setItem("alumnos", selecIzq.creaJSON());
    }

    selecIzq.rellenaSelec(localStorage.getItem("alumnos"));
    
})