const Column = require('../models/column');

const createColumn = async (data) => {
  try {
    const column = new Column(data);
    await column.save();

    return { data: column, message: 'Task was created' };
  } catch (err) {
    return { status: 'invalid', message: err };
  }
};

const updateColumn = async (data, id) => {
  try {
    const column = await Column.findOneAndUpdate(
      {
        _id: id,
      },
      data,
      { new: true }
    );
    if (!column) return { status: 'invalid', message: 'Column not found' };
    return { message: 'Updated' };
  } catch (err) {
    return { status: 'invalid', message: err };
  }
};

const deleteColumn = async (id) => {
  const column = await Column.findOneAndDelete({
    _id: id,
  });

  if (!column || !column._id) {
    return { status: 'invalid', message: 'Column was not found.' };
  }

  return { message: 'Column was deleted.' };
};

module.exports = { createColumn, updateColumn, deleteColumn };
