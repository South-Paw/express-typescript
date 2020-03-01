import { Router } from 'express';

const register = (router: Router) => {
  router.get('/health', (req, res) => {
    res.status(200);
    res.send({ status: 'OK' });
  });
};

export default { register };
