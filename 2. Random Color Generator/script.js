let changeColor = () => {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let codeForColor = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = codeForColor;
    document.getElementById('color-code').innerText = codeForColor;

    navigator.clipboard.writeText(codeForColor)

}

document.getElementById('btn').addEventListener(
    "click",
    changeColor
)

changeColor()