import { Component } from "react";
import { CreateNoteForm } from "./components/CreateNoteForm/CreateNoteForm";
import { NotesList } from "./components/NotesList/NotesList";
import "./assets/App.css"

/* function App() seria mais moderno, não precisaria do render(){} e sim apenas do return()
  mas foi deixado da forma abaixo, para padronizar com os outros componentes, da forma ensinada no tutorial */

class App extends Component {
  render() {
    return (
      <section>
        <CreateNoteForm />
        <NotesList />
      </section>
    );
  }
}

export default App;