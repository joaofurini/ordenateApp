

class ConvidadosController {

    async ordenate(req, res) {


        return res.json({ ok: "true" }).status(200);
    }

}

module.exports = new ConvidadosController();