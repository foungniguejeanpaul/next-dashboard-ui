import UserCard from "@/components/UserCard";
import React from "react";

interface Props {}

const AdminPage = (props: Props) => {
  return (
    <div className="flex flex-col p-4 gap-4 md:flex-row">
      {/* LEFT SIDE CONTENT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="parent" />
          <UserCard type="teacher" />
          <UserCard type="staff" />
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
