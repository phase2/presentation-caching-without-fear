(function ( document, window) {
  var notes = window.open('about:blank', 'presenterNotes', 'height=400,width=400,scrollbars=true');
  notes.document.write('<html><head><title>Presenter Notes</title><style>p { margin: 0; }</style></head><body><div id="note"></div></body></html>')
  document.addEventListener("impress:stepenter", function (event) {
    slidenotes = event.target.querySelectorAll('.presenter-note');
    if (slidenotes.length > 0) {
      notes.document.getElementById("note").innerHTML = '';
      for (i = 0; i < slidenotes.length; ++i) {
        notes.document.getElementById("note").innerHTML += '<div>' + slidenotes[0].innerHTML + '</div>';
      }
    }
    else {
      notes.document.getElementById("note").innerHTML = '<div>No notes for this slide</div>';
    }
  }, false);
})(document, window);