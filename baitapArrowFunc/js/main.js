const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

changeColor = (color)=>{
    const houseEle = document.getElementById("house");
    houseEle.className = "house " + color;

}

const LoadColor = () => {
    const colorListHtml =  colorList.reduce((result, color , index) =>{
        if(index == 0){
            return result += `
                <button class="color-button ${color} active" onclick="changeColor('${color}')"></button> 
            `
        }
        else {
            return result += `
                <button class="color-button ${color}"  onclick="changeColor('${color}')"></button> 
            `
        }
    }, "");
   
    document.getElementById("colorContainer").innerHTML = colorListHtml;
};
LoadColor();
