function downloadText() {
    const text = document.getElementById('output').textContent;
    if (!text) {
        showNotification('No text to download. Please transform some text first.', 'error');
        return;
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'transformed_text.txt';
    a.click();
    showNotification('Text downloaded successfully!', 'success');
}