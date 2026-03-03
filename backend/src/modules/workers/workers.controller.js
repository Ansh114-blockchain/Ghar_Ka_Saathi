import * as workerService from './workers.service.js';

export const listWorkers = (req, res) => {
  const workers = workerService.listWorkers(req.query);
  return res.json(workers);
};
