import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function DetailBook() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = 'http://127.0.0.1:8000/get/' + id;

    useEffect(() => {
        fetch(apiUrl)
            .then(res => {
                return res.json();
            })
            .then(res => setData(res))
    }, [id]);
    return (
        <div className="container">
            <h1 className="pt-2">Book Collection</h1>
            <Link to="/book" className="btn btn-info mt-3">Back to Book List</Link>

            <div className="mt-4">
                <img src={data.image} alt={data.bookname} style={{ height: 500, float: "left", marginRight: 20 }} />
                <div style={{ marginLeft: 350, marginTop: 25 }}>
                    <h3><strong>Book Name:</strong> {data.bookname}</h3>
                    <p className="text"><strong>Author:</strong> {data.author}</p>
                    <p><strong>Description:</strong> {data.description}</p>
                    <p><strong>Price:</strong> ₹{data.price}</p>
                    <p><strong>Published Year:</strong> {data.publishedYear}</p>
                    <p><strong>Language:</strong> {data.language}</p> {/* Changed to lowercase 'language' */}
                    <button className="btn btn-danger ms-2" onClick={() => {
                        fetch(`http://127.0.0.1:8000/delete/` + id, { method: "DELETE" }) // Correct endpoint
                            .then(res => {
                                if (res.ok) {
                                    navigate('/book'); // Navigate back to the book list on successful deletion
                                } else {
                                    throw new Error("Failed to delete book");
                                }
                            })
                            .catch(error => {
                                console.error('Error deleting book:', error);
                                setError(error.message); // Set error message
                            });
                    }}>Delete</button>

                    <Link to={`/book/edit/${data.bookid}`} className="btn btn-primary ms-3">Edit</Link>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default DetailBook;
