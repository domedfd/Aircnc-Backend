// PADRAO DA COMUNIDADE MVC
// index = lista todas as sessoes
// show = lista uma sessao
// store = cria uma sessao
// update = alterar uma sessao
// destroy = eliminar uma sessao

const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  },
};
