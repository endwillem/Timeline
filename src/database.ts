import { getFirestore, collection, getDocs } from 'firebase/firestore';

//ToDo: ES6 (arrow) functie van maken
function getData() {
  // init services
  const db = getFirestore();

  //collection ref
  const colRef = collection(db, 'events');
  console.log(colRef);
  getDocs(colRef)
    .then((snapshot) => {
      let events: { id: string }[] = [];
      snapshot.docs.forEach((doc) => {
        events.push({ ...doc.data(), id: doc.id });
        let li = document
          .getElementById('event-list')
          ?.appendChild(document.createElement('li'));

        const date: HTMLHeadingElement | undefined = li?.appendChild(
          document.createElement('h1')
        )!;
        date.textContent = doc.data()['date'];
        const title = li?.appendChild(document.createElement('h3'))!;
        title.textContent = doc.data()['Title'];
        const description = li?.appendChild(document.createElement('span'))!;
        description.textContent = doc.data()['description'];
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getData };
