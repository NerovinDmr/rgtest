"use client";
import { fetchPostItem } from "@/app/api/api";
import { Loading, PostItem } from "@/components";
import { Post } from "@/app/types/postTypes";
import { usePathname } from "next/navigation";
import React from "react";

const dateils: React.FC = () => {
  const pathname: string = usePathname();
  const [postItem, SetPostItem] = React.useState<Post[]>([]);
  const [isloaded, setisLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPostItem(pathname);
      SetPostItem([data]);
      setisLoaded(true);
    };
    fetchData();
  }, []);
  return <div>{!isloaded ? <Loading /> : <PostItem data={postItem} />}</div>;
};

export default dateils;
