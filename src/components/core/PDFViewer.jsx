import { useState } from "react";
import { Center, Container, VStack } from "@chakra-ui/react";
import { Document, Page } from "react-pdf";

function PdfViewer({ pdfFile }) {
  const [numPages, setNumPages] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container maxW="container.xl">
      <VStack
        as={Document}
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                key={page}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            );
          })}
      </VStack>
    </Container>
  );
}

export default PdfViewer;
