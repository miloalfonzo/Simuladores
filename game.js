function goToGame1(){
    document.getElementById("lamponne").style.visibility = "visible";
    document.getElementById("santoss").style.display = "none";
    document.getElementById("ravenna").style.display = "none";
    document.getElementById("medina").style.display = "none";
    document.getElementById("pj").style.display = "none";
    document.getElementById("title").innerHTML = "<h2> Comencemos con el operativo </h2>";
}

function goToGame2(){
    document.getElementById("santoss").style.visibility = "visible";
    document.getElementById("lamponne").style.display = "none";
    document.getElementById("ravenna").style.display = "none";
    document.getElementById("medina").style.display = "none";
    document.getElementById("pj").style.display = "none";
    document.getElementById("title").innerHTML = "<h2> Comencemos con el operativo </h2>";
}

function goToGame3(){
    document.getElementById("ravenna").style.visibility = "visible";
    document.getElementById("lamponne").style.display = "none";
    document.getElementById("santoss").style.display = "none";
    document.getElementById("medina").style.display = "none";
    document.getElementById("pj").style.display = "none";
    document.getElementById("title").innerHTML = "<h2> Comencemos con el operativo </h2>";
}

function goToGame4(){
    document.getElementById("medina").style.visibility = "visible";
    document.getElementById("lamponne").style.display = "none";
    document.getElementById("santoss").style.display = "none";
    document.getElementById("ravenna").style.display = "none";
    document.getElementById("pj").style.display = "none";
    document.getElementById("title").innerHTML = "<h2> Comencemos con el operativo </h2>";
}

let click = 0;

function option(user){
    click++

    let textResult = ["Archivaremos su caso y seguramente en un futuro lo vamos a ayudar. Pero de algo puede estar seguro: su problema, para nosotros, no implica ningún tipo de prioridad.", "El caso fue completado con exito, pero una cosa más, usted quedaría comprometido con nosotros para algún otro operativo.", "El operativo se salió de control, y nuestros colaboradores quedaron detenidos por el FBI, resolveremos su caso tan pronto resolvamos este inconveniente."];
    
    let namePj = [ "Tendremos que tomar medidas drasticas", "Llamemos al primo de Satanas", "El plan marcha bien. Mientras tanto, preguntenle a Vanegas si tiene noticias del caso Milazzo ", "Al termino del episodio oral señores", "Llamó el contador y dijo que nos ibamos de presupuesto"];

    let nameEnemy = ["", "", "", "", ""];

    let move = [

            [0, 1, 2, 2, 1],
            [2, 0, 1, 1, 2],
            [1, 2, 0, 2, 1],
            [1, 2, 1, 0, 2],
            [2, 1, 2, 1, 0]

            ];

    let bot = Math.floor((Math.random() * 5));

    result = move[bot][user];

    let text = document.getElementById("result");

    text.innerHTML = `<h3> ${namePj[user]} </h3>`;
                    
    if (click === 3){
        text.innerHTML = `
                        <h3> ${textResult[result]} </h3>`;
    } 

    if (click >= 4){
        location.reload();
        return false;
    }

}