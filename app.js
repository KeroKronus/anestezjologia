function generatePDF() {
  const element = document.getElementById("printArea");

  html2pdf().set({
    margin: 5,
    filename: 'karta_anestezjologiczna.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).from(element).save();
}
