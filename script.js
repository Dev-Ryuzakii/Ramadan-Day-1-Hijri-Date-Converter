document.getElementById('dateForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const gregorianDate = document.getElementById('gregorianDate').value;
    if (!gregorianDate) {
      alert('Please enter a valid date.');
      return;
    }
  
    // Reformat the date from YYYY-MM-DD to DD-MM-YYYY
    const [year, month, day] = gregorianDate.split('-');
    const formattedDate = `${day}-${month}-${year}`;
  
    // Call the API
    fetch(`https://api.aladhan.com/v1/gToH?date=${formattedDate}`)
      .then((response) => response.json())
      .then((data) => {
        const hijriDate = data.data.hijri;
        const formattedHijriDate = `${hijriDate.day} ${hijriDate.month.en} ${hijriDate.year}`;
        document.getElementById('hijriDate').textContent = formattedHijriDate;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        alert('An error occurred. Please try again.');
      });
  });