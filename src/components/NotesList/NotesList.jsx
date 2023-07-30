import { Component } from "react"
import NoteCard from "../NoteCard"
import "./style.css"

class NotesList extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <ul className="notes-list">
                {this.props.notes.map((note, index) => {
                    return (
                        <li className="notes-list-item" key={index}>
                            {/* <div>{category}</div> */}
                            <NoteCard title={note.title} text={note.text}/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default NotesList