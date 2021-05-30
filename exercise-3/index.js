let index, result=0, follow;

do{
    index=parseInt(prompt("Ingrese un numero: "));
    
    while(Number.isNaN(index)==true){
        alert("Por favor, no ingrese cadenas de texto.");
        index=parseInt(prompt("Ingrese un numero: "));
    }

    result=result+index;

    follow=confirm("Desea continuar?")
}
while(follow==true);

document.write(result);