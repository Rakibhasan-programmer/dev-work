import React from 'react';

const AdminCard = (props) => {
    const {name, mBalance, isActive, bgColor, bgColorBody} = props.data;
    
    return (
        <>
            <div style={{backgroundColor: `${bgColorBody}`}} className={`card rounded-3xl overflow-hidden w-full shadow-xl text-center pb-6 ${isActive ? '' : 'invisible'}`}>
                <figure></figure>
                <div className="card-body p-0">
                    <h2 style={{backgroundColor: `${bgColor}`}} className={`text-4xl font-bold py-6`}>{name}</h2>
                    <p className='text-2xl font-semibold'>Monthly Balance</p>
                    <p>{mBalance}</p>
                    <p>(Per Doller - 126 tk)</p>
                </div>
            </div>   
        </>
    );
};

export default AdminCard;