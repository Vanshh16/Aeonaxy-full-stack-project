import React from "react";
import { useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import img from "../../assets/images/img.png";

// import "./styles.css";

function Image({returnPublicId}) {
  const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const [cloudName] = useState("dgehkce6s");
  // Replace with your own upload preset
  const [uploadPreset] = useState("yadqj7uw");

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  const myImage = cld.image(publicId);
  returnPublicId(publicId);

  return (
    <div className="mt-2 flex rounded-lg px-1 py-10">
      <div className="text-left grid grid-cols-2">
        <img className="h-40 w-40" src={publicId ? `https://res.cloudinary.com/${cloudName}/image/upload/v1234567890/${publicId}` : img} alt="Description of the image" />
        <div className="mt-14 flex text-md leading-6 text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-lg bg-white font-semibold"
          >
            <CloudinaryUploadWidget
              uwConfig={uwConfig}
              setPublicId={setPublicId}
            />
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
            <p className="pl-1 text-base mt-6 font-semibold text-gray">
              &gt; Or choose one of our defaults
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Image;

{
  /* <div className="mt-2 flex rounded-lg px-1 py-10">
  <div className="text-left grid grid-cols-2">
    <img className="h-40 w-40 text-gray-300" src={img} />
    <div className="mt-14 flex text-md leading-6 text-gray-600">
      <label
        htmlFor="file-upload"
        className="relative cursor-pointer rounded-lg bg-white font-semibold"
      >
        <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />

        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
        />
        <p className="pl-1 text-base mt-6 font-semibold text-gray">
          &gt; Or choose one of our defaults
        </p>
      </label>
    </div>
    <AdvancedImage
      style={{ maxWidth: "100%" }}
      cldImg={myImage}
      plugins={[responsive(), placeholder()]}
    />
  </div>
</div>; */
}
