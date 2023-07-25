import { Component } from "react"
import "./style.css"

class NoteCard extends Component {
    render() {
        return (
            <section className="note-card">
                <header className="note-card-header">
                    <h1 className="note-card-title">Título</h1>
                </header>
                <p className="note-card-text">Escreva sua nota</p>
            </section>
        )
    }
}

export default NoteCard