const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const clearBtn = document.getElementById('clear-btn');
const textInput = document.getElementById('text-input');
const resultText = document.getElementById('result-text');
const downloadBtn = document.getElementById('download-btn');

const encryptText = (text, shift) => {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + shift) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + shift) % 26) + 97;
        } else {
            charCode = text.charCodeAt(i);
        }
        encryptedText += String.fromCharCode(charCode);
    }
    return encryptedText;
};

const decryptText = (text, shift) => {
    return encryptText(text, -shift);
};

encryptBtn.addEventListener('click', () => {
    const text = textInput.value;
    const shift = 3; // default shift value
    const encryptedText = encryptText(text, shift);
    resultText.textContent = `Listo, texto encriptado: ${encryptedText}`;
    downloadBtn.style.display = 'block';
});

decryptBtn.addEventListener('click', () => {
    const text = textInput.value;
    const shift = 3; // default shift value
    const decryptedText = decryptText(text, shift);
    resultText.textContent = `Listo, texto desencriptado: ${decryptedText}`;
    downloadBtn.style.display = 'block';
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    resultText.textContent = '';
    downloadBtn.style.display = 'none';
});

downloadBtn.addEventListener('click', () => {
    const text = resultText.textContent.slice(16);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    downloadBtn.href = url;
});