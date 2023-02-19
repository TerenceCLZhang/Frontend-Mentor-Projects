const isNumberKey = (txt, evt) => {
  const charCode = evt.which ? evt.which : evt.keyCode;
  const inputId = txt.getAttribute("id");

  if (charCode == 46 && inputId !== "num-people") {
    if (txt.value.indexOf(".") === -1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
  }
  return true;
};
