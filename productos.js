document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#f");
    form.addEventListener('submit', function(event){
      event.preventDefault();
      document.querySelector('#respuesta').innerHTML = "<p>Esperando respuesta...</p>";
      const datosFormulario = new FormData(form);
      const url = form.action;
      fetch(url, {method: "POST", body: datosFormulario})
         .then(respuesta => respuesta.json())
         .then( datos => { mostrarResultados(datos); })
         .catch( error => {console.log(error);});
    });
 });
 
 function mostrarResultados(datos){}
 
 
 {
     let r = "<ul><li>Nombre y apellido: " + datos.nombreApellido+'</li>';
     r+= "<li>Salario: $" + datos.salario + "</li>";
     r+= "<li>Comisión: $" + datos.comision + "</li>";
     r+= "<li>Total: $" + datos.ingresoTotal + "</li></ul>";
     document.querySelector('#respuesta').innerHTML = r;
 }
 
 function cambioTipo(tipo) {
     var f = document.getElementById("f");
     var mostrar = document.getElementById("segunTipo");
     
     while( mostrar.firstChild ) {
         mostrar.removeChild(mostrar.firstChild);
     }
 
     if(tipo == "e") {
         var i;
         var l = document.createElement("label");
         l.setAttribute("for","cantVentas");
         l.innerHTML = "Cantidad de ventas";
         var e = document.createElement("input");
         e.type = "number";
         e.name = "cantVentas";
         e.onchange = function() {             
             while ( d.firstChild ) {
                 d.removeChild(d.firstChild);
             }
             for (var j = 0;  j < e.value; j++) {
                 i = document.createElement("input");
                 i.type = "number";
                 i.name = "ventas["+j+"]";
                 d.appendChild(i);
             }
         };
         var d = document.createElement("div");
         d.setAttribute("id","montos");
         mostrar.appendChild(l);
         mostrar.appendChild(e);            
         mostrar.appendChild(d);
         f.submit.disabled=false; 
     }
     
     else if(tipo =="p") {
         var l = document.createElement("label");
         l.for = "fechaIngreso";
         l.innerHTML = "Fecha de ingreso";
         
         var i = document.createElement("input");
         i.type = "date";
         i.name = "fechaIngreso";
         
         mostrar.appendChild(l);
         mostrar.appendChild(i);
         f.submit.disabled=false;        
     }    
     else {
         f.submit.disabled=true;
     }
         
 }
     */