const textarea = document.getElementById("text");
const textareaElement = $("#text");
const changerElement = $("#changer");

const delay = 50;

let isChangerOn = true;
let isShiftPressed = false;

const main = () => {
    initEvents();
}

const initEvents = () => {
    textareaElement.keydown((event) => {
        if (!isChangerOn) {
            return;
        }

        isShiftPressed = event.shiftKey;

        switch (event.keyCode) {
            case 219: // key '{'
                addRingedA();
                break;
            case 221: // key '}'
                addUmlautU();
                break;
            case 186: // key ':'
                addUmlautO();
                break;
            case 222: // key '"'
                addUmlautA();
                break;
            case 191: // key '?'
                addEszett();
                break;
        }
    });

    changerElement.click((event) => {
        isChangerOn = event.target.checked;
    });
}

const addRingedA = () => {
    setTimeout(() => {
        if (isShiftPressed)
            textarea.value = getTextBehind() + "Å";
        else
            textarea.value = getTextBehind() + "å";
    }, delay);
}

const addUmlautU = () => {
    setTimeout(() => {
        if (isShiftPressed)
            textarea.value = getTextBehind() + "Ü";
        else
            textarea.value = getTextBehind() + "ü";
    }, delay);
}

const addUmlautO = () => {
    setTimeout(() => {
        if (isShiftPressed)
            textarea.value = getTextBehind() + "Ö";
        else
            textarea.value = getTextBehind() + "ö";
    }, delay);
}

const addUmlautA = () => {
    setTimeout(() => {
        if (isShiftPressed)
            textarea.value = getTextBehind() + "Ä";
        else
            textarea.value = getTextBehind() + "ä";
    }, delay);
}

const addEszett = () => {
    setTimeout(() => {
        if (isShiftPressed)
            textarea.value = getTextBehind() + "ẞ";
        else
            textarea.value = getTextBehind() + "ß";
    }, delay);
}

const getTextBehind = () => {
    return textarea.value.slice(0, textarea.value.length - 1);
}

main();
