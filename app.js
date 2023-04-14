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
        $(".PrimerPaso").hide()
        $(".SegundoPaso").show()
        $("#rnombre").prop("innerText" , $("#nombre").prop("value"))
        $("#rapellido").prop("innerText" , $("#apellido").prop("value"))
        $("#remail").prop("innerText" , $("#email").prop("value"))
        $("#rtel").prop("innerText" , $("#tel").prop("value"))
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
        $(".SegundoPaso").hide()
        $(".Resumen").show()
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
        if($("#comentarios").prop("value","2")){
            alert("vacio")
            $("#rcomentarios").prop("innerText" , "-")
        }
        else{
            alert("con texto")
            $("#rcomentarios").prop("innerText" , $("#comentarios").prop("value"))
        }
        
    })
});