import React from "react";
import { useSelector } from "react-redux";

export default function Username() {
  const userName = useSelector((select) => select.user.userName);

  if (!userName) return null;
  return <div className="text-sm font-semibold">{userName}</div>;
}
