const {Router} = require('express');
const UserService = require('../services/user');
const {auth} = require('../middlewares');

const router = Router();

router.get('/', async (req, res) => {
  return res.status(200).send({
    message: 'Hello world'
  })
});

router.get('/clients', async (req, res) => {
  const result = await UserService.getClients();
  res.status(200).send({success: true, result});
});

router.get('/admins', auth, async (req, res) => {
  const result = await UserService.getAdmins();
  res.status(200).send({success: true, result});
});

module.exports = router;