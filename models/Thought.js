const { Schema, model } = require("mongoose");
const reactionsSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        return date.toLocaleString("en-US", {
          weekday: "short", // long, short, narrow
          day: "numeric", // numeric, 2-digit
          year: "numeric", // numeric, 2-digit
          month: "long", // numeric, 2-digit, long, short, narrow
          hour: "numeric", // numeric, 2-digit
          minute: "numeric", // numeric, 2-digit
          second: "numeric", // numeric, 2-digit
        });
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionsSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false, //don't return the id of the elements
  }
);

//virtual friendCount to get the length of the user's friends array
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
