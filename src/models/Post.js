import { Schema, model, models } from "mongoose";

const PostSchema = new Schema ({
    heading: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Post = models?.Post || model('Post', PostSchema);