function Video({
  title,
  width = 700,
  height = 35000,
  src,
  ...rest
}: {
  title: string;
  width: number;
  height: number;
  src: string;
  [key: string]: any;
}) {
  return (
    <video
      className="overflow-hidden rounded-lg"
      width={width}
      height={height}
      controls
      {...rest}
    >
      <source
        src={src.match(/^http/) ? src : `/videos/${src}`}
        type="video/mp4"
      />
      {title}
    </video>
  );
}

export default Video;
