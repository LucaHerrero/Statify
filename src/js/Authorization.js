//import {app} from '/main.js';

class Authorization {
    constructor(app, width) {
        this.app = app;
        this.width = width;
    }

    login = () => {
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const clientID = '9641a6396aff4a858438393e8475b816';
        const {host, protocol, pathname} = window.location;
        const redirectUri = `${protocol}//${host}${pathname}`;
        const scope = [
            'playlist-read-private',
            'playlist-read-collaborative',
            'playlist-modify-public',
            'playlist-modify-private',
            'user-library-read',
            'user-library-modify',
            'user-follow-read',
            'user-follow-modify',
            'user-top-read'
        ]
            .toString()
            .replace(',', '%20');

        const responseType = 'token';

        window.location = `${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
    }

    parseUrlHash = () => {
        let hashUrlString = window.location.hash.substr(1);
        let hashUrlArray = hashUrlString.split('&');

        const tokenMap = {};
        hashUrlArray.forEach(element => {
            let hashElementArray = element.split('=');

            let key = hashElementArray[0];
            let value = hashElementArray[1];

            tokenMap[key] = value;
        });

        let expire_inString = tokenMap.expires_in;
        if (expire_inString != undefined && !isNaN(expire_inString)) {
            let expireInInt = parseInt(expire_inString);
            let expireOnDate = new Date();

            expireOnDate.setSeconds(expireInInt);

            tokenMap.expireOnDate = expireOnDate.toJSON();
        } else {
            return null;
        }

        return tokenMap
    }

    isTokenValid = (tokenMap) => {
        try {
            let savedTokenDateString = tokenMap.expireOnDate;
            let tokenValidUntil = Date.parse(savedTokenDateString);

            let dateNow = new Date();

            if (dateNow.getTime() < tokenValidUntil) {
                //Token valid
                return true;
            } else {
                return false;
            }
        } catch {
            return false;
        }
    }

}

export default Authorization