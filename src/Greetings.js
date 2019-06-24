import React from "react";
import ReactDOM from 'react-dom';

const Greetings = ({ firstName, lastName }) => (
    <div>
        Hey you! {firstName} {lastName}!
    </div>
);

export default Greetings;