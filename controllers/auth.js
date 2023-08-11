const login = (req, res) => {
  try {
    //req ---- client
    // res ---- servidor
    const { name, email, password } = req.body;

    return res.status(401).send(`${name}` + `${email}`);
  } catch (error) {}
};

module.exports = {
  login,
};
