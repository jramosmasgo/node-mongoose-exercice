import mongoose from 'mongoose';

export default function dbConnection(url: string) {
    try {
        mongoose.connect(url);
        mongoose.connection.once('connected', () => {
            console.log('You are conected to databse');
        })
        mongoose.connection.on('error', (err) => {
            throw new Error('Error on database connection: ' + err);
        });
    } catch (error) {
        throw new Error('Error on database connection')
    }
}