import { Schema, model, models } from 'mongoose';

// Define the Prompt schema
const PromptSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Creator is required.'],
      index: true, // Index for faster queries
    },
    prompt: {
      type: String,
      required: [true, 'Prompt is required.'],
      trim: true, // Remove whitespace from both ends
      maxlength: [500, 'Prompt cannot be more than 500 characters.'],
    },
    tags: {
      type: [String],
      required: [true, 'Tags are required.'],
      trim: true,
      validate: {
        validator: function (v) {
          return v.length > 0; // Ensure at least one tag is provided
        },
        message: 'At least one tag is required.',
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create or retrieve the model
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;
