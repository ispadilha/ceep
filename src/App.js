import { Component } from "react";
import CreateNoteForm from "./components/CreateNoteForm";
import NotesList from "./components/NotesList/";
import "./assets/App.css"

/* function App() seria mais moderno, não precisaria do render(){} e sim apenas do return()
  mas foi deixado da forma abaixo, para padronizar com os outros componentes, da forma ensinada no tutorial */

class App extends Component {
  constructor(){
    super()
    this.notes = []
  }

  createNote(title, text){
    const newNote = {title, text}
    this.notes.push(newNote)
  }

  render() {
    return (
      <section className="content">
        <CreateNoteForm createNote={this.createNote.bind(this)}/>
        <NotesList notes={this.notes} />
      </section>
    );
  }
}

export default App;