function printWindow() {
  // Get the content of the form
  var formContent = document.getElementById('element').outerHTML;

  // Open a new window
  var printWindow = window.open('', '_blank');

  // Write the content to the new window
  printWindow.document.write('<html><head><title>Print</title></head><body>');
  printWindow.document.write(formContent);
  printWindow.document.write('</body></html>');
  printWindow.document.close();

  // Use a timeout to ensure that the content is loaded before printing
  setTimeout(function () {
    // Trigger the print dialog
    printWindow.print();
    // Close the new window after printing
    printWindow.close();
  }, 500);
}
    
