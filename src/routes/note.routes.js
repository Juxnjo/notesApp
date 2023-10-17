import { Router } from "express";
import { getNotes, getNote, createNote, deleteNote, updateNote } from "../controllers/notes.controller.js";

const router = Router()

router.get( "/notes", getNotes )

router.post( "/notes", createNote )

router.get( "/notes/:id", getNote )

router.delete( "/notes/:id", deleteNote )

router.put( "/notes/:id", updateNote )


export default router