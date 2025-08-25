
let mouseHeld=false;
document.querySelector("body").addEventListener("mousedown",()=>{
        mouseHeld=true;
});
document.querySelector("body").addEventListener("mouseup",()=>{
        mouseHeld=false;
});

function generateGrid(gridSize=40){ //default to 40x40
    const etchBox=document.querySelector(".etchasketch");
    etchBox.innerHTML="";
    for(let i=0; i<gridSize; i++){
        const newFlexBox=document.createElement("div");
        newFlexBox.style.cssText="display:flex; border-style: solid; border-width: 1px; border-color:black; width:100%; flex:1; background-color:white;";
        etchBox.appendChild(newFlexBox);
        for(let j=0; j<gridSize; j++){
            const etchBoxBox=document.createElement("div");
            createSquare(etchBoxBox);
            newFlexBox.appendChild(etchBoxBox);
        }
    }
}
function createSquare(etchBoxBox){
    etchBoxBox.style.cssText="display:flex; border-style: solid; border-width: 1px; border-color:black; flex:1; background-color:white;"
    etchBoxBox.addEventListener("mouseover",()=>{
        if(mouseHeld){etchBoxBox.style.backgroundColor="black";}
    });
}

const inputSlider=document.querySelector("#inputslider");
inputSlider.addEventListener("input",()=>{
    generateGrid(Number(inputSlider.value)||40);
    const gridText=document.querySelector(".gridTitle");
    gridText.textContent=`Grid Size: ${inputSlider.value}x${inputSlider.value}`;
});

const clearBtn=document.querySelector(".menu>.toggle-buttons");
clearBtn.addEventListener("click",()=>{
    generateGrid(inputSlider.value);
});




generateGrid();