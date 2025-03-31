import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { HeaderComponent } from '../header/header.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { FooterComponent } from '../footer/footer.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDLOD6YRW-Qq3yIcTEmSl5smiKegl4-aB0',
  authDomain: 'timeline-cae8e.firebaseapp.com',
  databaseURL:
    'https://timeline-cae8e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'timeline-cae8e',
  storageBucket: 'timeline-cae8e.firebasestorage.app',
  messagingSenderId: '129647486779',
  appId: '1:129647486779:web:7a2ea7752f4435fe6d791e',
  measurementId: 'G-2CEHWVEXHD',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, TimelineComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
}
