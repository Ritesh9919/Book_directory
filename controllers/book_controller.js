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



module.exports = {
    addBook
}