function onOff(elementId, styleClass) {
    const element = document.getElementById('text-box');
    const btn = document.getElementById(elementId);
    let btnCondition = btn.value;
    if(btnCondition == "off") {
        btn.value = "on";
        element.classList.add(styleClass);
        btn.classList.add('glassy-background');
    } else if(btnCondition == "on") {
        btn.value = "off";
        element.classList.remove(styleClass);
        btn.classList.remove('glassy-background');
    }

}


function clickFunction(elementId, styleClass) {
    document.getElementById(elementId).addEventListener('click', function() {
        onOff(elementId, styleClass);
    });
}


function setAlignmentClass(element, alignmentClass) {
    // Remove all alignment classes using for...of
    const alignmentClasses = ['text-left', 'text-center', 'text-right', 'text-justify'];
    for (const cls of alignmentClasses) {
        element.classList.remove(cls);
    }

    // Add the specified alignment class
    element.classList.add(alignmentClass);
}

function clickFunctionForAlignment(elementId, alignmentClass) {
    document.getElementById(elementId).addEventListener('click', function () {
        const textBox = document.getElementById('text-box');
        setAlignmentClass(textBox, alignmentClass);

        // Update the values of the alignment buttons
        const buttons = ['align-left-btn', 'align-center-btn', 'align-right-btn', 'align-justify-btn'];
        for (const btnId of buttons) {
            const btn = document.getElementById(btnId);
            btn.value = (btnId === elementId) ? 'on' : 'off';
        }
    });
}
