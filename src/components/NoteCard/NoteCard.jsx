import { Component } from "react";
import "./style.css"

export class NoteCard extends Component {
    render() {
        return (
            <section className="note-card">
                <header>
                    <h1>Título</h1>
                </header>
                <p>Escreva sua nota</p>
            </section>
        )
    }
}