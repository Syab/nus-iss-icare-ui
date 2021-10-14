import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function ClaimDropZone() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag and drop some files here, or click to select files</p>
            }
        </div>
    )
}
