 export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  export  interface ReqParams {
    _limit: number;
    _start: number;
  }