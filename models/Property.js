import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: String,
      },
    },

    beds: {
      type: Number,
      reuqired: true,
    },

    baths: {
      type: Number,
      reuqired: true,
    },

    square_feet: {
      type: Number,
      reuqired: true,
    },

    amenities: [
      {
        type: String,
      },
    ],

    rates: {
      nightly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },

    selleer_info: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },

    images: [{ type: String }],

    is_Featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Property = model.Property || model("Property", PropertySchema);
