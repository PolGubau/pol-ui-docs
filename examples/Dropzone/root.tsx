const code = `
import { Dropzone, FileList} from "pol-ui";
import React,{useState} from "react";

const DropzoneComponent = () => {
  const [files, setFiles] = useState<File[]>([])
  // Create handler for dropzone's onFilesDrop:
  const onFilesDrop = useCallback(
    (newFiles: File[]) => {
      setFiles([...files, ...newFiles])
    },
    [files],
  )

  return (
    <Dropzone onFilesDrop={onFilesDrop}>
      <h2>Drop your files here</h2>

      {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}

      {/* Render the file list */}
      <FileList files={files} setFiles={setFiles} />
    </Dropzone>
  )
};
export default DropzoneComponent;
`;
export default code;
