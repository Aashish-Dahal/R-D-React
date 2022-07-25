import {noteCollectionRef} from './firestore.collection';

export const getNotes = setNote => {
  noteCollectionRef.onSnapshot(
    querySnapshot => {
      const newNotes = [];
      querySnapshot.forEach(doc => {
        const note = doc.data();
        note.id = doc.id;

        newNotes.push(note);
      });
      setNote(newNotes);
    },
    error => {
      console.log(error);
    },
  );
};
export const editNote = async (data, id, loading, setLoading) => {
  const updatedNote = {
    date: data.date,
    title: data.title,
    description: data.message,
  };
  if (loading) {
    return;
  }
  setLoading(true);
  await noteCollectionRef
    .doc(id)
    .update(updatedNote)
    .then(() => {
      console.log('Note updated!');
    });
  setLoading(false);
};
export const addNote = async (data, loading, setLoading) => {
  const note = {
    date: data.date,
    title: data.title,
    description: data.message,
  };
  if (loading) {
    return;
  }
  setLoading(true);
  await noteCollectionRef.add(note).then(() => {
    console.log('Note added!');
  });
  setLoading(false);
};
export const deleteNote = async id => {
  console.log(id);
  await noteCollectionRef
    .doc(id)
    .delete()
    .then(() => {
      console.log('Note deleted!');
    });
};
