import { Component } from "react";
import { NoteCard } from "./NoteCard";

export class NotesList extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((category, index) => {
                    return (
                        <li key={index}>
                            <div>{category}</div>
                            <NoteCard />
                        </li>
                    )
                })}
            </ul>
        )
    }
}