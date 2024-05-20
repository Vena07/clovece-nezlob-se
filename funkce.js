const trasy = [
    "nevimjaktnehlepojmenovtatakporstepisutohle", "trasa1", "trasa2", "trasa3", "trasa4", 
    "trasa5", "trasa6", "trasa7", "trasa8", "trasa9", "trasa10", "trasa11", "trasa12", 
    "trasa13", "trasa14", "trasa15", "trasa16", "trasa17", "trasa18", "trasa19", "trasa20", 
    "trasa21", "trasa22", "trasa23", "trasa24", "trasa25", "trasa26", "trasa27", "trasa28", 
    "trasa29", "trasa30", "trasa31", "trasa32", "trasa33", "trasa34", "trasa35", "trasa36", 
    "trasa37", "trasa38", "trasa39", "trasa40"
];
let nahodnecislo = 0;
let rada = "☀️";
let posun = 0;
let rada1 = 1;
let postup = 1;
let vpoli1 = 0;
let vpoli2 = 0;
let vpoli3 = 0;
let vpoli4 = 0;
let vpoliA = [];
let vpoliB = [];
let vpoliC = [];
let vpoliD = [];

function rada2() {
    let zmena = document.getElementById("aktualita");
    if (rada1 === 1) {
        rada = "☀️";
        rada1 = 2;
    } else if (rada1 === 2) {
        rada = "💧";
        rada1 = 3;
    } else if (rada1 === 3) {
        rada = "❤️";
        rada1 = 4;
    } else if (rada1 === 4) {
        rada = "🍀";
        rada1 = 1;
    }
    zmena.innerHTML = rada;
}
rada2();
function kostka() {
    let scitani = 1;
    for (let index = 0; index < 15; index++) {
        setTimeout(() => {
            nahodnecislo = Math.floor(Math.random() * 6) + 1;
            const pole1 = document.getElementById("pole1");
            const pole2 = document.getElementById("pole2");
            const pole3 = document.getElementById("pole3");
            const pole4 = document.getElementById("pole4");
            const pole5 = document.getElementById("pole5");
            const pole6 = document.getElementById("pole6");
            const pole7 = document.getElementById("pole7");
            const pole8 = document.getElementById("pole8");
            const pole9 = document.getElementById("pole9");

            pole1.innerHTML = " ";
            pole2.innerHTML = " ";
            pole3.innerHTML = " ";
            pole4.innerHTML = " ";
            pole5.innerHTML = " ";
            pole6.innerHTML = " ";
            pole7.innerHTML = " ";
            pole8.innerHTML = " ";
            pole9.innerHTML = " ";

            if (nahodnecislo === 1) {
                pole5.innerHTML = "■";
            } else if (nahodnecislo === 2) {
                pole3.innerHTML = "■";
                pole7.innerHTML = "■";
            } else if (nahodnecislo === 3) {
                pole3.innerHTML = "■";
                pole5.innerHTML = "■";
                pole7.innerHTML = "■";
            } else if (nahodnecislo === 4) {
                pole1.innerHTML = "■";
                pole3.innerHTML = "■";
                pole7.innerHTML = "■";
                pole9.innerHTML = "■";
            } else if (nahodnecislo === 5) {
                pole1.innerHTML = "■";
                pole3.innerHTML = "■";
                pole5.innerHTML = "■";
                pole7.innerHTML = "■";
                pole9.innerHTML = "■";
            } else if (nahodnecislo === 6) {
                pole1.innerHTML = "■";
                pole3.innerHTML = "■";
                pole4.innerHTML = "■";
                pole6.innerHTML = "■";
                pole7.innerHTML = "■";
                pole9.innerHTML = "■";
            }

            if (index === 14) {
                if (nahodnecislo !== 6 && scitani === 1) {
                    postup = 2;
                    posun += nahodnecislo;
                    if (rada === "☀️" && vpoli1 === 0 || rada === "💧" && vpoli2 === 0 || rada === "❤️" && vpoli3 === 0 || rada === "🍀" && vpoli4 === 0) {
                        rada2();
                        postup = 1;
                        posun = 0;
                    }
                } else {
                    posun += nahodnecislo;
                    scitani = 0;
                    if (rada === "☀️" && vpoli1 === 0 || rada === "💧" && vpoli2 === 0 || rada === "❤️" && vpoli3 === 0 || rada === "🍀" && vpoli4 === 0) {
                        postup = 2;
                    }
                }
            }
        }, index * 100);
    }
}

function hod() {
    if (postup === 1) {
        kostka();
    }
}

function nasadit(pozice) {
    if (nahodnecislo === 6) {
        let vybrano = document.getElementById(pozice);
        if (rada === "☀️" && vybrano.innerHTML === "☀️") {
            let nasazeninapole = document.getElementById(trasy[33]);
            nasazeninapole.innerHTML = "☀️";
            postup = 1;
            posun = 0;
            vpoli1++;
            vybrano.innerHTML = " ";
            vpoliA.push(pozice);
        } else if (rada === "💧" && vybrano.innerHTML === "💧") {
            let nasazeninapole = document.getElementById(trasy[3]);
            nasazeninapole.innerHTML = "💧";
            postup = 1;
            posun = 0;
            vpoli2++;
            vybrano.innerHTML = " ";
            vpoliB.push(pozice);
        } else if (rada === "❤️" && vybrano.innerHTML === "❤️") {
            let nasazeninapole = document.getElementById(trasy[13]);
            nasazeninapole.innerHTML = "❤️";
            postup = 1;
            posun = 0;
            vpoli3++;
            vybrano.innerHTML = " ";
            vpoliD.push(pozice);
        } else if (rada === "🍀" && vybrano.innerHTML === "🍀") {
            let nasazeninapole = document.getElementById(trasy[23]);
            nasazeninapole.innerHTML = "🍀";
            postup = 1;
            posun = 0;
            vpoli4++;
            vybrano.innerHTML = " ";
            vpoliC.push(pozice);
        }
    }
}

function pohyb(x) {
    if (postup === 2) {
        let nachazi = document.getElementById(trasy[x]);
        if (nachazi.innerHTML === rada) {
            let pokrok = document.getElementById(trasy[x]);
            pokrok.innerHTML = " ";
            for (let index = 0; index < posun; index++) {
                if (x != 40) {x++;} 
                else {x = 1;}
            }
            let kontrola = document.getElementById(trasy[x]);
            if (kontrola.innerHTML === "☀️") {
                vpoliA--;
                let vyhozen = vpoliA.pop(0);
                let vraceni = document.getElementById(vyhozen);
                vraceni.innerHTML = "☀️";
            } else if (kontrola.innerHTML === "💧") {
                vpoliB--;
                let vyhozen = vpoliB.pop(0);
                let vraceni = document.getElementById(vyhozen);
                vraceni.innerHTML = "💧";
            } else if (kontrola.innerHTML === "❤️") {
                vpoliD--;
                let vyhozen = vpoliD.pop(0);
                let vraceni = document.getElementById(vyhozen);
                vraceni.innerHTML = "❤️";
            } else if (kontrola.innerHTML === "🍀") {
                vpoliC--;
                let vyhozen = vpoliC.pop(0);
                let vraceni = document.getElementById(vyhozen);
                vraceni.innerHTML = "🍀";
            }
            pokrok = document.getElementById(trasy[x]);
            pokrok.innerHTML = rada;
            postup = 1;
            posun = 0;
            rada2();
        }
    }
}
