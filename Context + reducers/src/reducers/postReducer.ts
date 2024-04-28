import { Post } from "@/app/types/Post";
import { title } from "process";

type AddAction = {
    type: 'add',
    payload: {
        title: string;
        body: string
    }
}

type removeAction = {
    type: 'remove';
    payload: {
        id: number
    }
}

export type PostActions = AddAction | removeAction

export const PostReducer = (posts: Post[], action: PostActions) => {
    switch(action.type) {
        case 'add':
            return [...posts, {
                id: posts.length,
                title: action.payload.title,
                body: action.payload.body
            }]
        case 'remove':
            return posts.filter(post => post.id !== action.payload.id)
            default:
                return posts
    }
}