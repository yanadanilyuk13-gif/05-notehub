import type { Note } from "../types/note";
import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api/docs";

interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

type CreateNoteData = Pick<Note, "title" | "content" | "tag">;

// GET notes
export async function fetchNotes(
  page: number,
  search: string,
): Promise<NotesResponse> {
  const response = await axios.get<NotesResponse>(`${BASE_URL}/notes`, {
    params: {
      page,
      search,
      perPage: 10,
    },
  });
  return response.data;
}

//create note
export async function createNote(note: CreateNoteData): Promise<Note> {
  const response = await axios.post<Note>(`${BASE_URL}/notes`, note);

  return response.data;
}

//delete note
export async function deleteNote(id: string): Promise<Note> {
  const response = await axios.delete<Note>(`${BASE_URL}/notes/${id}`);
  return response.data;
}
