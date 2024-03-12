const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("invalid", event => {
        input.classList.add("error");
    }, false)
})

document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio));