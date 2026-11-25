"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text === word) t = setTimeout(() => setDel(true), 1600);
    else if (del && text === "") { setDel(false); setI((v) => v + 1); }
    else t = setTimeout(() => setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)), del ? 35 : 70);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return <span className="type">{text}<span className="caret" /></span>;
}
