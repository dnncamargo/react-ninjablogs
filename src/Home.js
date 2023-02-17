import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // const [blogs, setBlogs] = useState( [
    //     { title: 'My new website', body: 'loren ipsum', author: 'mario', id: 1 },
    //     { title: 'Welcome to the cave', body: 'loren ipsum', author: 'yoshi', id: 2 },
    //     { title: 'Diving in the clouds', body: 'loren ipsum', author: 'mario', id: 3 }
    //] );

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => (blog.id !== id))
    //     setBlogs(newBlogs);
    // }



    const { data, blogList, isPending, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {/* Uncaught TypeError: Cannot read properties of null (reading 'map') 
            ocorre porque temos uma pequena fração de tempo até obter a resposta do servidor, 
            enquanto o objeto já tentou ter renderizado na tela.
            Para corrigir isto, devemos usar uma propriedade de lógica dinâmica certificando que 'blogs'
            é uma variável válida */}

            { isPending && <div>Loading...</div> }

            { error && <div>{ error }</div> }

            {blogList && 
            <BlogList
                blogs={blogList}
                title={"Firestore"}/>}

            {data && 
            <BlogList 
                blogs={data} 
                title={"All blogs!"} 
                // handleDelete={handleDelete}
                />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==='mario')} title={"Mario's blogs"}/> */}
        </div>
    )
}
 
export default Home;