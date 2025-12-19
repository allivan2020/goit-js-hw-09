const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const name = event.target.name;
  const value = event.target.value.trim();

  formData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);
  form.elements.email.value = parsedData.email || '';
  form.elements.message.value = parsedData.message || '';

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();

  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';
}
