function boasVindas(){
    alert("Hello!!! My name is Sérgio Campos");
}


/** INICIO */
document.getElementById("inicio").onmouseover = function() {
    mouseOverInicio();
};
document.getElementById("inicio").onmouseout = function() {
    mouseOutInicio();
};

function mouseOverInicio() {
    document.getElementById("inicio").style.color = "#ff6633";
};
function mouseOutInicio() {
    document.getElementById("inicio").style.color = "white";
};

/** SERVIÇOS */
document.getElementById("servicos").onmouseover = function() {
    mouseOverServicos();
};
document.getElementById("servicos").onmouseout = function() {
    mouseOutServicos();
};

function mouseOverServicos() {
    document.getElementById("servicos").style.color = "#ff6633";
};

function mouseOutServicos() {
    document.getElementById("servicos").style.color = "white";
};

/** CONTATO */
document.getElementById("contato").onmouseover = function() {
    mouseOverContato();
};
document.getElementById("contato").onmouseout = function() {
    mouseOutContato();
};

function mouseOverContato() {
    document.getElementById("contato").style.color = "#ff6633";
};
function mouseOutContato() {
    document.getElementById("contato").style.color = "white";
};