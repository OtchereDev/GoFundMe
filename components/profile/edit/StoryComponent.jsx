import React from 'react'
import { useEffect,useRef,useState } from 'react';

const StoryComponent = ({formData}) => {
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
    <div className='px-3 md:px-10 lg:px-40 pt-5 bg-gray-100 overflow-hidden'>
      <h5 className='text-md mb-4'>
        Story
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
    </div>
  )
}

export default StoryComponent
