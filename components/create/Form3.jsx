import React,{useState,useRef} from 'react'

import { useEffect } from 'react';

const Form3 = () => {

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
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setEditorData(data)
            } }
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
          <button className='w-full text-lg font-semibold bg-primary_green py-3 text-gray-50 rounded-md '>
            Submit
          </button>
        </div>
      }

    </div>
  )
}

export default Form3
