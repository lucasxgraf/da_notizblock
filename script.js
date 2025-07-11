let allNotes = {
    'notesTitles' : ['Coden', 'Wohnung aufräumen'],
    'notes' : ['Mindestens 1 Stunde', 'staubsaugen und wischen'],
    'trashNotesTitles' : [],
    'trashNotes' : [],
    'archivNotesTitles' : [],
    'archivNotes' : [],
}

function renderSection(sectionKey, containerId, templateFunction){
    let container = document.getElementById(containerId);
    container.innerHTML = "";
    
    for (let i = 0; i < allNotes[sectionKey].length; i++) {
        container.innerHTML += templateFunction(i);
    }
}

function renderAllNotes(){
    loadFromLocalStorage();


    renderSection('notes', 'content', getNoteTemplate);
    renderSection('trashNotes', 'trash_content', getTrashNoteTemplate);
    renderSection('archivNotes', 'archiv_content', getArchivNoteTemplate);
}


function addNote() {
    let noteInput = document.getElementById('note_input');
    let titleInput = document.getElementById('title_input');
    
    if (!noteInput.value.trim() || !titleInput.value.trim()) {
        return;
    }
    
    allNotes.notes.push(noteInput.value.trim());
    allNotes.notesTitles.push(titleInput.value.trim());
    
    noteInput.value = "";
    titleInput.value = "";
    
    saveToLocalStorage();
    renderAllNotes();
}

function moveNote(indexNote, startKey, destinationKey){
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    let note = allNotes[startKey].splice(indexNote, 1);
    
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);
    allNotes[destinationKey].push(note[0]);

    saveAllToLocalStorage();
    renderAllNotes();
}

function deleteNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);

    saveAllToLocalStorage();
    renderAllNotes();
}

function saveSectionToStorage(sectionKey) {
    let titlesKey = sectionKey + "Titles";
    let noteKey = sectionKey;
    
    localStorage.setItem(titlesKey, JSON.stringify(allNotes[titlesKey]));
    localStorage.setItem(noteKey, JSON.stringify(allNotes[noteKey]));
}

function saveAllToLocalStorage() {
    saveSectionToStorage("notes");
    saveSectionToStorage("trashNotes");
    saveSectionToStorage("archivNotes");
}

function saveToLocalStorage() {
    saveSectionToStorage("notes");
}

function loadSectionFromStorage(sectionKey) {
    let titlesKey = sectionKey + "Titles";
    let noteKey = sectionKey;
    
    let savedTitles = localStorage.getItem(titlesKey);
    let savedNote = localStorage.getItem(noteKey);
    
    if (savedTitles !== null && savedNote !== null) {
        allNotes[titlesKey] = JSON.parse(savedTitles);
        allNotes[noteKey] = JSON.parse(savedNote);
    }
}

function loadFromLocalStorage() {
    loadSectionFromStorage("notes");
    loadSectionFromStorage("trashNotes");
    loadSectionFromStorage("archivNotes");
}
