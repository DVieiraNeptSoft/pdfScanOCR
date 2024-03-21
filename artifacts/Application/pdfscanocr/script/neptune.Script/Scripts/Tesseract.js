async function beginOCR(currImg) {
    const worker = window.Tesseract;

    const innerWorker = await worker.createWorker("eng");

    (async () => { //start the OCR handling
        const {
            data: { text },
        } = await innerWorker.recognize(currImg);        

        await innerWorker.terminate();

        oButtonOCROpen.setVisible(true);
        oButtonPDFOpen.setVisible(true);

        sap.m.MessageToast.show("PDF Scanned Successfully");

        return text;
    })()
        .then((text) => {
            // Handle success
            console.log(text);

            ocrObj = {};

            ocrObj.ocrPage = currPage;
            ocrObj.ocr = text;

            ocrArray.push(ocrObj);

            modeloCarousel.setData(ocrArray);
            modeloCarousel.refresh();

            fill_fieldsFromOCR(ocrArray[0]); //fill example fields with data of the first page captured from the OCR

            currPage++;

            sap.ui.core.BusyIndicator.hide();
        })
        .catch((error) => {
            // Handle error
            console.error(error);
        });
}
