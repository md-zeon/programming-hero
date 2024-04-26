clickFunction('bold-btn', 'font-bold');
clickFunction('italic-btn', 'italic');
clickFunction('underline-btn', 'underline');

// clickFunction('align-left-btn', 'text-left');
// clickFunction('align-center-btn', 'text-center');
// clickFunction('align-right-btn', 'text-right');
// clickFunction('align-justify-btn', 'text-justify');

clickFunctionForAlignment('align-left-btn', 'text-left');
clickFunctionForAlignment('align-center-btn', 'text-center');
clickFunctionForAlignment('align-right-btn', 'text-right');
clickFunctionForAlignment('align-justify-btn', 'text-justify');


document.getElementById('font-size').addEventListener('input', function() {
    const fontSizeString = document.getElementById('font-size').value;
    let fontSize = parseInt(fontSizeString);
    const textBox = document.getElementById('text-box');
    // Set a default font size if invalid
    if (isNaN(fontSize) || fontSize < 10 || fontSize > 80) {
        textBox.style.fontSize = '16px'; // Default font size
    } else {
        textBox.style.fontSize = `${fontSize}px`;
    }

});

clickFunction('text-btn', 'uppercase');


const colorPicker = document.getElementById('color-picker');

colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    document.getElementById('text-box').style.color = selectedColor;
});
