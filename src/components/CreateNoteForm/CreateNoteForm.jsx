import { Component } from "react"
import "./style.css"

class CreateNoteForm extends Component {
  constructor(props){
    super(props)
    this.title = ""
    this.text = ""
  }

  _handleTitleChange(event){
    this.title = event.target.value
    event.stopPropagation()
  }

  _handleTextChange(event){
    this.text = event.target.value
    event.stopPropagation()
  }

  _createNote(event){
    event.preventDefault()
    event.stopPropagation()
    this.props.createNote(this.title, this.text)
  }

  render() {
    return (
      <form
        className="create-note-form"
        onSubmit={this._createNote.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="create-note-form-input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          className="create-note-form-input"
          // rows={15}
          rows="15"
          onChange={this._handleTextChange.bind(this)}
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