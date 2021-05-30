let resto, dni, follow;
const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

do{
    dni=parseInt(prompt("Ingrese su dni: "));
    
    while(Number.isNaN(dni)==true || dni<0 || dni>99999999){
        if(Number.isNaN(dni)==true){
            alert("Por favor, no ingrese cadenas de texto.");
            dni=parseInt(prompt("Ingrese su dni: "));
        }
        if(dni<0 || dni>99999999){
            alert("Por favor, ingrese un numero entre 0 y 99.999.999");
            dni=parseInt(prompt("Ingrese su dni: "));
        }
    }

    resto=dni%23;

    for(let i=0; i<letras.length; i++){
        if(resto==i){
            document.write(dni+"-"+letras[i]+"<br>");
        }
    }

    follow=confirm("Desea continuar?")
}
while(follow==true);