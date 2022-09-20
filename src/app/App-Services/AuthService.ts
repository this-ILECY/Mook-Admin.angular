import { Injectable } from "@angular/core";
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    //9 removed
    private readonly theStoryBegins = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ"
    // "a" removed
    private readonly middleOfNowhere = ".eyJ0aGVTdG9yeU9mRW50ZXIiOiJCb29rQWRt"
    //9 removed
    private readonly Ending = "W4iLCJ0aGVTdG9yeU5hbWUiOiJNaXlhbmVoLkJvb2tAMTQwMSJ"


    public loginCheck(userName: string, password: string):boolean {
        let freshStory = this.createToken(userName, password)
        let result = this.tokenCompare(freshStory)
        return result;
    }

    private tokenCompare(freshToken: string): boolean {

        let theOldTale = this.theStoryBegins + "9" + this.middleOfNowhere + "a" + this.Ending + "9"
        theOldTale = this.mySecret(theOldTale)

        if (freshToken === theOldTale) {
            return true;
        } else {
            return false
        }
    }

    private createToken(vals1: string, vals2: string) {
        var header = {
            "alg": "HS256",
            "typ": "JWT"
        };

        var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
        var encodedHeader = this.base64url(stringifiedHeader);

        var data = {
            "theStoryOfEnter": vals1,
            "theStoryName": vals2
        };

        var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
        var encodedData = this.base64url(stringifiedData);

        var token = encodedHeader + "." + encodedData;
        let completedToken = this.mySecret(token)

        return completedToken;
    }

    private base64url(source) {
        // Encode in classical base64
        let encodedSource = CryptoJS.enc.Base64.stringify(source);

        // Remove padding equal characters
        encodedSource = encodedSource.replace(/=+$/, '');

        // Replace characters according to base64url specifications
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');

        return encodedSource;
    }

    private mySecret(token) {
        const secret = "kd#31!@hgkjvh )%fk90g(h78jvksd^%5 4$kjh$#tg@%654g fh6$lk56dfjbs6vkjb434fds";

        var signature = CryptoJS.HmacSHA256(token, secret);
        signature = this.base64url(signature);

        var signedToken = token + "." + signature;

        return signedToken
    }



}