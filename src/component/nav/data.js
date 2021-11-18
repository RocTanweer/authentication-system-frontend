import { FaUserCircle } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

export const profileActions = [
  {
    icon: <FaUserCircle size={16} />,
    name: "My Profile",
    href: "/profile",
    id: 1,
  },
  {
    icon: <FaUserFriends size={16} />,
    name: "Group Chat",
    href: "/chat",
    id: 2,
  },
];
