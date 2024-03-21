function pdfToBlob(base64EncodedPDF) {
    var decodedPdfContent = atob(base64EncodedPDF.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)[2]);
    var byteArray = new Uint8Array(decodedPdfContent.length);
    for (var i = 0; i < decodedPdfContent.length; i++) {
        byteArray[i] = decodedPdfContent.charCodeAt(i);
    }
    var blob = new Blob([byteArray.buffer], { type: "Application/pdf" });
    return URL.createObjectURL(blob);
}

function fill_fieldsFromOCR(text) {
    var arrayText = text.ocr.split("\n");

    //The example below shows how you can handle the OCR data-------
    // for (let i = 0; i < arrayText.length; i++) {
    //     if (arrayText[i].includes("PO:")) {
    //         poString = arrayText[i].split("PO: ");
    //     }
    //
    //     if (arrayText[i].includes("Total Amount:")) {
    //         totalAmountString = arrayText[i].split("Total Amount: ");
    //     }
    // }
    //--------------------------------------------------------------

    //Building Block generic OCR data handling----------------------
    var ocrData = {};
    ocrData.exOCR1 = arrayText[0];
    ocrData.exOCR2 = arrayText[1];
    ocrData.exOCR3 = arrayText[2];

    modeloSimpleFormExOCRFields.setData(ocrData);

    oSimpleFormExOCRFields.setVisible(true);
    //--------------------------------------------------------------
}
