import { FC } from "react";
import Image from "next/image";

const PreloadImage: FC<{ src: string }> = (props) => {
  return (
    <figure className="hidden">
      <Image
        src={props.src}
        layout="fill"
        priority
        quality={0}
        alt=""
      />
    </figure>
  );
};

export default PreloadImage;
