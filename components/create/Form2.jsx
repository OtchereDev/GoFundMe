import React,{useEffect, useState} from 'react'
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';


const Form2 = ({formData,setFormData, increaseStep}) => {
  const [loading,setLoading] = useState(false)
  const[imageUrl,setImageUrl] =useState("")
  const [image,setImage] = useState()

  function getBase64(img, callback) {
    setImage(img)
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        {
          setLoading(false)
          setImageUrl(imageUrl)
        }
       
      );
    }
  };

  const handleRemoveImage=()=>{
    setImageUrl()
    setImage()
  }

  const handleNext=()=>{
    const data = {
      image,
      imageUrl
    }
    setFormData(data)
    increaseStep()
  }

  const handleInit=()=>{
    setImageUrl(formData.imageUrl)
    setImage(formData.image)
  }

  useEffect(()=>{
    formData && handleInit()
  })

  return (
    <div>
      <p className='text-center text-lg font-semibold text-gray-900 my-4'>
        Upload A picture to support the fundraiser
      </p>
      <div className='w-full h-72 relative border flex justify-center items-center rounded-md'>
        {
          imageUrl?.length>0 ?
          
          <div className='w-full h-full overflow-hidden'>
            <img src={imageUrl} className='object-contain h-full w-full' alt="avatar"  /> 
          </div>
          :
          <ImgCrop>
            <Upload
              onChange={handleChange}
              name='Postion Your Photo'
              >
              {imageUrl ? <img src={imageUrl} className='w-full' alt="avatar"  /> :"+Add Image"}
              
            </Upload>
          </ImgCrop>
        }
      </div>
      <div>

      {
        imageUrl?.length > 0
        &&
        <>
        
          <div className='my-2'>
            <button onClick={handleRemoveImage} className='w-full text-lg font-semibold bg-red-400 py-3 text-gray-50 rounded-md '>
              Change Picture
            </button>
          </div>
          <div className='my-2'>
            <button onClick={handleNext} className='w-full text-lg font-semibold outline-none bg-primary_green py-3 text-gray-50 rounded-md '>
              Next
            </button>
          </div>
        </>
      }


      </div>
    </div>
  )
}

export default Form2
