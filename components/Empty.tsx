import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = () => {
  return (
    <div className='h-full p-20 flex flex-col justify-center items-center'>
      <div className='relative h-72 w-72'>
        <Image alt='empty' src="/empty.png" fill />
      </div>
    </div>
  );
};
