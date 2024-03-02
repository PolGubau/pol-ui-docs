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
    <Dropzone onFilesDrop={onFilesDrop} multiple={false}>
    <h2>You can only take 1 file as MULTIPLE is setted to false</h2>
    <FileList files={files} setFiles={setFiles} />
  </Dropzone>
  )
};
export default DropzoneComponent;
`;
export default code;
