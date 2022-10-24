import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export abstract class date {

    public static now() {
        return new Date().toLocaleDateString('fa-IR-u-nu-latn');
    }
    
    public static time(){
        return new Date().toLocaleTimeString();
    }
}