function clearText() {
    document.getElementById('input').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('statistics').innerHTML = '';
    updateCharCount();
    showNotification('Text cleared!', 'success');
}