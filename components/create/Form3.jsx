import React,{useState,useRef} from 'react'

import { useEffect } from 'react';

const Form3 = ({formData,setFormData, handleSubmit}) => {

  const [editorData,setEditorData] = useState("")
  
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  const toolbar= {
    items: [
        'heading', '|',
        'bold', 'italic', 
        'link', '|',
        'bulletedList', 'numberedList', 
         'blockQuote', '|',
        'undo', 'redo'
    ],
    shouldNotGroupWhenFull: true
  }

  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])

  const handleInit=()=>{
    setEditorData(formData.description)
  }

  useEffect(()=>{
    formData && handleInit()
  },[])

  
  const handleComplete=()=>{

    const data = {
      description:editorData
    }

    setFormData(data)
    setFormData(formData+" ")
    handleSubmit()
  }

  const handleEditorInput=( event, editor ) => {
    const data = editor.getData();
    setEditorData(data)
    const formData = {
      description:editorData
    }

    setFormData(formData)
  } 


  return (
    <div>
      <h3 className='my-4 text-2xl font-semibold text-gray-900 text-center'>
        Tell Your Story
      </h3>

      <h5 className='text-center text-md mb-4'>
        Explain who you are and why you are raising funds (Atleast 50 words)
      </h5>

      {CKEditor ? (
          <CKEditor
            editor={ClassicEditor}
           
            data={editorData}
            onChange={ handleEditorInput}
            config={{toolbar}}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
              editor.editing.view.change((writer) => {
              writer.setStyle(
                  "height",
                  "200px",
                  editor.editing.view.document.getRoot()
              );
              });
          }}
          />
        ) : (
          <div>Editor loading</div>
        )
      }

      {
        editorData.length > 10
        &&
        <div className='my-2'>
          <button onClick={handleComplete} className='w-full text-lg font-semibold bg-primary_green py-3 text-gray-50 rounded-md '>
            Submit
          </button>
        </div>
      }

    </div>
  )
}

export default Form3
