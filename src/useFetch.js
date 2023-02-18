import { useState, useEffect } from "react";

import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore';

// custom hooks must start with 'use'
const useFetch = ( url ) => {

    const [data, setData] = useState( null );
    const [blogList, setBlogList] = useState( [] )
    const [isPending, setIsPending] = useState( true );
    const [error, setError] = useState( null );

    useEffect(() => {

        const getBlogList = async () => {
            const dataCollection = collection(db, "blog");
            const querySnapshot = await getDocs(dataCollection);
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setBlogList(data)
        }
        getBlogList();
        

        // console.log("use effect run")
        // console.log(blogs)
        // dont use useEffect( async ()
        // setTimeout(() => {
            fetch( url )
            .then(res => {
                //console.log(res)
                if(!res.ok) {
                    setError(true)
                    throw Error("Could not fetch the date for that resource")
                }
                return res.json();
            })
            .then((data => {
                console.log(data)
                setData(data)
                setIsPending(false)
                setError(null)
            }))
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
        // }, 1000)
        // acionar a função no array de dependência apenas uma vez que a aplicação é executada
    },[ url ]);

    

    return { data, blogList, isPending, error }
}
 
export default useFetch;