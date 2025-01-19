function analyzeText() {
    const text = document.getElementById('input').value;
    if (!text) {
        showNotification('No text to analyze. Please enter some text first.', 'error');
        return;
    }

    const wordCount = text.trim().split(/\s+/).length;
    const sentenceCount = text.split(/[.!?]+/).length - 1;
    const paragraphCount = text.split(/\n\s*\n/).length;
    const charCount = text.length;
    const charCountNoSpaces = text.replace(/\s/g, '').length;

    const statistics = document.getElementById('statistics');
    statistics.innerHTML = `
        <h3>Text Statistics:</h3>
        <p>Word count: ${wordCount}</p>
        <p>Sentence count: ${sentenceCount}</p>
        <p>Paragraph count: ${paragraphCount}</p>
        <p>Character count (with spaces): ${charCount}</p>
        <p>Character count (without spaces): ${charCountNoSpaces}</p>
    `;

    showNotification('Text analysis complete!', 'success');
}