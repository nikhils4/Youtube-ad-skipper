
// skipping code
setInterval ( () => {
    if(document.getElementsByClassName('ytp-ad-text ytp-ad-skip-button-text').length === 1){
        document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text")[0].click();
    }     
    if(document.getElementsByClassName('ytp-ad-overlay-close-button').length >= 1){
        document.getElementsByClassName('ytp-ad-overlay-close-button')[0].click();
    }
},1);

// playback slider option
if(document.getElementsByClassName("ytp-right-controls").length >= 1){
    document.getElementsByClassName("ytp-right-controls")[0].style.transform = "translateX(-10%)"
    let input = document.createElement("input")
    input.setAttribute("type", "range");
    input.setAttribute("min", "0");
    input.setAttribute("max", "5");
    input.setAttribute("step", "0.5");
    input.setAttribute("value", "1");
    input.setAttribute("id", "rate");
    input.setAttribute("style", "transform : translateY(-65%)");
    document.getElementsByClassName("ytp-right-controls")[0].appendChild(input)
    let div = document.createElement("div")
    div.setAttribute("id", "ratedisplay");
    div.setAttribute("style", "color : white;transform : translate(75%,-138%); text-align : right; width : 10%; float : right; position : absolute; right : 0");
    document.getElementsByClassName("ytp-right-controls")[0].appendChild(div)
    document.getElementById("ratedisplay").innerHTML = document.getElementById("rate").value;
    document.getElementById("rate").addEventListener("change", () => {
        document.getElementsByTagName("video")[0].playbackRate = document.getElementById("rate").value;
        document.getElementById("ratedisplay").innerHTML = document.getElementById("rate").value;
    })
}



