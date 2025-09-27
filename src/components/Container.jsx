import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  const countWords = () => {
    let words = text.trim().split(/\s+/);
    if (words[0] === "") return 0;
    return words.length;
  };
  const counts={
    length:text.length,
    words:countWords(),
    instagram:INSTAGRAM_MAX_CHARACTERS - text.length,
    facebook:FACEBOOK_MAX_CHARACTERS - text.length
  }
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats counts={counts} />
    </main>
  );
}
