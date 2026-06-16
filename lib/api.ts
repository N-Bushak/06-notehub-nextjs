import axios from 'axios';
import { CreateNoteDto, Note } from '@/types/note';

const api = axios.create({
  baseURL: 'https://next-v1-notes-api.goit.study/',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page: number = 1,
  perPage: number = 12,
  search: string = ''
): Promise<FetchNotesResponse> => {
  const { data } = await api.get<FetchNotesResponse>('/notes', {
    params: { page, perPage, search },
  });
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
};

export const createNote = (data: CreateNoteDto): Promise<Note> => {
  return api.post('/notes', data).then(res => res.data);
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await api.delete<Note>(`/notes/${id}`);
  return data;
};