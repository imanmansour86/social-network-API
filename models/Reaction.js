const { Schema, Types } = require("mongoose");

//reaction is schema only, will be used as the reaction field's subdocument schema in the Thought model.
const reactionSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
