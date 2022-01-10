const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    // TODO: create username field
    username: {
      type: String,
      required: true
    },
    // TODO: create email field
    email: {
      type: String,
      required: true
    },
    
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
