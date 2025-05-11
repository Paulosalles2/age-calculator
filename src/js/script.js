document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault(); // evita que o form recarregue a página
    calculateAge();
  });
  
  function calculateAge() {
    const day = Number(document.getElementById('day').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2022) {
        alert('Please enter a valid date.');
        return;
      }
  
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
  
    let ageDay = currentDay - day;
    let ageMonth = currentMonth - month;
    let ageYear = currentYear - year;
  
    if (ageDay < 0) {
      ageDay += 30;
      ageMonth -= 1;
    }
  
    if (ageMonth < 0) {
      ageMonth += 12;
      ageYear -= 1;
    }
  
    // Atualiza os elementos no HTML
    document.getElementById('years').textContent = ageYear;
    document.getElementById('months').textContent = ageMonth;
    document.getElementById('days').textContent = ageDay;
  }

 
  