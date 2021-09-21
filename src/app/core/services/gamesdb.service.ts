
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { GameModel } from '../models/game-model';

//based on https://www.techiediaries.com/angular-10-firebase-database-crud/
@Injectable({ providedIn: 'root' })
export class GamesDBService {

    constructor(private firestore: AngularFirestore) {}

    getGames() {
        return this.firestore.collection('games').snapshotChanges()
        .pipe(
            map(res => {
                let dataList = [];
                res.forEach(res => {
                    dataList.push(res.payload.doc.data())
                })
                return dataList;
            })
        );
    }

    getGame(game_title: string) {
        return this.getGames().pipe(
            map(gamesData => {
                let foundGameData = null;
                gamesData.every(gameData => {
                    if(gameData.game_title==game_title){
                        foundGameData = gameData;
                        console.log("Game from DB "+JSON.stringify(gameData));
                        return false
                    }
                    return true;
                  });

                  return foundGameData;
            })
        );
    }

    createGame(game: GameModel){
        return this.firestore.collection('games').add(game);
    }

    updateGame(game: GameModel){
        //id will be the email
        this.firestore.doc('games/' + game.game_title).update(game);
    }

    deleteGame(game_title: string){
        this.firestore.doc('games/' + game_title).delete();
    }
}