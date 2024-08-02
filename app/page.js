import EmployeeTable from "@/components/EmployeeTable";
import VideoPlayer from "@/components/VideoPlayer";
import { LucideArrowDown } from "lucide-react";


import Image from "next/image";

export default async function Home() {
  let data ;
  try {
    const response = await fetch('http://localhost:8080/employee');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
     data = await response.json();
    console.log(data)
 
} catch (err) {
    console.log(err.message);
}


  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
   
    <EmployeeTable data={data}></EmployeeTable>
    <h1 className="text-white text-2xl my-4 mb-8">HLS Video Player <LucideArrowDown className="inline" /></h1>
    <div className="w-[70%]">
      
      <VideoPlayer  />
    </div>
        
    </main>
  );
}
