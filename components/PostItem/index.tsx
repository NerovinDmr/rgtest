import { Post } from "@/app/types/postTypes";
import style from './style/style.module.scss'
import React from "react";
interface PostItemProps {
  data: Post[];
}
export const PostItem: React.FC<PostItemProps> = ({ data }) => {
  return (
    <div className={style.wrapp}>
      {data.map((postItem) => {
        return (
          <div className={style.postItem} key={postItem.id}>
            <div className={style.title}>{postItem.title}</div>
            <div className={style.text}>{postItem.body}</div>
          </div>
        );
      })}
    </div>
  );
};
