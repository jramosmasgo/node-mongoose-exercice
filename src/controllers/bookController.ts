import { BookModel as Book, IBook } from "../models/bookModel";
import { Request, Response } from "express";

export const addNewBook = async (req: Request, res: Response) => {
    try {
        const { title, overview, category, price, created_date } = req.body;
        const newBook = new Book({ title, overview, category, price, created_date });
        const book: IBook = await newBook.save();
        res.status(200).json({ book });
    } catch (error) {
        res.status(500).json({ Error: error })
    }
}

export const getBooks = async (req: Request, res: Response) => {
    try {
        const books: IBook[] = await Book.find({});
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const getBookById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.id;
        const book: IBook | null = await Book.findById({ _id: bookId });
        res.status(200).json({
            ok: true,
            book
        })
    } catch (error) {
        res.status(200).json({ error });
    }
}

export const updateBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.id;
        const newBookInfo = req.body;
        const book: IBook | null = await Book.findOneAndUpdate({ _id: bookId }, newBookInfo, { new: true });
        res.status(200).json({
            ok: true,
            book
        })
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.id;
        await Book.deleteOne({ _id: bookId });
        res.status(200).json({ message: 'book successfully deleted' })
    } catch (error) {
        res.status(500).json(error);
    }
}