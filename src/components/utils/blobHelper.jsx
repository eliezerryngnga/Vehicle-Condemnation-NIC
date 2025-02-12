export const downloadPDF = (blob, title) => {
  let link = document.createElement("a");
  let url = window.URL.createObjectURL(blob);

  link.href = url;
  link.download = `${title}.pdf`; // Specify the filename for the downloaded file
  // Append the link to the document body
  document.body.appendChild(link);
  // Programmatically click the link to trigger the download
  link.click();

  // Remove the link element from the document
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const downloadPdfUrl = (url, title) => {
  let link = document.createElement("a");
  link.href = url;
  link.download = `${title}.pdf`; // Specify the filename for the downloaded file
  // Append the link to the document body
  document.body.appendChild(link);
  // Programmatically click the link to trigger the download
  link.click();

  // Remove the link element from the document
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
