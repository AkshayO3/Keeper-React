import React from "react";

function CreateArea(props) {
    const [note,setNote]=React.useState({
        title:"",
        content:""
    })
    function submitNote(event){
        props.add(note)
        setNote({  title:"",content:""})
        event.preventDefault() //To prevent refreshing of the page

    }
    function handleChange(event){
        const {name,value}=event.target
        setNote(prevNote=>{
            return {
            ...prevNote,
                [name]:value
        }})
    }

    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
                <textarea name="content" onChange={handleChange}  placeholder="Take a note..." rows="3" value={note.content} />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
