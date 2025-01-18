function copyToClipboard(){

    const text = document.getElementById('output').textContent;
    const blob = new Blob([text], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'transformed_text.txt';
    a.click();
}