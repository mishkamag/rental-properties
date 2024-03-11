import Image from "next/image";

const PropertyImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            className="object-cover mx-auto rounded-xl"
            width={0}
            height={0}
            // layout="responsive"
            // sizes="100vw"
            // priority={true}
            // maxWidth={600} // Set maximum width here
            // maxHeight={400} // Set maximum height here
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`
               ${
                 images.length === 3 && index === 2
                   ? "col-span-2"
                   : "col-span-1"
               }`}
              >
                {
                  <Image
                    src={image}
                    alt=""
                    className="object-cover w-full rounded-xl"
                    width={1110}
                    height={120}
                    // layout="responsive"
                    // sizes="100vw"
                    // priority={true}
                    // maxWidth={300} // Set maximum width here
                    // maxHeight={200} // Set maximum height here
                  />
                }
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyImages;
