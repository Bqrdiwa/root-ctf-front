import { useRef, useState, useEffect, useCallback } from "react";
import { useProtectedSubmit } from "./useProtectedSubmit";
import typeIs from "../../../utils/Tools/typeIs";

export const useUpload = (api, Id, name, onUpload, filesToUpload) => {

  const protect = useRef(false);
  const uploadProtect = useRef(false);
  const [files, setfiles] = useState(filesToUpload || []);

  const [upload, { submit_success: uploaded, response, errors }, uploading] = useProtectedSubmit(
    api,
    files[0],
    {
      params: {
        [name]: Id
      }
    }
  )

  // start uploading if any file exist and api not called
  useEffect(() => {
    if (files[0] && uploading === 0 && !uploadProtect.cuurent) {
      uploadProtect.current = true;
      upload()
    } else if (uploading > 0 && uploadProtect.cuurent) {
      uploadProtect.current = false;
    }
  }, [files, uploading])

  // update files when a response come
  useEffect(() => {
    if (uploaded && !protect.current) {
      setfiles((prevData) => {
        if (typeIs(onUpload, "Function")) {
          onUpload({ ...response, lastName: files[0].file.name });
        }
        return prevData.slice(1);
      });
    }
  }, [uploaded])

  // protect change state
  useEffect(() => {
    protect.current = false;
    return () => {
      protect.current = true;
    };
  }, [])

  // add new files
  const newFile = useCallback(
    (files) => {
      console.log("need to know if files are multiple", files)
      if (protect.current === false) {
        setfiles(prevFiles => [...prevFiles, ...files])
      }
    }, []
  )

  return [newFile, errors, files.length, uploading]

}