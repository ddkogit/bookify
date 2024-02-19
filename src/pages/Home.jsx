import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import Cards from '../components/Cards';


function Home() {

    const firebase = useFirebase();

    const [books,setBooks]= useState([]);
    useEffect(()=>{

        firebase.listAllBooks().then((books)=>setBooks(books.docs));

    },[])

  return (
    <div className='container'>
       {
        books.map((book)=>(

            <Cards key={book.id} {...book.data()}/>
            )
        )
       }
    </div>
  )
}

export default Home