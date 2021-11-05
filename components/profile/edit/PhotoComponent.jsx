import React,{useEffect, useState} from 'react'
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';

const PhotoComponent = ({imgUrl,setFormData}) => {

  const [loading,setLoading] = useState(false)
  const[imageUrl,setImageUrl] =useState(imgUrl ? imgUrl : "")
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



  return (
    <div className='px-3 md:px-10 lg:px-40 pt-5 bg-gray-100'>
      <p className='text-center text-lg font-semibold text-gray-900 my-4'>
        Update the picture to support the fundraiser
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


      <div className='my-2'>
        <button onClick={handleRemoveImage} className='w-full text-lg font-semibold bg-red-400 py-3 text-gray-50 rounded-md '>
          Change Picture
        </button>
      </div>


      </div>
    </div>
  )
}

export default PhotoComponent
