import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = `http://127.0.0.1:8000/get/${id}`;

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    {
      const response = await fetch('http://127.0.0.1:8000/update/' + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
      navigate('/book');

    };
  }


  return (
    <>
      <input
        type="text"
        name="bookid"
        value={data.bookid}
        readOnly
      />
      <input
        type="text"
        name="bookname"
        value={data.bookname}
        onChange={(e) => setData({ ...data, bookname: e.target.value })}
        required
      />
      <input
        type="text"
        name="image"
        value={data.image}
        onChange={(e) => setData({ ...data, image: e.target.value })}
      />
      <input
        type="text"
        name="description"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <input
        type="text"
        name="author"
        value={data.author}
        onChange={(e) => setData({ ...data, author: e.target.value })}
      />
      <input
        type="number"
        name="price"
        value={data.price}
        onChange={(e) => setData({ ...data, price: e.target.value })}
      />
      <input
        type="number"
        name="publishedYear"
        value={data.publishedYear}
        onChange={(e) => setData({ ...data, publishedYear: e.target.value })}
      />
      <input
        type="text"
        name="language"
        value={data.language}
        onChange={(e) => setData({ ...data, language: e.target.value })}
      />
      <input
        type="button"
        value="Edit Book"
        onClick={handleUpdate}
        disabled={updating}
      />
      {updating && <div>Updating...</div>}
    </>
  );
}

export default EditBook;