const mongoose = require("mongoose");

// Save a reference to Schema constructor
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    body: String
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;