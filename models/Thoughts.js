const { Schema, model, Types } = require('mongoose');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => createdAtVal
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
