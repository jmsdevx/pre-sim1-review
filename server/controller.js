module.exports = {
  makePost: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const { username, post } = req.body;

    dbInstance
      .make_post([username, post])
      .then(response => res.status(200).json(response))
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
