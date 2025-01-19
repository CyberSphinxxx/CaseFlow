function copyToClipboard() {
    const text = document.getElementById('output').textContent;
    if (!text) {
        showNotification('No text to copy. Please transform some text first.', 'error');
        return;
    }
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Text copied to clipboard!', 'success');
    });
}