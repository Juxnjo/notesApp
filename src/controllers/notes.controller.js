import Note from "../models/note.model.js";

export const getNotes = async ( req, res ) =>
{
    const notes = await Note.find()
    res.json( notes )
}

export const createNote = async ( req, res ) =>
{
    const { title, description, date } = req.body

    const newNote = new Note( {
        title,
        description,
        date
    } )
    const savedNote = await newNote.save()
    res.json( savedNote )
}

export const getNote = async ( req, res ) =>
{
    const note = await Note.findById( req.params.id )
    if ( !note ) return res.status( 404 ).json( { message: 'Note not found' } )
    res.json( note )

}

export const deleteNote = async ( req, res ) =>
{
    const note = await Note.findByIdAndDelete( req.params.id )
    if ( !note ) return res.status( 404 ).json( { message: 'Note not found' } )
    return res.sendStatus(204)
}

export const updateNote = async ( req, res ) =>
{
    const note = await Note.findByIdAndUpdate( req.params.id, req.body, {
        new: true
    } )
    if ( !note ) return res.status( 404 ).json( { message: 'Note not found' } )
    res.json( note )
}

