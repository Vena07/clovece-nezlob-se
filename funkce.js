function hod() {
    let nahodnecislo = Math.floor(Math.random() * 6) + 1;
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
        pole9.innerHTML = "■";
        pole6.innerHTML = "■";
        pole7.innerHTML = "■";
    }
}