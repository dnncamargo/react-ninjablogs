import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom'

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch()
    const navigate = useNavigate();
    console.log(id)

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    console.log(blog)

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            {/* { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <br/><hr/><br/><br/>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.content }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            ) } */}
            { blog.filter(blog => (blog.id === id)) && (
                <article>
                    <h2>{ blog.title }</h2>
                    <br/><hr/><br/><br/>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.content }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;