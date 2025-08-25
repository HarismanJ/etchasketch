
let mouseHeld=false;
let hoverMode=false;
let penColor="black";
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

    etchBox.addEventListener("mouseover",(event)=>{
        if((mouseHeld && !hoverMode) || (!mouseHeld && hoverMode)){
            if(event.target.classList.contains("square")){
                event.target.style.backgroundColor=penColor;
            }
        }
    });
}





function createSquare(etchBoxBox){
    etchBoxBox.style.cssText="display:flex; border-style: solid; border-width: 1px; border-color:black; flex:1; background-color:white;";
    etchBoxBox.classList.add("square");
}



const inputSlider=document.querySelector("#inputslider");
inputSlider.addEventListener("input",()=>{
    generateGrid(Number(inputSlider.value)||40);
    const gridText=document.querySelector(".gridTitle");
    gridText.textContent=`Grid Size: ${inputSlider.value}x${inputSlider.value}`;
});

const clearBtn=document.querySelector(".menu>.toggle-buttons>button");
clearBtn.addEventListener("click",()=>{
    generateGrid(inputSlider.value);
});

const toggleBtn=document.querySelector(".switch .round");
toggleBtn.addEventListener("click",()=>{
    hoverMode=!hoverMode;
    if(hoverMode){document.querySelector(".toggle-buttons>h3").textContent="Hover Draw On";}
    else{document.querySelector(".toggle-buttons>h3").textContent="Hover Draw Off";}
    
});

const colorPicker=document.querySelectorAll(".color");
let selected = null;
colorPicker.forEach(element=>{
    element.addEventListener("click",()=>{
        if(selected){selected.style.opacity="1"};
        element.style.opacity="0.2";
        penColor=element.getAttribute("fill");
        selected=element;
    });
});



generateGrid();