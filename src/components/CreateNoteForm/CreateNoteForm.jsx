import { Component } from "react"
import "./style.css"

class CreateNoteForm extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Título"
          className="create-note-form-input"
        />
        <textarea
          placeholder="Escreva sua nota..."
          className="create-note-form-input"
          // rows={15}
          rows="15"
        />
        <button
          className="create-note-form-input create-note-form-submit"
        >
          Criar Nota
        </button>
      </form>
    )
  }
}

export default CreateNoteForm