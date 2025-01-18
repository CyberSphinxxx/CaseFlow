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
    }

    document.getElementById('output').textContent = result;
}