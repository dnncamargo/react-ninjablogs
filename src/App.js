import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
    return (
        <div className="App">
            
            <Router>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
        </div>
    );
}

export default App;
