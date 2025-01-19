function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `show ${type}`;
    setTimeout(() => {
        notification.className = notification.className.replace('show', '');
    }, 3000);
}