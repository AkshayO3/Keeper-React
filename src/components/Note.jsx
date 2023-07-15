import React from "react"
import Card from "./Card"
import notes from "../notes";


function Note(){
    return(
        <div>
            {notes.map(Single=>
                <Card
                    key={Single.id}
                    title={Single.title}
                    content={Single.content}/>)}
        </div>
    )
}
export default Note
