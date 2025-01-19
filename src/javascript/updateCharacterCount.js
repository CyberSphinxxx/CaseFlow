function updateCharCount() {
    const input = document.getElementById('input');
    const charCounter = document.getElementById('char-counter');
    charCounter.textContent = `Characters: ${input.value.length}`;
}

updateCharCount();