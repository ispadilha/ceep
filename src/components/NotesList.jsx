import { Component } from "react";

export class NotesList extends Component {
    render(){
        return(
            <ul>
                <li>
                    <section>
                        <header>
                            <h1>Título</h1>
                        </header>
                        <p>Escreva sua nota</p>
                    </section>
                </li>
            </ul>
        )
    }
}