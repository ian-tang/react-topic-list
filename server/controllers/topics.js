const db = require('../db');

(async function initDb () {
  try {
    await db.sequelize.sync();
  } catch (err) {
    console.error(err);
  }
})();

module.exports = {
  
  async getAllTopics(req, res) {
    try {
      const topics = await db.Topic.findAll({});
      res.send(topics);
      res.status(200);
    } catch (e) {
      console.error(e);
      res.status(500);
    }
  },

  async postTopic(req, res) {
    try {
      await db.Topic.create({
        title: req.body.title,
        score: 0,
      });
      res.status(201);
      res.send('created');
    } catch (e) {
      console.error(e);
      res.status(500);
    }
  },

  async deleteTopic(req, res) {
    try {
      await db.Topic.destroy({
        where: { id: req.params.id }
      });
      res.status(202);
      res.send('deleted');
    } catch (e) {
      console.error(e);
      res.status(500);
    }
  },

  async voteOnTopic(req, res) {
    try {
      const inc = req.params.vote === 'up' ? 1
        : req.params.vote === 'down' ? -1
        : 0;
      await db.Topic.increment({ score: inc }, { where: { id: req.params.id } });
      res.status(200);
      res.send(`voted ${inc}`);
    } catch (e) {
      console.error(e);
      res.status(500);
    }
  },

}
