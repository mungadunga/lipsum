import { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';

function useMarkdown(src: string) {
  const [state, setState] = useState("");
  useEffect(() => {
    fetch(src)
    .then((res) => res.text())
    .then((md) => {
      setState(md)
    });
  });
  return <Markdown children={state}/>;
}

export default useMarkdown;