import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {

    /** Estados dos campos de input */
    const [input, setInput] = useState({
        title: "",
        author: "",
        content: ""
    })
    // const [title, setTitle] = useState('')
    // const [content, setContent] = useState('')
    // const [author, setAuthor] = useState('')

    /** Estados da página */
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title: input.title, author: input.author, content: input.content};

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
                name="title"
                placeholder="Title"
                type="text"
                value={input.title}
                onChange={handleInput}
                // onChange={(e) => setTitle(e.target.value)}
                required
                />
            <textarea
                name="content"
                placeholder="Tell your story..."
                value={input.content}
                onChange={handleInput}
                // onChange={(e) => setContent(e.target.value)}
                required
                ></textarea>
            <select
                name="author"
                placeholder="author"
                value={input.author}
                onChange={handleInput}
                // onChange={(e) => setAuthor(e.target.value)}
                >
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