const { Scehma, model } = require("mongose");
const validator = require("validator");

//Schema to create User model

const userSchema = new Scehma({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  },

  //referenc the Thought model
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],

  //self-reference
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  toJSON: {
    virtuals: true,
  },
  id: false, //don't return the id of the elements
});

//virtual friendCount to get the length of the user's friends array
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
