
$(document).ready(function(){   
    $(".SegundoPaso").hide()
    $(".Resumen").hide()
    let d = new Date()
    if(d.getDate() < 10){           //Si el dia es menor del 10 lo muestra con un solo dígito
        var da = "0" + d.getDate    //y rompe el formato que acepta la prop min del calendario
    }else{
        da = d.getDate()
    }
    if(d.getMonth() < 10){          // idem con el mes, en este caso date.getMonth() devuelve un numero
        var dm = "0" + (d.getMonth() + 1) // menor por un valor así que le sumo uno para que el valor devuelto
    }else{                                 //corresponda al numero de mes actual
        dm = (d.getMonth() + 1)
    }
    let dd = d.getFullYear() + "-" + dm + "-" + da //armo la cadena con yyyy-mm-dd para el formato que acepta
    $("#fecha").prop("min", dd)         //la prop min del calendario y la establezco como tal
    $("#fecha").prop("defaultValue", dd) //Y la establezco tambien como valor default
});

$(document).ready(function(){  //Api clima y hora local
    $.get("http://api.weatherapi.com/v1/current.json?key=bd715aa1d05f48d8a8643645232004&q=osaka&aqi=no&lang=es", function(osaka){
        let horal = osaka.location.localtime.split(" ")
        $("#hora2").prop("innerText", horal[1])
        $("#tempok").prop("innerText", osaka.current.temp_c + "° C")
        $("#sensok").prop("innerText", osaka.current.feelslike_c + "° C")
        $("#condok").prop("innerText", osaka.current.condition.text)
        $("#imgok").prop("src", osaka.current.condition.icon)
    })
    $.get("http://api.weatherapi.com/v1/current.json?key=bd715aa1d05f48d8a8643645232004&q=buenos aires&aqi=no&lang=es", function(bsas){
        let horal = bsas.location.localtime.split(" ")
        $("#hora1").prop("innerText", horal[1])
        $("#tempba").prop("innerText", bsas.current.temp_c + "° C")
        $("#sensba").prop("innerText", bsas.current.feelslike_c + "° C")
        $("#condba").prop("innerText", bsas.current.condition.text)
        $("#imgba").prop("src", bsas.current.condition.icon)
    })  
});

$(document).ready(function(){
    $("#pasoanterior1").on("click", function(){ //código del boton paso siguiente del segundo paso del
        $(".PrimerPaso").show()                 //formulario de reservas
        $(".SegundoPaso").hide()
    })
});

$(document).ready(function(){
    let chk1 = 1,  chk2 = 1
    $("#celiaco").on("click", function(){
        if (chk1==1){
            $("#cantceliacos").prop("disabled", false) 
            chk1=0
        }
        else{
            $("#cantceliacos").prop("disabled", true)
            chk1=1
        }
    })
    $("#alergias").on("click", function(){
        if (chk2==1){
            $("#cualalergia").prop("disabled", false) 
            chk2=0   
        }
        else{
            $("#cualalergia").prop("disabled", true)
            chk2=1
        }  
    })
});

$(document).ready(function(){
    $("#siguientepaso1").on("click", function(){
        var val = 0 
        if($("#nombre").val() == ""){
            alert("El campo nombre es obligatorio, por favor ingrese su nombre")
            $("#nombre").focus()
            val = 0
        }
        else{
            $("#rnombre").prop("innerText" , $("#nombre").prop("value"))
            val += 1
        }
        if($("#apellido").val() == ""){
            alert("El campo apellido es obligatorio, por favor ingrese su apellido")
            $("#apellido").focus()
            val = 0
        }
        else{
            $("#rapellido").prop("innerText" , $("#apellido").prop("value"))
            val += 1
        }
        $("#remail").prop("innerText" , $("#email").prop("value"))
        if($("#tel").val() == "" || isNaN($("#tel").val())){
            alert("El campo teléfono es obligatorio, por favor ingrese un número válido")
            $("#tel").focus()
            val = 0
        }
        else{
            $("#rtel").prop("innerText" , $("#tel").prop("value"))
            val += 1
        }
        if (val == 3){
            $(".PrimerPaso").hide()
            $(".SegundoPaso").show()
        }                                                                
    })
});

$(document).ready(function(){
    $("#pasoanterior2").on("click", function(){
        $(".SegundoPaso").show()
        $(".Resumen").hide()
    })
});

$(document).ready(function(){
    $("#siguientepaso2").on("click", function(){
        var val2 = 0 
        if($("#fecha").val() == ""){
            alert("Debe seleccionar una fecha válida, por favor intente de nuevo")
            val2 = 0
        }else{
            $("#rfecha").prop("innerText" , $("#fecha").prop("value"))
            val2 += 1
        }
        $("#rhorario").prop("innerText" , $("#horario").prop("value"))
        if($("#comensales").val()=="" || isNaN($("#comensales").val()) ){
            alert("Debe introducir un número válido de comensales, por favor intente de nuevo")
            $("#comensales").focus()
            val2 = 0
        }else{
            $("#rcomensales").prop("innerText" , $("#comensales").prop("value"))
            val2 += 1
        }
        $("#rlugar").prop("innerText" , $("#lugar").prop("value"))
        if(($("#celiaco").is(":checked") && $("#cantceliacos").val() == "") || ($("#celiaco").is(":checked") && isNaN($("#cantceliacos").val()))){
            alert("Debe introducir una cantidad de comensales celíacos, por favor intente de nuevo")
            $("#cantceliacos").focus()
            val2 = 0 
        }else{
            if($("#celiaco").is(":checked")){
                $("#rceliaco").prop("innerText" , "Si, " + $("#cantceliacos").prop("value"))
                val2 += 1
            }else{
                $("#rceliaco").prop("innerText" , "No ")
                val2 += 1
            }
        }
        if($("#alergias").is(":checked") && $("#cualalergia").val() == ""){
            alert("Debe introducir a que ingrediente existen alergías, por favor intente de nuevo")
            $("#cualalergia").focus()
            val2 = 0 
        }else{
            if($("#alergias").is(":checked")){
                $("#ralergia").prop("innerText" , "Si, " + $("#cualalergia").prop("value"))
                val2 += 1
            }else{
                $("#ralergia").prop("innerText" , "No ")
                val2 += 1
            }
        }
        if($("#comentarios").val()==""){
            $("#rcomentarios").prop("innerText" , "-")
        }
        else{
            $("#rcomentarios").prop("innerText" , $("#comentarios").prop("value"))
        }
        if(val2 == 4){
            $(".SegundoPaso").hide()
            $(".Resumen").show() 
        }
    })
});

$(document).ready(function(){
    $("#confirmar").on("click", function(){
        var conf = window.confirm("¿Desea confirmar la solicitud de su reserva?")
        if(conf){
            alert("Su solicitud fue enviada, en las siguientes 24 hs recibirá la confirmación de su reserva o las opciones para modificar. Muchas gracias")
            location.reload()
        }
    })
});

$(document).ready(function(){
    $("#cenviar").on("click", function(){
        var val3 = 0
        if($("#cnombre").val()==""){
            alert("Debe ingresar un nombre para el contacto, intente nuevamente por favor")
            val3 = 0
            $("#cnombre").focus()
        }else{
            val3 += 1
        }
        if($("#capellido").val()==""){
            alert("Debe ingresar un apellido para el contacto, intente nuevamente por favor")
            val3 = 0
            $("#capellido").focus()
        }else{
            val3 += 1
        }
        if($("#ctel").val()=="" || isNaN($("#ctel").val())){
            alert("Debe ingresar un número válido para el contacto, intente nuevamente por favor")
            val3 = 0
            $("#ctel").focus()
        }else{
            val3 += 1
        }
        if($("#cmensaje").val()==""){
            alert("Debe ingresar un mensaje para su consulta, por favor ingrese de nuevo")
            val3 = 0
            $("#cmensaje").focus()
        }else{
            val3 += 1
        }
        if(val3 == 4){
            var conf2 = window.confirm("¿Desea confirmar el envío de su consulta?")
            if(conf2){
                alert("Su consulta fue enviada, en las siguientes 24 hs estaremos contactándolo con la respuesta. Muchas gracias")
                location.reload()
            }
        }
    })
});