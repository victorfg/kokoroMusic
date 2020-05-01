import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cancion } from '../canciones/cancion';

@Injectable({
    providedIn: 'root'
})
export class GetDataSongsService {

    constructor(private firestore: AngularFirestore) { }

    getSongs() {
        return this.firestore.collection('Canciones').snapshotChanges();
    }

    updateSong(cancion: Cancion){
        this.firestore.doc('Canciones/' + cancion.id).update(cancion);
    }
}