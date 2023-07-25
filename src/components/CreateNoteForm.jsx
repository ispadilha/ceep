import { Component } from "react";

export class CreateNoteForm extends Component {
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
        />
        <button
          className="create-note-form-submit-button"
        >
          Criar Nota
        </button>
      </form>
    )
  }
}
