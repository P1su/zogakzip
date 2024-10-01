interface GroupType {
  id: number;
  name: string;
  imageUrl: string;
  isPublic: boolean;
  likeCount: number;
  badgeCount: number;
  postCount: number;
  createdAt: string; // ISO 8601 포맷
  introduction: string;
}

export default GroupType;