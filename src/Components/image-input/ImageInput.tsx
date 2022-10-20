import React, {createRef, useState} from 'react';
import {Cropper, ReactCropperElement} from "react-cropper";
import 'cropperjs/dist/cropper.css';
import './ImageInput.sass';

// this transforms file to base64
const file2Base64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString() || '');
    reader.onerror = (error) => reject(error);
  });
};


const ImageInput = () => {
    const fileRef = createRef<HTMLInputElement>();

    // the selected image
    const [uploaded, setUploaded] = useState(null as string | null);
  
    // the resulting cropped image
    const [cropped, setCropped] = useState(null as string | null);
  
    // the reference of cropper element
    const cropperRef = createRef<ReactCropperElement>();
  
    const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const file = e.target?.files?.[0];
      if (file) {
        file2Base64(file).then((base64) => {
          setUploaded(base64);
        });
      }
    }
  
    const onCrop = () => {
      const imageElement: any = cropperRef?.current;
      const cropper: any = imageElement?.cropper;
      setCropped(cropper.getCroppedCanvas().toDataURL())
      setUploaded(null)
    }
    
    return (
        <div className='mb-4 image-input'>
            <div className='image-input__avatar-wrapper mb-4'>
                {cropped ? 
                    <img className="croped-image" src={cropped} alt="Cropped!"/> : 
                    <img src='/dogFace/assets/images/noavatar.png' alt="avatar"/>
                }
            </div>
            {uploaded ?
              <div className='cropper-pop-up'>
                <div className='cropper-pop-up__wrapper'>
                <Cropper
                  src={uploaded}
                  style={{height: 400, width: 400}}
                  autoCropArea={1}
                  aspectRatio={1}
                  viewMode={3}
                  guides={false}
                  ref={cropperRef}
                />
                <button  className='button-secondary' type='button' onClick={onCrop}>Crop</button>
                </div>
              </div>
              :
              <>
                <input
                  type="file"
                  style={{display: 'none'}}
                  ref={fileRef}
                  onChange={onFileInputChange}
                  accept="image/png,image/jpeg,image/gif"
                />
                <button
                    className='button-secondary'
                    type='button'
                  onClick={() => fileRef.current?.click()}
                >Change avatar
                </button>
              </>}
        </div>
    );
}

export default ImageInput;