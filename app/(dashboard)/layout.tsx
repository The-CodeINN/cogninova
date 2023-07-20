import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
        <Sidebar />
      </div>
      <main className='md:pl-72'>
        <NavBar />
        {children}
      </main>
      {/* <div className="min-h-screen pt-24 pb-6 w-full px">
        <div className='bg-green-900 z-20 top-0'>hhh</div>
      </div> */}
    </div>
  );
};

export default DashBoardLayout;
