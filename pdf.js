document.getElementById('showPdf').addEventListener('click', function() {
    var url = 'assets/pdf/verbes_irreguliers.pdf';

    // Charger le PDF avec PDF.js
    pdfjsLib.getDocument(url).promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale });

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            page.render(renderContext).promise.then(function() {
                var pdfViewer = document.getElementById('pdfViewer');
                pdfViewer.innerHTML = ''; // Efface le contenu précédent
                pdfViewer.appendChild(canvas);
            });
        });
    }).catch(function(error) {
        console.error('Erreur lors du chargement du PDF:', error);
    });
});