import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBook() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div class="">

                    <label class="form-label"><b>Book id</b></label>
                    <input type="Number" class="form-control" onChange={(e) => {
                        setData({
                            ...data, bookid: e.target.value
                        })
                    }} placeholder="Enter book id" />
                </div>
                <div class="">
                    <label class="form-label"><b>Name</b></label>
                    <input type="text" class="form-control" onChange={(e) => {
                        setData({
                            ...data, bookname: e.target.value
                        })
                    }} placeholder="Enter name" />
                </div>
                <div class="mb-3">
                    <label class="form-label"><b>Image</b></label>
                    <input type="text" class="form-control" onChange={
                        (e) => {
                            setData({
                                ...data, image: e.target.value
                            })
                        }
                    } placeholder="Enter Image url" />
                </div>
                <div class="mb-3">
                    <label class="form-label"><b>Description</b></label>
                    <input type="text" class="form-control" onChange={
                        (e) => {
                            setData({
                                ...data, description: e.target.value
                            })
                        }
                    } placeholder="Enter Book Description" />
                </div>
                <div class="mb-3">
                    <label class="form-label"><b>Author</b></label>
                    <input type="text" class="form-control" onChange={
                        (e) => {
                            setData({
                                ...data, author: e.target.value
                            })
                        }
                    } placeholder="Enter Author" />
                </div>

                <div class="mb-3">
                    <label class="form-label"><b>price</b></label>
                    <input type="Number" class="form-control" onChange={
                        (e) => {
                            setData({
                                ...data, price: e.target.value
                            })
                        }
                    } placeholder="Enter price" />
                </div>

                <div class="mb-3">
                    <label class="form-label"><b>publishedYear</b></label>
                    <input type="Number" class="form-control " onChange={
                        (e) => {
                            setData({
                                ...data, publishedYear: e.target.value
                            })
                        }
                    } placeholder="Enter published year" />
                </div>
                <div class="mb-3">
                    <label class="form-label"><b>Language</b></label>
                    <input type="String" class="form-control " onChange={
                        (e) => {
                            setData({
                                ...data, language: e.target.value
                            })
                        }
                    } placeholder="Enter Language" />
                </div>
            </div>
            <div><button
                onClick={() => {
                    const apiUrl = "http://127.0.0.1:8000/add";

                    fetch(apiUrl, {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res =>
                            res.json())
                        .then((res) => {
                            navigate('/book');
                        })

                }}

                className="btn btn-primary"
            >
                Add
            </button>

            </div>
        </>)
}

export default NewBook;


