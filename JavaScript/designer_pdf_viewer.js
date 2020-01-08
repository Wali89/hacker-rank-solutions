function designerPdfViewer(h, word) {
    
    var heights=[],
    i=0;


    for(i=0;i<word.length;i++) {
        heights.push(h[word[i].charCodeAt(0) - 97])
    }
    return Math.max(...heights)*word.length
}
