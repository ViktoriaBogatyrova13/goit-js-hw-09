const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';


let formData = {
  email: '',
  message: '',
};

function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);

   
    if (formData.email) {
      emailInput.value = formData.email;
    }
    if (formData.message) {
      messageInput.value = formData.message;
    }
  }
}


form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim(); 
  saveFormData();
});


form.addEventListener('submit', event => {
  event.preventDefault();

 
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

 
  console.log(formData);


  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
});

loadFormData();
