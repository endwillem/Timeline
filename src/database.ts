import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLOD6YRW-Qq3yIcTEmSl5smiKegl4-aB0",
  authDomain: "timeline-cae8e.firebaseapp.com",
  databaseURL:
    "https://timeline-cae8e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "timeline-cae8e",
  storageBucket: "timeline-cae8e.firebasestorage.app",
  messagingSenderId: "129647486779",
  appId: "1:129647486779:web:7a2ea7752f4435fe6d791e",
  measurementId: "G-2CEHWVEXHD",
};

//ToDo: ES6 (arrow) functie van maken
function getData() {

  //init firebase app
  initializeApp(firebaseConfig);

  // init services
  const db = getFirestore();

  //collection ref
  const colRef = collection(db, "events");

  getDocs(colRef)
    .then((snapshot) => {
      let events: { id: string }[] = [];
      snapshot.docs.forEach((doc) => {
        events.push({ ...doc.data(), id: doc.id });
        let li = document
          .getElementById("event-list")
          ?.appendChild(document.createElement("li"));

        const date: HTMLHeadingElement | undefined = li?.appendChild(
          document.createElement("h1")
        )!;
        date.textContent = doc.data().date;
        const title = li?.appendChild(document.createElement("h3"))!;
        title.textContent = doc.data().Title;
        const description = li?.appendChild(document.createElement("span"))!;
        description.textContent = doc.data().description;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getData };
