export type NoteTag = 'Work' | 'Personal' | 'Todo' | 'Shopping' | 'Meeting';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag?: NoteTag;     
  categoryId: string; 
}

export interface NewNote {
  title: string;
  content: string;
  tag: NoteTag;
}

export interface NotePayload {
  title: string;
  content: string;
  categoryId: string;
}