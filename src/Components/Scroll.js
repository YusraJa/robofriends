import React from 'react';

const Scroll = (props)=> {
    return(
            <div style={{overflow:'scroll', border:'5px solid rgba(7,27,82,1)', height:'800px' }}>
                {props.children}
            </div>
    );
};
export default Scroll;