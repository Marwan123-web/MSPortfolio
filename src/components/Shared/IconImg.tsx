const IconImg = ({
  src,
  alt,
  width = "24px",
  height = "24px",
}: {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default IconImg;
