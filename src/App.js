import "./styles.css";
import { Paragraph, Document, Packer } from "docx";
import { saveAs } from "file-saver";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [body, setBody] = useState("");

  const Create = () => {
    return (
      <div className="create">
        <h2>Add a New Job</h2>
        <form>
          <label>TITLE:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {title}
          <label>Company:</label>
          <input
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <label>Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button>Add</button>
        </form>
      </div>
    );
  };

  /**######################################## */
  const generate = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "Bullet points",
              bullet: {
                level: 0 //How deep you want the bullet to be
              }
            }),
            new Paragraph({
              text: "Are awesome",
              bullet: {
                level: 0
              }
            })
          ]
        }
      ]
    });

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };
  return (
    <div className="App">
      <h1>Hello {title}</h1>
      <h2>Edit to see some magic happen!</h2>
      <Create />
      <button onClick={generate}>Generate doc</button>
    </div>
  );
}
