app.get("/contatos", async (req, res) => {
    const contatos = await app.db("contatos").select("*");
    res.json(contatos);
  });
  
  app.put("/contatos/:id", async (req, res) => {
    const { nome, email, telefone } = req.body;
    await app.db("contatos").where({ id: req.params.id }).update({ nome, email, telefone });
    res.send("Contato atualizado!");
  });
  
  app.delete("/contatos/:id", async (req, res) => {
    await app.db("contatos").where({ id: req.params.id }).del();
    res.send("Contato excluído!");
  });
  