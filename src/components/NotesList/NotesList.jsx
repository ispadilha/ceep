import { Component } from "react"
import NoteCard from "../NoteCard"
import "./style.css"

class NotesList extends Component {
    render() {
        return (
            <ul className="notes-list">
                {Array.of("Trabalho", "Trabalho", "Estudos").map((category, index) => {
                    return (
                        <li className="notes-list-item" key={index}>
                            <div>{category}</div>
                            <NoteCard />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default NotesList