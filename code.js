  
function Addition(nombreA, nombreB ) {
    
    return nombreA + nombreB ;
}

function Multiplication(nombreA, nombreB){
    
    return nombreA * nombreB;
}

function Soustraction (nombreA, nombreB){
    return nombreA - nombreB;
}

function Division(nombreA, nombreB) {
    if(nombreB == 0){
        throw new Error ("Impossible de diviser par 0");
    }
    return nombreA / nombreB ;
}

     
let restart;
do {
   restart = false;

    do {
        var choix = Number( prompt(" Que souhaitez vous faire ? \n \n 1- Addition \n 2- Multiplication \n 3- Soustraction \n 4- Division" ));
   
    } while (choix !=1 && choix !=2 && choix != 3 && choix != 4) 

    do {
        var premierNombre = Number(prompt("entrez un nombre"));
        var deuxiemeNombre = Number(prompt("entrez un 2eme nombre"));
    } while ( isNaN(premierNombre) || isNaN(deuxiemeNombre))

 

    try {
        switch (choix) {
            case 1:
                var resultat = Addition(premierNombre, deuxiemeNombre) ;
                break;
            case 2 :
                var resultat = Multiplication(premierNombre, deuxiemeNombre);
                break;
            case 3 :
                var resultat = Soustraction(premierNombre, deuxiemeNombre);
                break;
            case 4 :
                var resultat = Division(premierNombre, deuxiemeNombre);
        
            default:
                throw new Error ("une erreur est survenue");
                
        }
    alert (" Le resultat est " + resultat);

}
catch (error) {
    alert(error);
}
restart = confirm("souhaitez vous recommencer un calcul?");
   
}while(restart)


