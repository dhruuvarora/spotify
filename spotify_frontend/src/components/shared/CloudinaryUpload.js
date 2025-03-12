import { useEffect, useState } from 'react';

const CloudinaryUpload = ({setUrl, setName}) => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    useEffect(() => {
        // Check if script is already loaded
        if (window.cloudinary) {
            setIsScriptLoaded(true);
            return;
        }

        // If not loaded, create and append the script
        const script = document.createElement('script');
        script.src = 'https://upload-widget.cloudinary.com/global/all.js';
        script.async = true;
        script.onload = () => setIsScriptLoaded(true);
        
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const upload = () => {
        console.log("Upload button clicked");
        if (!isScriptLoaded) {
            console.log("Waiting for Cloudinary script to load...");
            return;
        }

        if (window.cloudinary && window.cloudinary.createUploadWidget) {
            console.log("Cloudinary widget is available");
            const myWidget = window.cloudinary.createUploadWidget(
                {
                    cloudName: 'dgbxpssni',
                    uploadPreset: 'v4cloud',
                    sources: ['local', 'url', 'camera'],
                    multiple: false,
                    folder: 'spotify_clone',
                    resourceType: 'auto'
                },
                (error, result) => {
                    if (error) {
                        console.error("Upload error:", error);
                    }
                    if (!error && result && result.event === "success") {
                        console.log('Done! Here is the file info: ', result.info);
                        setUrl(result.info.secure_url);
                        setName(result.info.original_filename);
                    }
                }
            );
            myWidget.open();
        } else {
            console.error("Cloudinary widget is not loaded yet. window.cloudinary =", window.cloudinary);
        }
    };

    return (
        <div 
            className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
            onClick={upload}
            style={{ cursor: isScriptLoaded ? 'pointer' : 'not-allowed' }}
        >
            {isScriptLoaded ? 'Select Track' : 'Loading...'}
        </div>
    );
};

export default CloudinaryUpload;