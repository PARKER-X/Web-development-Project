console.log("Hello Calculator!");

let Calculate = document.getElementById('calculate')

function calculator() {
    let math = document.getElementById('math').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let computer = document.getElementById('computer').value;
    let biology = document.getElementById('biology').value;

    let totalgrade = parseFloat(math) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(computer) + parseFloat(biology);
    let percentage = (totalgrade/500) * 100;
    if (percentage>90) {
        document.getElementById('grad').innerHTML = 'A';
    }
    else if (percentage<90 && percentage>70){
        document.getElementById('grad').innerHTML = 'B';
    }
    else if (percentage<70 && percentage>60){
        document.getElementById('grad').innerHTML ='C';
    }
    else if (percentage<60 && percentage>40){
        document.getElementById('grad').innerHTML='D';
    }
    else{
        document.getElementById('grad').innerHTML='E';
    }
    if (totalgrade >300){
        document.getElementById('pass').style.display ="block";
        document.getElementById('pass1').style.display ="block";
    }
    // alert(percentage);
    document.getElementById('marks').innerHTML = totalgrade;
    document.getElementById('per').innerHTML = percentage;
}


