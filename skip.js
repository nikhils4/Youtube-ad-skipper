 setInterval ( function() {
    if(document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text").length === 1){
        document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text")[0].click();
    }
    else {
        console.log('');
    }
},750);