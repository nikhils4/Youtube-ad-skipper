 setInterval ( () => {
    if(document.getElementsByClassName('ytp-ad-text ytp-ad-skip-button-text').length === 1){
        document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text")[0].click();
    }     
    if(document.getElementsByClassName('ytp-ad-overlay-close-button').length >= 1){
        document.getElementsByClassName('ytp-ad-overlay-close-button')[0].click();
    }
},1);
