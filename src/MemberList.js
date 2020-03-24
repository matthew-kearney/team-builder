import React, { useState } from "react";

const MemberList = props => {
  const [member, setMember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
        
      <form onSubmit={handleSubmit}>
        <h2>Add New Member:</h2>
       
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={member.name}
          onChange={handleChanges}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={member.email}
          onChange={handleChanges}
        />

        <label htmlFor="role">Role:</label>
        <input
          name="role"
          id="role"
          value={member.role}
          onChange={handleChanges}
        />

        <label htmlFor="addMember"></label>
        <button type="submit" id="addMember">
          {" "}
          Submit
        </button>
      </form>
       
    </div>
  );
};

export default MemberList;
