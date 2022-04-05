 // Testowy endpoint
const photoRouter = (router) => {
  router.get('/photos', (req, res) => {
    res.json({
      message: 'Hello World',
    });
  });
};

module.exports = photoRouter;
