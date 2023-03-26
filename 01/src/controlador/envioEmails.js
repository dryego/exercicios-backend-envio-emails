const { knex } = require('../conexao');
const compiladorHTML = require('../utils/compiladorHTML');
const transportador = require('./email');

const envioEmails = async (req, res) => {
    const { texto } = req.body;

    try {
        const emails = await knex('email');

        console.log(emails);

        //envio de email
        for (const email of emails) {

            const htmlNewsLetter = await compiladorHTML('./src/templates/newsletter.html', {
                usuario: email.nome,
                texto: texto
            })
            transportador.sendMail({
                from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
                to: `${email.nome} <${email.email}>`,
                subject: 'Atualizações e novidades',
                html: htmlNewsLetter
            });
        }

        return res.status(200).json('Emails enviados com sucesso.');

    } catch (error) {
        return res.status(500).json('Erro no servidor.')
    }

}
module.exports = {
    envioEmails
}