

class ConvidadosController {

    async ordenate(req, res) {


        var i;

        const { convidados } = req.body

        let convidadosLista = convidados.replace(/_/g, ' ').split(',');


        const ordenados = convidadosLista.sort()


        return res.json({ ordenados }).status(200);
    }

}

module.exports = new ConvidadosController();
