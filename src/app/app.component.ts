import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private afs: AngularFirestore) {
    //   afs.collection('animals').snapshotChanges(
    // ).subscribe(x => {
    //   console.log(x)
    // })
    const fire = firebase.firestore().doc('animals/elephant');
  }
}
