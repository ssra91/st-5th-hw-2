import {useContext} from "react";
import TextsContext from "../context/TextsContext.jsx";

export default function TextList() {
  const {texts} = useContext(TextsContext);

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
