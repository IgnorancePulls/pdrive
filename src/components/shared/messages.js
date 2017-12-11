import React  from 'react';

const MessageComponent = ({text, className}) => {
    return (
        <p className={className}>{text}</p>
    )
};

export default MessageComponent;