let text, follow, chainText = [], i=0;

do{
    text=prompt("Ingrese una cadena de texto: ");
    chainText[i]=text;
    i++;

    follow=confirm("Desea continuar?");
}
while(follow==true);

for(i=0; i<chainText.length; i++){
    document.write(chainText[i] + " - ");
}