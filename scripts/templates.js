function getNoteTemplate(indexNote) {
    return `
    <div class="note">
         <h3>${allNotes.notesTitles[indexNote]}</h3>
          <p>${allNotes.notes[indexNote]}</p>
        <div>
            <button class="btn-trash" onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">Papierkorb 🗑️</button>
            <button class="btn-archive"onclick="moveNote(${indexNote}, 'notes', 'archivNotes')">Archiv 📁</button>
        </div>
    </div>
    `;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div class="note">
         <h3>${allNotes.trashNotesTitles[indexTrashNote]}</h3>
          <p>${allNotes.trashNotes[indexTrashNote]}</p>
        <div>
            <button class="btn-trash" onclick="deleteNote(${indexTrashNote})">Löschen 🆇</button>
            <button class="btn-notes" onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')">Notizen 🗒️</button>
        </div>
    </div>
    `;
}

function getArchivNoteTemplate(indexArchivNote) {
    return `
    <div class="note">
         <h3>${allNotes.archivNotesTitles[indexArchivNote]}</h3>
          <p>${allNotes.archivNotes[indexArchivNote]}</p>
        <div>
        <button class="btn-trash" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'trashNotes')">Papierkorb 🗑️</button>
        <button class="btn-notes" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'notes')">Notizen 🗒️</button>
        </div>
    </div>
    `;
}