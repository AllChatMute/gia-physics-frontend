import { useParams } from "react-router";
import data from "../../assets/notes.json" with { type: "json" };

const Note: React.FC = () => {
  const id = useParams<string>().id;

  const htmlContent: string = data.notes[Number(id) - 1];

  return (
    <>
      <style>{data.styles}</style>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </>
  );
};

export default Note;
