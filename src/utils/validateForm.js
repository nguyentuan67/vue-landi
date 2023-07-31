export function validateForm(inputRef) {
  Object.keys(inputRef).forEach((ref) => {
    if (inputRef[ref].validate) {
      inputRef[ref].validate();
    }
  });
  const isValid = Object.keys(inputRef).every((ref) => !inputRef[ref].message);
  return isValid;
}