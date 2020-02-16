function confirmReset(){
    var r = confirm("Are you sure you want to reset all text?");
      if (r == true) {
        form.reset();
      }
} 

function confirmSave(){
  var r = confirm("Are you sure you don't have any more changes?");
    if (r == true) {
      form.submit();
    }
} 