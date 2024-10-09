import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/get");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);
    console.log(books);

    return (
        <div>
            <div class="left" style={{ width: "50%", height: "100%", float: "left" }}>
                <div style={{ paddingTop: '150px', lineHeight: "150px" }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <p style={{ fontSize: "60px", fontFamily: "Sofia, sans-serif", color: '#343a40' }}>
                            Welcome <br />to <br />BooksStore
                        </p>
                    </div>

                </div>
            </div>
            <div class="right" style={{ float: "left", marginLeft: "15%", marginTop: "10%" }}>
                <div className="slider">
                    {books.map((book, index) => (
                        <div className="slide" key={index}>
                            <img
                                src={book.image}
                                style={{ height: '400px', width: '300px', borderRadius: '10px' }}
                                alt={book.bookname}
                            />
                            <h4 className="mt-2">{book.bookname}</h4>
                            <h6 className="text-muted">{book.author}</h6>
                        </div>
                    ))}

                </div>
                <Link className="btn btn-primary mt-4 fs-5" style={{ display: 'block', marginTop: '100px', width: '350px', borderRadius: '20px' }} to="/Book">
                    View All Books
                </Link>

            </div>
        </div>

    );
}

export default Home;
