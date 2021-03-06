import React from 'react';


const Card = ({name, id, email}) => {
   
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='myrobot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name} Robot</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;