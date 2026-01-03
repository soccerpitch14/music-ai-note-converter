const notes = [
  "C","C#","D","D#","E","F",
  "F#","G","G#","A","A#","B"
];

function convertNote() {
  const input = document.getElementById("noteInput").value.trim().toUpperCase();
  const resultBox = document.getElementById("result");

  if (!input.match(/^([A-G]#?)(\d)$/)) {
    resultBox.textContent = "Invalid note format";
    return;
  }

  const note = input.slice(0, -1);
  const octave = parseInt(input.slice(-1));

  const index = notes.indexOf(note);
  if (index === -1) {
    resultBox.textContent = "Unknown note";
    return;
  }

  // Simple conversion logic (example: shift octave)
  const convertedOctave = octave + 1;
  const convertedNote = notes[index] + convertedOctave;

  resultBox.textContent = `Converted Note: ${convertedNote}`;
}
