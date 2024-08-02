
import { X as XIcon, Upload } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { toast } from 'sonner';
export default function  Modal  ({active=true,fun}) {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile.name);
  
      const formdata = new FormData();
      formdata.append("file", selectedFile);
  
      try {
        const response = await fetch('http://localhost:8080/upload', {
          method: 'POST',
          body: formdata,
        });
  
        if (response.ok) {
          console.log('File uploaded successfully');
          toast.info('You can find the file in /uploads folder in the go directory Thank you  ',{
            duration: 2000,
            position: 'top-right',

          });
          toast.success('File uploaded successfully',{
            duration: 2000,
            position: 'top-right',
          });
          
          
        } else {
          console.error(' File upload failed:', response.statusText);
            toast.error('Oops  File upload failed .Make Sure it is running',{
            duration: 2000,
            });
          
        }
      } catch (error) {
        console.error('Error during file upload:', error);
        toast.error('Oops  File upload failed .Make Sure it is running',{
            duration: 2000,
            });
      
      }
  
     
      setSelectedFile(null);
    }
  };
  return (
    <div className={`fixed z-30 w-full h-full ${!active ? "hidden" : "filter backdrop-blur-sm backdrop-brightness-50"}`}>
    <div className='md:h-1/2  z-50 w-[93%] relative top-[20%] rounded-xl m-auto bg-white'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='text-2xl font-bold'>Upload Files</h1>
        <button onClick={fun} className='bg-black hover:bg-red-600 text-white p-1 rounded-full'>
          <XIcon />
        </button>
      </div>
      
      <div className='p-4 capitalize'>
        Files Uploaded here are sent to Go API that I have created in the backend task
      </div>

      <div className='p-4'>
        <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center'>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label htmlFor="fileInput" className='cursor-pointer'>
            <Upload className='mx-auto mb-4  ' size={48} />
            <p>Click to upload File</p>
            <p className='text-sm text-gray-500'>All file types are accepted</p>
          </label>
        </div>
        {selectedFile && (
          <div className='mt-4'>
            <p>Selected file: <p className='underline inline cursor-pointer'>{selectedFile.name}</p></p>
            <button 
              onClick={handleUpload}
              className='mt-2 bg-black animate-bounce hover:animate-none transition-all duration-700 text-white px-4 py-2 rounded hover:bg-gray-800'
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}
