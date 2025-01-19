function transform(type) {
    const input = document.getElementById('input').value;
    let result = '';

    switch (type) {
        case 'sentence':
            result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
            break;
        case 'lower':
            result = input.toLowerCase();
            break;
        case 'upper':
            result = input.toUpperCase();
            break;
        case 'capitalized':
            result = input.replace(/\b\w/g, c => c.toUpperCase());
            break;
        case 'alternating':
            result = input.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
            break;
        case 'title':
            result = input.replace(/\b\w/g, c => c.toUpperCase());
            break;
        case 'inverse':
            result = input.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
            break;
        case 'reverse':
            result = input.split('').reverse().join('');
            break;
        case 'removeSpaces':
            result = input.replace(/\s/g, '');
            break;
        case 'removeNewlines':
            result = input.replace(/\n/g, ' ');
            break;
        case 'sortLines':
            result = input.split('\n').sort().join('\n');
            break;
        case 'shuffleWords':
            result = input.split(' ').sort(() => Math.random() - 0.5).join(' ');
            break;
        case 'rot13':
            result = input.replace(/[a-zA-Z]/g, c => String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26));
            break;
    }

    document.getElementById('output').textContent = result;
    showNotification('Text transformed successfully!', 'success');
}

updateCharCount();