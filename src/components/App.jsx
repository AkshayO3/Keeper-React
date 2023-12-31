import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes,setNotes]=React.useState([])
    function addNote(note){
        setNotes(prevNotes=>{
            return [...prevNotes,note]
        })
    }
    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((note,index)=>{return index!==id})
        })
    }
    return (
        <div>
            <Header />
            <CreateArea add={addNote}/>
            {notes.map((note,index)=>{
                return <Note key={index} id={index} title={note.title} content={note.content} del={deleteNote}/>})}
            <Footer />
        </div>
    );
}

export default App;

/*
 Material UI provides a lot of icons and you only need to install it like any other package,you can then use the
 icon as any other react components,more information on its website.
 */
