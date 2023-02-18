import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

function MyComponent() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataCollection = collection(db, "blog");
      const querySnapshot = await getDocs(dataCollection);
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMyData(data);
    };

    getData();
  }, []);

  return (
    <div className="App">
        <p>Console.test</p>
        {myData.map((item) => (
            <div key={item.id}>
                {item.title}
                {item.author}
                {item.content}
                </div>
        ))}
    </div>
  );
}

export default MyComponent;