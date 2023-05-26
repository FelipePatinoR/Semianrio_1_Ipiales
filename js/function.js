
var FACEA = ["Seleccionar","Administracion de Empresas","Comercio Internacional","Mercadeo"]
var FACING = ["Seleccionar","Ingenieria de Sistemas"]
var todosProgramas=[
    [],
    FACEA,
    FACING,
];
function cambia_programa(){
    var vfacultad = document.getElementById('facultad').value

    if (vfacultad != 0){
        mis_programas=todosProgramas[vfacultad]
        num_programas=mis_programas.length
        document.getElementById('programa').length = num_programas
        for(i=0;i<num_programas;i++){ 
            document.getElementById('programa').options[i].value = mis_programas[i]
            document.getElementById('programa').options[i].text = mis_programas[i]
        }
    } else {
        document.programa.length=1
        document.getElementById('programa').options[0].value = "0"
        document.getElementById('programa').options[0].text = "Seleccionar"
    }
    document.getElementById('programa').options[0].selected = true
}
function mostrar(id, id1){
    document.getElementById(id).style.display = "inline"
    document.getElementById(id1).style.display = "inline"
}
function ocultar(id, id1){
    document.getElementById(id).style.display = "none"
    document.getElementById(id1).style.display = "none"
}

function cambiar_color_celda(id, id1){
    document.getElementById(id).style.backgroundColor = "#008f39 "
    document.getElementById(id1).style.backgroundColor = "#008f39 "
}