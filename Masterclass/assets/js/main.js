const textElem = document.querySelector("textarea");
// console.log(textElem);

const btnElem = document.querySelector("button");

btnElem.addEventListener("click", () => {
    const speechValue = new SpeechSynthesisUtterance(textElem.value)
    window.speechSynthesis.speak(speechValue)
    alert(window.location.href)
})
