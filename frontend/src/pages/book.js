import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Book() {
  const [data, setData] = useState([]);

  const apiUrl = "http://localhost:8000/get";

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then(res => res.json())
      .then(res => setData(res));
  }, []);


  const formattedBooks = data.map((book) => (
    <div className="card col-2 jutifyContent-center" style={{ justifyContent: "center", height: 420, margin: '1rem', float: "left" }}>
      <div className="card-body">
        <img src={book.image} style={{ height: 250, width: 200 }} />
        <h5 className="card-title">{book.bookname}</h5>
        <p className="card-text ">Price: ₹{book.price}</p>
        <Link className="btn btn-primary" to={`/book/${book.bookid}`}>
          Read more
        </Link>
      </div>
    </div>
  ));

  return (
    <div style={{}}>
      <h1>Books List</h1>
      <div style={{}}>
        {formattedBooks}  </div>  </div>
  );
}

export default Book;
