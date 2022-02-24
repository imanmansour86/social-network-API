const { Scehma, model } = require("mongose");

const thoughtSchema = new Scehma({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionsSchema],
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
