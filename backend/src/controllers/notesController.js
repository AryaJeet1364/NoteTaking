import Note from "../models/Note.js"

// export const getAllNotes = async (req,res) =>{
//     // res.status(200).send("You just fetched the notes!!")
//     try {
//       const notes = await Note.find()
//       res.send(200).json(notes)
      
//     } catch (error) {
//       console.error("Error in getAllNotes controller", error);
//       res.status(500).json({message: "Internal server error"})
//     }
// }


export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt:-1});

    if (notes.length === 0) {
      return res.status(404).json({ message: "No notes found" });
    }
    

    return res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller:", error);

    // Avoid sending a response if it's already sent
    if (!res.headersSent) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const getNoteById = async(req,res)=>{
  try {
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message:"Note not found"});
    res.status(200).json(note)
  } catch (error) {
    console.error("Error in getnotebyId controller", error);
    if (!res.headersSent) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}


export const createNote = async (req, res) => {
  // res.status(201).json({ message: "Note created successfully! " });

  try {
    const {title,content} = req.body
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required." });
    }
    const newNote = new Note({title, content})
    const savedNote = await newNote.save()
    res.status(201).json(savedNote)
  } catch (error) {
    console.error("Error in createNote controller", error)
    if (!res.headersSent) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }
};


export const updateNote = async (req, res) => {
  // res.status(200).json({ message: "Note updated successfully! " });
  try {
    const {title,content} = req.body
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})

    if(!updatedNote) return res.status(404).json({message:"Note not found"})

    res.status(200).json(updatedNote)
  } catch (error) {
    console.error("Error in updateNote controller", error);
    if (!res.headersSent) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }
};

export const deleteNote = async (req, res) => {
  // res.status(200).json({ message: "Note deleted successfully! " });

  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) return res.status(404).json({message:"Note not found"})
    res.status(200).json({message:"Note deleted successfully"})
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    if (!res.headersSent) {
        res.status(500).json({message:"Internal server error"});
    }
  }
};