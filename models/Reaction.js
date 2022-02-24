const { Schema, model } = require("mongoose");

const reactionSchema = new Scehma({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get() {
      const date = new Date();
      return date.toLocaleString();
    },
  },
});

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
