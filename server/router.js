const router = require('express').Router();
const topics = require('./controllers/topics');

router.get('/topics', topics.getAllTopics);

router.post('/topics', topics.postTopic);

router.delete('/topics/:id', topics.deleteTopic);

router.put('/topics/:id/:vote', topics.voteOnTopic);

module.exports = router;
