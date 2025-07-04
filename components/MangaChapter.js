// Manga chapter component
import MangaPanel from './MangaPanel';

const MangaChapter = ({ panels }) => {
  return (
    <div>
      {panels.map((panel, index) => (
        <MangaPanel
          key={index}
          src={panel.src}
          alt={panel.alt}
          width={panel.width}
          height={panel.height}
        />
      ))}
    </div>
  );
};

export default MangaChapter;