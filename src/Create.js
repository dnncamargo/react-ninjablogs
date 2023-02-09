import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content, author};

        setIsPending(true)

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
        })
        // history.go(-1);
        navigate('/');
    }

    return ( 
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            <textarea
                placeholder="Tell your story..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                ></textarea>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="luigi">luigi</option>
                <option value="peach">peach</option>
                <option value="yoshi">yoshi</option>
                <option value="toad">toad</option>
            </select>
            {!isPending && <button>Add blog</button>}
            {isPending && <button disabled>Adding...</button>}
        </form>
    </div> 
    );
}
 
export default Create;