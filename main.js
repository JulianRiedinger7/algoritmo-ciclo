let esport = prompt("Ingresa tus esports favoritos o 'esc' para salir...").toLowerCase();

while(esport != "esc"){
    switch(esport){
        case "valorant":
            nombre.innerHTML += esport.toUpperCase()+"<br>";
            descripcion.innerHTML += "Valorant es un juego de disparos en primera "+
            "persona en el que dos equipos de cinco jugadores se enfrentan "+
            "entre ellos.El objetivo de las partidas es colocar un dispositivo "+
            "llamado Spike en una zona concreta del mapa."+"<br><br>";
            break;
        case "league of legends":
        case "lol":
            nombre.innerHTML += esport.toUpperCase()+"<br>";
            descripcion.innerHTML += "En League of Legends el objetivo de los jugadores es proteger la base propia"+
            "mientras en el mapa se localizan y destruyen las bases de los enemigos."+
            "Además, dependiendo del nivel tendrán que cumplir ciertos objetivos para"+
            "poder causar daños al contrario."+"<br><br>";
            break;
        case "counter-strike":
        case "csgo":
        case "cs go":
        case "cs:go":
            nombre.innerHTML += esport.toUpperCase()+"<br>";
            descripcion.innerHTML += "El juego CS:GO consiste en dos equipos, los Terroristas"+
            "y los Antiterroristas (T y CT, respectivamente), los cuales se enfrentan entre"+
            "ellos en diferentes modos de juego. El modo más común es en el cual el bando"+
            "Terrorista tienen que plantar y defender una bomba mientras los Antiterroristas"+
            "defender las zonas de plante de la bomba y su posterior desactivación"+"<br><br>";
            break;
        default:
            nombre.innerHTML += "No conozco ese juego"+"<br>";
            break;
    }
    esport = prompt("Ingresa tus esports favoritos o 'esc' para salir...").toLowerCase();
}