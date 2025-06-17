import express from "express";
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById)
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

// router.get("/", (req, res) => {
//   res.status(200).send("You just fetched the notes");
// });

// router.post("/", (req, res) => {
//   res.status(201).json({ message: "Note created successfully! " });
// });

// router.put("/:id", (req, res) => {
//   res.status(200).json({ message: "Note updated successfully! " });
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).json({ message: "Note deleted successfully! " });
// });

// app.get("/api/notes", (req,res)=>{
//     // see the notes
//     res.status(200).send("U got 20 notes")
// })

// app.post("/api/notes", (req, res) => {
//   // create the notes
//   res.status(201).json({message: "note created successfully"});
// });

// app.put("/api/notes/:id", (req, res) => {
//   // update the notes
//   res.status(200).json({ message: "note updatedc successfully" });
// });

// app.delete("/api/notes/:id", (req, res) => {
//   // delete the notes
//   res.status(200).json({ message: "note deleted successfully" });
// });

export default router;
