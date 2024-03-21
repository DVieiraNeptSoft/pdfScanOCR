sap.ui.core.BusyIndicator.hide();
var imgArray = xhr.responseJSON;

if (imgArray.length > 0) {
    sap.ui.core.BusyIndicator.show(0);

    //Going throw each pdf page converted into an image
    console.log("Converted PDF pages to Images:");
    console.log(imgArray);

    sap.m.MessageToast.show("OCR has begun...");

    ocrArray = [];

    currPage = 1;

    for (let i = 0; i < imgArray.length; i++) {
        beginOCR(imgArray[i].img);
    }
} else {
    sap.m.MessageToast.show("Error converting PDF to Image  !");
}
