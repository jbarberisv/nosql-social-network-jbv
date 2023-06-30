const router = require('express').Router();
const userRoutes = require('./ user-routes');
console.log(userRoutes);
router.use('/users', userRoutes);

module.exports = router;