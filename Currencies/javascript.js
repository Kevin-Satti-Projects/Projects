const base = document.querySelector(".base");
const search = document.querySelector(".search");
const result = document.querySelector(".result");

let values;

async function selectBase(e) {
    values = await fetch(`http://api.openrates.io/latest?base=${e.target.value}`, {mode: "cors"})
        .then(response => response.json())
        .then(data => (data["rates"]));
        result.innerHTML = `1${e.target.value}   =   ${Math.round(values[search.value] * 100) / 100}${search.value}`;
        if(values[search.value] === undefined){
            result.innerHTML = "error";
        }
}

function update(e) {
    result.innerHTML = `1${base.value}   =   ${(Math.round(values[e.target.value] * 100) / 100)}${e.target.value}`;
    if(values[e.target.value] === undefined){
        result.innerHTML = "error";
    }
}

search.addEventListener("change", update);
base.addEventListener("change", selectBase);