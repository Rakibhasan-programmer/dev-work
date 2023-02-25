import React from 'react';
import UserCard from '../UserCard/UserCard';

const UserPackage = () => {
    const value = [
        {name: "Bronze", mBalance: "501$-800$", id: 1, isActive: false},
        {name: "Bronze", mBalance: "501$-800$", id: 2, isActive: true},
        {name: "Silver", mBalance: "801$-1000$", id: 3, isActive: true},
        {name: "Platinum", mBalance: "301$-500$", id: 4, isActive: true},
        {name: "Gold", mBalance: "501$-800$", id: 5, isActive: true},
        {name: "Diamond", mBalance: "801$-1000$", id: 6, isActive: true}
    ];
    return (
        <div className='grid grid-row md:grid-cols-2 lg:grid-cols-3 gap-10 px-24 py-24'>
            {
                value.map((item) => <UserCard data={item} key={item.id} />)
            }
        </div>
    );
};

export default UserPackage;