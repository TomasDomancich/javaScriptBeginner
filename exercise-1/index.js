const nota = prompt("Igrese la nota del alumno (del 0 al 10)");

if(parseInt(nota)>=0 && parseInt(nota)<=3){
    document.write("Muy deficiente");
}
else if (parseInt(nota)<=5){
    document.write("Insuficiente")
}
else if (parseInt(nota)<=6){
    document.write("Sufuciente")
}
else if (parseInt(nota)<=7){
    document.write("Bien")
}
else if (parseInt(nota)<=9){
    document.write("Notable")
}
else if (parseInt(nota)<=10){
    document.write("Sobresaliente")
}
else{
    document.write("La nota ingresada debe ser un numero entre 0 y 10.");
}