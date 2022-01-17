const util = require('util');
const fs = require('fs');

//generate unique id's
const uuidv1 = require('uuid/v1');

// defining this constants make it easier to call the fs module when writing the store functions
const readFileAsync = util.promisify('fs.readFile');
const writeFileAsync = util.promisify('fs.writeFile');

class Store {
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }


  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      try {
        parsedNotes = [].concat(json.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  };

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Please fill in the fields")
    }

    const newNote = { title, text, uuidv1() };

    return this.getNotes()
      .then([...notes, newNote]);
    .then((updateNotes) => this.write(updateNotes));
    .then(() => newNote);
  }

  removeNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id));
  .then((filteredNotes) => this.write(filteredNotes));
  };

};

module.exports = new Store();