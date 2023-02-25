import React from 'react';

const UserCard = (props) => {
    const {name, mBalance, isActive} = props.data;
    
    return (
        <>
            <div className={`card rounded-3xl overflow-hidden bg-violet-300 w-full shadow-xl text-center pb-6 ${isActive ? '' : 'invisible'}`}>
                <figure></figure>
                <div className="card-body p-0">
                    <h2 className="text-4xl font-bold bg-violet-400 py-6">{name}</h2>
                    <p className='text-2xl font-semibold'>Monthly Balance</p>
                    <p>{mBalance}</p>
                    <p>(Per Doller - 126 tk)</p>
                </div>
            </div>  
        </>
    );
};

export default UserCard;