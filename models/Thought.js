const { Schema, model } = require("mongoose");
const reactionsSchema = require('./Reaction');

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
      default:  Date.now,
     get () {
       return new Date().toISOString()
     }
    
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
