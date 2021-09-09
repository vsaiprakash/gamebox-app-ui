import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GamesDataService {

    gamesData: any;
    temp: any;

    constructor(private http: HttpClient) {
        this.temp = document.createElement( 'html' );
    }

    getGames(){
        console.log("getGames...");
        // let httpOptions = {
        //     headers: new HttpHeaders({
        //         'Accept': 'text/html',
        //         'Content-Type': 'application/json'
        //     })
        //     // ,responseType: 'text'
        // };

        // this.http.get("https://jsemu2.github.io/gba/").subscribe((res)=>{
            // this.temp.innerHTML = res;
            // let alist = this.temp.getElementsByTagName( 'a' );
            // console.log(alist);
        // })
    }



}