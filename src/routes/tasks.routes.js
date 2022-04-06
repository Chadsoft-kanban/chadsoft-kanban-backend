import { StatusCodes } from 'http-status-codes';

import { addUser, createTask, deleteUser, deleteTask, updateTask } from '../controllers/task.controllers';

export const taskRouter = (router) => {
  router.post('/tasks', async (req, res) => {
    const response = await createTask(req.body);
    if (response.status === 'invalid') {
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    return res.status(StatusCodes.CREATED).json(response);
  });

  router.put('/tasks/:id', async (req, res) => {
    const response = await updateTask(req.body, req.params.id);

    if (response.status === 'invalid') {
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    return res.status(StatusCodes.OK).json(response);
  });

  router.patch('/tasks/:id/addMember', async (req, res) => {
    const response = await addUser(req.body, req.params.id);

    if (response.status === 'invalid') {
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    return res.status(StatusCodes.OK).json(response);
  });

  router.patch('/tasks/:id/deleteMember', async (req, res) => {
    const response = await deleteUser(req.body, req.params.id);

    if (response.status === 'invalid') {
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    return res.status(StatusCodes.OK).json(response);
  });

  router.delete('/tasks/:id', async (req, res) => {
    const response = await deleteTask(req.params.id);

    if (response.status === 'invalid') {
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    return res.status(StatusCodes.OK).json(response);
  });
};
