const fs = require('fs/promises');
const handlebars = require('handlebars');

const compiladorHTML = (arquivo, contexto) => {
    const html = fs.readFile(arquivo);
    const compilador = handlebars.compile(html.toString());
    const htmlString = compilador(contexto);

    return htmlString;
}

module.exports = compiladorHTML;