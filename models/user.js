import { Schema, model, models } from 'mongoose';

// Define the User schema
const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists!'],
      required: [true, 'Email is required!'],
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address!'],
      trim: true,
      index: true, // Index for faster queries
    },
    username: {
      type: String,
      required: [true, 'Username is required!'],
      match: [
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        'Username invalid, it should contain 8-20 alphanumeric characters and be unique!',
      ],
      trim: true,
      unique: true, // Ensuring the username is unique
    },
    image: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(http|https):\/\/[^ "]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create or retrieve the model
const User = models.User || model('User', UserSchema);

export default User;
