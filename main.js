document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("#submit");
    const wynik = document.querySelector(".wynik_f");
  
    btn.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Pobierz dane z formularza
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const message = document.getElementById("message");
  
      // Utwórz listę, jeśli jeszcze nie istnieje
      let ul = wynik.querySelector("ul");
      if (!ul) {
        ul = document.createElement("ul");
        wynik.appendChild(ul);
      }
  
      // Utwórz nowy element listy
      const lista = document.createElement("li");
        lista.innerHTML = `
        <strong>Imię:</strong> ${name.value}<br>
        <strong>Email:</strong> ${email.value}<br>
        <strong>Telefon:</strong> ${phone.value}<br>
        <strong>Wiadomość:</strong><br>
        <em>${message.value}</em>
`;
  
      // Dodaj do wyniku
      ul.appendChild(lista);

      lista.addEventListener(`click`, function(){
        this.remove()
      })
    });
  });