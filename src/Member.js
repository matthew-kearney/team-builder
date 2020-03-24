import React, { useState } from "react";

const Member = props => {
    const [editable, setEditable] = useState(false);
    return (
        <div>
            <h4>Matthew Kearney</h4>
            <p>Matthew.keareny816@gmail.com</p>
            <p>Full Stack Developer</p>


            {props.member.map(member => (
                <div>
                    <h4>{member.name}
                        contentEditable={editable}
                    </h4>
                    <p>{member.email}
                        contentEditable={editable}
                    </p>
                    <p>{member.role}
                        contentEditable={editable}
                    </p>
                    <button onClick={() => { setEditable(true); }}>
                    Edit 
                    </button>
                    <button onClick= {() => {setEditable(false);}}>
                        Save
                    </button>
           </div>
            ))}

        </div>
    );
};

export default Member; 