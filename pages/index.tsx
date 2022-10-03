import type { NextPage } from 'next';
import dynamic from "next/dynamic";
import { useState } from "react";
import styles from '../styles/Home.module.css';
import editorCommands from './commands';
const MDEditor = dynamic(
	() => import("@uiw/react-md-editor").then((mod) => mod.default),
	{ ssr: false }
);

const Home: NextPage = () => {
  const [textInput, setTextInput] = useState<string>("")
  function handleTextInput(e: any) {
    setTextInput(e)
  }
  return (
    <div className={styles.container}>
      <MDEditor
        value={textInput}
        onChange={handleTextInput}
        commands={editorCommands}
      />
    </div>
  )
}

export default Home
