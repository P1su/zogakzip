interface MemoryType {
  id?: number;
  nickname: string;
  title: string;
  imageUrl: string;
  tags: string[];
  location: string;
  moment: string;
  isPublic: boolean;
  likeCount?: number;
  commentCount?: number;
  createdAt?: string; 
  content: string;
  postPassword: string;
  groupPassword?: string;
}

export default MemoryType;