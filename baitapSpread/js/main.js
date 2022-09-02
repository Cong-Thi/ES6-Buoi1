const heading = dom(".heading");
const hover = (text) => {
    return [...text].map((text) => `<span>${text}</span>`).join("")
}
// function hover(text){
//     return [...text].map((text) => `<span>${text}</span>`).join("")
// }

heading.innerHTML = hover(heading.innerText);

  function dom(selector){
    return document.querySelector(selector)
}