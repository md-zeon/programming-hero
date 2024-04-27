function halfBaseHeight(baseId, heightId, areaId, name) {
    const base = getInputData(baseId);
    const height = getInputData(heightId);
    const valid = validNumber(base, height);
    if(!valid) {
        return;
    }
    const area = 0.5 * base * height;
    addElement(areaId, name, area);
}

function widthHeight(widthId, heightId, areaId, name) {
    const width = getInputData(widthId);
    const height = getInputData(heightId);
    const valid = validNumber(width, height);
    if(!valid) {
        return;
    }
    const area = width * height;
    addElement(areaId, name, area);
}

function validNumber(n1, n2) {
    if(isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 0) {
        alert("Please Enter a Positive Number");
        return false;
    }
    return true;
}


function getInputData(inputId) {
    const id = document.getElementById(inputId);
    const text = id.value;
    const number = parseFloat(text);
    id.value = '';
    return number;
}

function addElement(elementId, name, area) {
    const ElementArea = document.getElementById(elementId);
    const calculationArea = document.getElementById("calculation-area");
    let p = ElementArea.querySelector("p");
    const ol = document.getElementById("calculation-list");
    if(p) {
        p.innerHTML = `Area of ${name} is: ${area}cm<sup>2</sup>`;
    } else {
        p = document.createElement("p");
        p.innerHTML = `Area of ${name} is: ${area}cm<sup>2</sup>`;
        ElementArea.appendChild(p);
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${name}</span><span>${area}cm<sup>2</sup></span><span><button class="btn btn-primary text-white text-xs" onclick="convertAreaToM2('${area}')">Convert to m<sup>2</sup></button></span>`;
    ol.appendChild(li);

    const classes = ['text-xl', 'mt-4'];
    for(const cls of classes) {
        p.classList.add(cls);
    }
}


function convertToSquareMeters(areaInCm2) {
    return (areaInCm2 / 10000).toFixed(3); // 1 cm^2 = 0.0001 m^2
}

function convertAreaToM2(areaInCm2) {
    const areaInM2 = convertToSquareMeters(areaInCm2);
    alert(`Converted area is: ${areaInM2} m^2`);
}


function clearHistory() {
    const calculationList = document.getElementById("calculation-list");
    calculationList.innerHTML = "";
  }
  