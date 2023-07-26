import React from 'react';
import { type User } from 'next-auth';
import { type AvatarProps } from '@radix-ui/react-avatar';

interface Props extends AvatarProps {
    user: Pick<User, 'name' | 'image'>;
}

const UserAvatar = (props: Props) => {
    return <div>UserAvatar</div>;
};

export default UserAvatar;
