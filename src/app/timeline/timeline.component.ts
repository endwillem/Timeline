import { Component } from '@angular/core';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  constructor() {
    this.getData();
  }
  events: any = [];

  getData() {
    const db = getFirestore();
    const colRef = collection(db, 'events');
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.events.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
