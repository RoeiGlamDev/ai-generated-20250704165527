// Manga panel component
import Image from 'next/image';

const MangaPanel = ({ src, alt, width, height }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default MangaPanel;