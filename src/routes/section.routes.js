const { StatusCodes } = require('http-status-codes');

const { createSection, deleteSection, updateSection } = require('../controllers/section.controllers');
const Section = require('../models/section');

const sectionRouter = (router) => {
  router.post('/sections', async (req, res) => {
    const response = await createSection(req.body);
    if (response.status === 'invalid') {
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    return res.status(StatusCodes.CREATED).json(response);
  });

  router.put('/sections/:id', async (req, res) => {
    const response = await updateSection(req.body, req.params.id);

    if (response.status === 'invalid') {
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    return res.status(StatusCodes.OK).json(response);
  });

  router.delete('/sections/:id', async (req, res) => {
    const response = await deleteSection(req.params.id);

    if (response.status === 'invalid') {
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    return res.status(StatusCodes.OK).json(response);
  });

  router.get('/sections', async (req, res) => {
    try {
      const section = await Section.find();
      res.status(200).json(section);
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  });
};

module.exports = sectionRouter;
