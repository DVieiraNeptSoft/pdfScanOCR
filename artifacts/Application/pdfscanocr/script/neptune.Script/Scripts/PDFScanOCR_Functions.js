var ocrObj = {},
    ocrArray = [];

function sendEmailPosting() {
    var filename = "InvoiceNr" + modeloSimpleFormUpload.oData.EBELN + ".pdf";

    var options = {
        data: {
            GS_INVOICE: {
                EBELN: modeloSimpleFormUpload.oData.EBELN,
                BELNR: materialDocument,
                ZTOTAL: modeloSimpleFormUpload.oData.ZTOTAL,
            },

            attachments: { filename: filename, data: fileContent },
        },
    };

    apiRestAPISendEmailPosting(options);
}

function sendEmailException() {
    sap.ui.core.BusyIndicator.show(0);

    var filename = "InvoiceNr" + modeloSimpleFormUpload.oData.EBELN + ".pdf";

    var options = {
        data: {
            GS_INVOICE: {
                EBELN: modeloSimpleFormUpload.oData.EBELN,
                BELNR: materialDocument,
                ZTOTAL: modeloSimpleFormUpload.oData.ZTOTAL,
            },

            attachments: { filename: filename, data: fileContent },
        },
    };

    apiRestAPISendEmailException(options);
}
