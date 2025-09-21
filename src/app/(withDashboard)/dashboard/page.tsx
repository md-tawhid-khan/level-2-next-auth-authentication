import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {

  const session= await getServerSession()

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome <span className="text-blue-500">{session?.user?.name}</span></h1>

      <h2 className="text-4xl text-center mt-10">email address : {session?.user?.email}</h2>
        {session?.user?.image &&
        <Image className="rounded-full mx-auto mt-10"  src={session?.user?.image } height={100} width={100} alt="No Image"/>
        }
    </div>
  );
};

export default DashboardPage;
