
$(document).ready(function(){   
    $(".SegundoPaso").hide()
    $(".Resumen").hide()
});

$(document).ready(function(){
    $("#pasoanterior1").on("click", function(){
        $(".PrimerPaso").show()
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
        
        $("#rfecha").prop("innerText" , $("#fecha").prop("value"))
        $("#rhorario").prop("innerText" , $("#horario").prop("value"))
        $("#rcomensales").prop("innerText" , $("#comensales").prop("value"))
        $("#rlugar").prop("innerText" , $("#lugar").prop("value"))
        if($("#celiaco").is(":checked")){
            $("#rceliaco").prop("innerText" , "Si, " + $("#cantceliacos").prop("value"))
        }
        else{
            $("#rceliaco").prop("innerText" , "No ")
        }
        if($("#alergias").is(":checked")){
            $("#ralergia").prop("innerText" , "Si, " + $("#cualalergia").prop("value"))
        }
        else{
            $("#ralergia").prop("innerText" , "No ")
        }
        if($("#comentarios").val()==""){
            $("#rcomentarios").prop("innerText" , "-")
        }
        else{
            $("#rcomentarios").prop("innerText" , $("#comentarios").prop("value"))
        }
        $(".SegundoPaso").hide()
        $(".Resumen").show() 
    })
});

$(document).ready(function(){
    $("#confirmar").on("click", function(){
        var conf = window.confirm("¿Desea confirmar la solicitud de su reserva?")
        if(conf){
            alert("Su solicitud fue enviada, en las siguientes 24hs recibirá la confirmación de su reserva o las opciones para modificar. Muchas gracias")
            location.reload()
        }
    })
});
