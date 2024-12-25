function showMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!gender) {
    alert("Будь ласка, виберіть стать.");
    return false;
  }

  let message = `Форма успішно відправлена!\n`;
  message += `Ім'я: ${name}\n`;
  message += `Електронна пошта: ${email}\n`;
  message += `Стать: ${gender.value}`;

  alert(message);

  return true;
}
