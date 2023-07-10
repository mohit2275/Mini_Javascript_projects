function mohit() {
    document.getElementById('a2').innerHTML = Math.floor(Math.random() * 1000);
}

function vote() {
    let age = document.getElementById('i1').value;
    let eligible = (age < 18) ? "You are NOT ELIGIBLE." : "You are ELIGIBLE.";
    document.getElementById('i2').innerHTML = eligible;
}