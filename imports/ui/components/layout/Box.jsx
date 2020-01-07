import React, { useState, useEffect } from 'react';

const Box = (props) => {

    return (
        <div className={props.className ? props.className + " flex" : "flex flex-row align-center justify-center flex-wrap"}>
            {props.children}
        </div>
    );
    
}

export default Box;