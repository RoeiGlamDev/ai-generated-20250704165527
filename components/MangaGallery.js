// Manga gallery component
import MangaChapter from './MangaChapter';

const MangaGallery = ({ chapters }) => {
  return (
    <div>
      {chapters.map((chapter, index) => (
        <MangaChapter
          key={index}
          panels={chapter.panels}
        />
      ))}
    </div>
  );
};

export default MangaGallery;