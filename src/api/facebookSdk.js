

export function initFacebookSdk(type) {
    return new Promise(resolve => {
        // wait for facebook sdk to initialize before starting the react app
        window.fbAsyncInit = function () {
            window.FB.init({
                appId      : '1515355465520643',
                xfbml      : true,
                version    : 'v9.0'
            });
            console.log(type)
            window.FB.AppEvents.logPageView();
            window.FB.AppEvents.logEvent(type);
            // auto authenticate with the api if already logged in with facebook
        };
        // load facebook sdk script
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
}
