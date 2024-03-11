"use client";
import axios from "axios";
import React from "react";
import style from "./style/styles.module.scss";
import { Post, ReqParams } from "@/app/types/postTypes";
import Link from "next/link";
import { fetchPosts } from "@/app/api/api";
import { Loading } from "..";

export const Posts: React.FC = () => {
  const [post, setPost] = React.useState<Post[]>([]);
  const [isloaded, setisLoaded] = React.useState<boolean>(false);
  const [params, SetParams] = React.useState<ReqParams>({
    _limit: 10,
    _start: 0,
  });
  const [page, setPage] = React.useState<number>(1);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts(params);
      setPost(data);
      setisLoaded(true);
    };

    fetchData();
  }, [params]);
  const handleNext: VoidFunction = () => {
    if (post.length > 0) {
      SetParams((prevParams) => ({
        ...prevParams,
        _start: prevParams._start + 10,
      }));
      setPage((prevPage) => prevPage + 1);
    }
  };
  const handlePrev: VoidFunction = () => {
    if (page > 1 && params._start >= 10) {
      SetParams((prevParams) => ({
        ...prevParams,
        _start: prevParams._start - 10,
      }));
      setPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <div className={style.posts}>
      {!isloaded ? (
        <Loading />
      ) : (
        <>
          {post.length > 0 ? (
            <ul className={style.postList}>
              {post.map((postItem) => {
                return (
                  <li key={postItem.id}>
                    <Link href={`/${postItem.id}`}>
                      <span>{postItem.title}</span>
                      <p>{postItem.body}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className={style.noData}>There is nothing else...</div>
          )}
        </>
      )}
      <div className={style.control}>
        <div className={style.btn} onClick={handlePrev}>
          Prev
        </div>
        <div className={style.pageNum}> {page}</div>
        <div className={style.btn} onClick={handleNext}>
          Next
        </div>
      </div>
    </div>
  );
};
