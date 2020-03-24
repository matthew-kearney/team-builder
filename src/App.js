import React, { useState } from "react";
import "./App.css";
import Member from "./Member";
import MemberList from "./MemberList";

function App() {
  const [member, setMember] = useState([]);

  const addNewMember = memberInfo => {
    const newMember = {
      id: Date.now(),
      name: memberInfo.name,
      email: memberInfo.email,
      role: memberInfo.role
    };
    setMember([...member, newMember]);
  };

  return (
    <div>
      <h1>Team</h1>
      <Member member={member} />
      <MemberList addNewMember={addNewMember} />
    </div>
  );
}

export default App;
