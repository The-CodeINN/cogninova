import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvartar = () => {
  const { user } = useUser();
  return (
    <Avatar className='h-8 w-8'>
      <AvatarImage
        src={user?.profileImageUrl}
        alt="User Avatar"
        className='rounded-full'
      />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

