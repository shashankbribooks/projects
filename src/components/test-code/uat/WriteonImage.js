import Image from "next/image";

const ImageWithText = () => (
 
  <div style={{ position: "relative", width: "500px", height: "500px" }}>
    <Image
      src="./assets/images/test-code/609-536x354.jpeg"
      alt="Description of the image"
      layout="fill"
      objectFit="cover"
      style={{ borderRadius: "10px" }} // Example inline CSS
    />
    <div
      style={{
        position: "absolute",
        top: "90%",
        left: "35%",
        color: "white",
      }}
    >
      Your Text Here
    </div>
  
  </div>
);

export default ImageWithText;
