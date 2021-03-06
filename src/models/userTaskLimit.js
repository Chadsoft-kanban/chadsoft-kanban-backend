const mongoose = require('mongoose');

const UserTaskLimitSchema = mongoose.Schema(
  {
    userTaskLimit: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const UserTaskLimit = mongoose.model('UserTaskLimit', UserTaskLimitSchema);

module.exports = UserTaskLimit;
