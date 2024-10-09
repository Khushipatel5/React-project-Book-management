const router = require("express").Router();
const bookModel = require("../models/bookModel");


//get by id
// localhost:8000/get/bookname
router.get('/get/:id', async (req, res) => {
    const data = await bookModel.findOne({
        bookid: req.params.id
    });

    res.send(data);
})

//get all
// localhost:8000/get
router.get('/get', async (req, res) => {
    const ans = await bookModel.find();
    res.send(ans);
})

//create
// localhost:8000/add (with POST method)
router.post('/add', async (req, res) => {
    const data = new bookModel({
        ...req.body
    });

    const ans = await data.save();
    res.send("data created successfully");
})


//update
// localhost:8000/update/bookname (with PATCH method)
// router.patch('/update/:id' , async (req,res)=>{
// const ans = await bookModel.updateOne({bookid : id},{$set:req.body});
// res.send("data updated successfully");

// const data = await bookModel.findOneAndUpdate({
//     bookid : req.params.id
// })
// data.bookid=req.body.bookid;
// data.bookname = req.body.bookname;
// data.image = req.body.image;
// data.description = req.body.description;
// data.author = req.body.author;
// data.price = req.body.price;
// data.publishedYear = req.body.publishedYear;
// data.language = req.body.language;

// const ans = await data.save();
// res.send("Updated succefully");
// })
router.patch('/update/:id', async (req, res) => {
    const { id } = req.params; // Correctly destructure the id from req.params
    const updateData = req.body; // Get the update data from the request body

    try {
        const updatedBook = await bookModel.findByIdAndUpdate(id, updateData, {
            new: true, // Return the updated document
            runValidators: true, // Validate the update against the schema
        });

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});



// //delete
// // localhost:8000/delete/bookname (with DELETE method)
router.delete('/delete/:id', async (req, res) => {
    const ans = await bookModel.deleteOne({
        bookid: req.params.id
    });

    res.send("deleted successfully");
})

// router.delete('/delete/:id', async (req, res) => {
//     const { id } = req.params.id;
//         const result = await bookModel.findByIdAndDelete(id);

//         res.send("Deleted successfully");
//     } 
// );

module.exports = router;


