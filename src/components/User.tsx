import React, { useState } from 'react';

type UserType = {
    username: string;
    email: string;

}

const User = () => {

    const [user, setUser] = useState<UserType>({} as UserType);

    return (
        <div>
            <h1>{user.username}</h1>
        </div>
    );
};

export default User;