import mongoose, { Document } from "mongoose";

export interface IBook extends Document {
    title: string,
    overview: string,
    category: string,
    price: string,
    created_date: Date
}

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
    title: { type: String, required: true },
    overview: { type: String, required: true },
    category: String,
    price: { type: Number, required: true },
    created_date: Date
});

export const BookModel = mongoose.model<IBook>('book', BookSchema);


