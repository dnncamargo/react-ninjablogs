import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom'

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, blogList, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <br/><hr/><br/><br/>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.content }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            ) }
            { blogList && (
                <article>
                    <h2>{ blogList.title }</h2>
                    <br/><hr/><br/><br/>
                    <p>Written by { blogList.author }</p>
                    <div>{ blogList.content }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;