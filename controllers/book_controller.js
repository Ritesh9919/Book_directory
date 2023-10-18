const Book = require('../models/Book');
const {StatusCodes} = require('http-status-codes');

const addBook = async(req, res) => {
    try {
        const {title, author} = req.body;
   if(!title || !author) {
    res.status(StatusCodes.BAD_REQUEST).json({msg:"Please provide both field"});
   }
   await Book.create({title, author});
   res.status(StatusCodes.CREATED).json({msg:"Book created successfully!"});
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:"Something went wrong please try again later"});
    }
   
}


const getAllBooks = async(req, res) => {
    try {
        const books = await Book.find({});
        if(!books) {
            res.status(StatusCodes.NOT_FOUND).json({msg:"Books not found"});
        }
        res.status(StatusCodes.OK).json({books, length:books.length});
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:"Something went wrong please try again later"});
        
    }
}


const updateBook = async(req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book) {
            res.status(StatusCodes.NOT_FOUND).json({msg:"Book not found"});
        }
        await Book.findByIdAndUpdate(id, req.body);
        res.status(StatusCodes.OK).json({msg:"Book updated successfully"});
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:"Something went wrong please try again later"});
    }
}



module.exports = {
    addBook,
    getAllBooks,
    updateBook
}