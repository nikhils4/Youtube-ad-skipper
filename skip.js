function removeAds() {
    const adSelectors = [
        '.ad-container',
        '.ad-div',
        'ytd-display-ad-renderer',
        'ytd-promoted-sparkles-text-search-renderer',
        'ytd-companion-slot-renderer',
        '.ytp-ad-module',
        '.ytp-ad-player-overlay'
    ];

    adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => ad.remove());
    });

    const adBanners = document.querySelectorAll('.ytp-ad-image-overlay');
    adBanners.forEach(ad => ad.style.display = 'none');

    const skipButtons = document.querySelectorAll('.ytp-ad-skip-button, .ytp-ad-skip-button-text');
    skipButtons.forEach(button => button.click());
}

removeAds();

const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });



