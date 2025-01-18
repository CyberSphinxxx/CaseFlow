function copyToClipboard(){

    const text = document.getElementById('output').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text Copied to Clipboard');
    });
}