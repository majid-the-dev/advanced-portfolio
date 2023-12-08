import { Post } from "@/models/Post";
import mongoose from "mongoose"

export const POST = async (req) => {
    mongoose.connect(process.env.MONGO_URL);
    const { heading, content, category, image } = await req.json();
    const PostsDoc = Post.create({ heading, content, category, image });
    return Response.json(PostsDoc)
};

export const GET = async () => {
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(
        await Post.find()
    )
};

export const DELETE = async (req) => {
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");
    await Post.deleteOne({_id});
    return Response.json(true);
};

export const PUT = async (req) => {
    mongoose.connect(process.env.MONGO_URL);
    const { id, ...editedData } = await req.json();
    await Post.findByIdAndUpdate(id, editedData);
    return Response.json(true);
};