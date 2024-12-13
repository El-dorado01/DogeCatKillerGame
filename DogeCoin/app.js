// ==============Background Color================ //
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
var root = document.querySelector(":root");

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBg = (e) => {
    // e.preventDefault();
    console.log(e.classList);
    var lightMode =  e.querySelector(".light");
    var darkMode =  e.querySelector(".dark");
    if(lightMode.style.display == "none"){
        darkColorLightness = "17%";
        whiteColorLightness = "100%";
        lightColorLightness = "95%";

        darkMode.style.display = "none"
        lightMode.style.display = "block"
    }else{
        darkMode.style.display = "block"
        lightMode.style.display = "none"

        darkColorLightness = "95%";
        whiteColorLightness = "20%";
        lightColorLightness = "15%";
    }
    

    let background = "light";
    

    // let background = "dim";
    

    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

// bg1.addEventListener("click", async (e) => {
//     e.preventDefault();

//     let background = "light";

//     darkColorLightness = "17%";
//     whiteColorLightness = "100%";
//     lightColorLightness = "95%";

//     bg1.classList.add("active");

//     bg2.classList.remove("active");
//     bg3.classList.remove("active");

//     changeBg();

//     const response = await fetch("/dashboard/private/background",
//         {
//             method: "POST",
//             body: JSON.stringify({
//                 background
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         });
// });

// bg2.addEventListener("click", async (e) => {
//     e.preventDefault();

//     let background = "dim";

//     darkColorLightness = "95%";
//     whiteColorLightness = "20%";
//     lightColorLightness = "15%";

//     bg2.classList.add("active");

//     bg1.classList.remove("active");
//     bg3.classList.remove("active");

//     changeBg();

//     const response = await fetch("/dashboard/private/background",
//         {
//             method: "POST",
//             body: JSON.stringify({
//                 background
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         });
// });

// bg3.addEventListener("click", async (e) => {
//     e.preventDefault();

//     let background = "dark";

//     darkColorLightness = "95%";
//     whiteColorLightness = "10%";
//     lightColorLightness = "0%";

//     bg3.classList.add("active");

//     bg1.classList.remove("active");
//     bg2.classList.remove("active");

//     changeBg();

//     const response = await fetch("/dashboard/private/background",
//         {
//             method: "POST",
//             body: JSON.stringify({
//                 background
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         });
// });

async function copyTextToClipBoard(params) {
    try {
        await navigator.clipboard.writeText(params);
        var oldText = document.getElementById("ca-text").parentNode.innerHTML
        document.getElementById("ca-text").parentNode.textContent = `Copied`

        setTimeout(() => {
            document.getElementsByClassName("ca-button")[0].innerHTML = oldText
        }, 1000)
    } catch (error) {
        console.log("Failed to copy text: ", error);
        
    }
}

function displayFullScreen() {
    var iframe = document.getElementById("game-iframe");
    iframe.requestFullscreen()
}

document.addEventListener("fullscreenchange", (event) => {
    if(!document.fullscreenElement){
        iframe.style.width = "100%"
        iframe.style.height = "100%"
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape") {
        if(document.fullscreenElement){
            document.exitFullscreen()
        }
    }
})