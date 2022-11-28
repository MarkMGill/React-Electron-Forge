import React from "react";
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
/* import Image from "@tiptap/extension-underline"; - yarn add @tiptap/extension-image */
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import Paragraph from "@tiptap/extension-paragraph"
import { FaBold, 
         FaItalic,
         FaTimes,
         FaStrikethrough, 
         FaHeading, 
         FaListOl, 
         FaListUl, 
         FaQuoteLeft, 
         FaRedo, 
         FaUndo, 
         FaUnderline, 
         FaAlignLeft,
         FaAlignCenter,
         FaAlignRight,
         FaArrowsAlt,
         FaEye,
         FaEyeSlash,
         FaHighlighter,
         FaImage} from "react-icons/fa";
import { useState } from "react";

const MenuBar = ({ editor }) => {


  /*

  (conditional statement for adding an image to the text editor. We'll be adding images inline so that it matches the paragraph )
  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if (!editor) {
    return null
  }

  if (!editor) {
    return null;
  }
  */


  if (!editor) {
    return null;
  }

  return (
    <div className="ui-widget-content">
    <div className="menu-bar">
      <div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}>
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}>
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}>
        <FaUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}>
        <FaStrikethrough />
      </button>

      {/* Bring H1 - H5 into a dropdown menu - miscellaneous */}

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}>
        <FaHeading />1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}>
        <FaHeading />2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}>
        <FaHeading />3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}>
        <FaHeading />4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}>
        <FaHeading />5
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive('highlight') ? 'is-active' : ''}
      >
        <FaHighlighter />
      </button>

  {/*
    <div>
      <button onClick={addImage}><FaImage /></button>
      <EditorContent editor={editor} />
    </div>
  
  */}


      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}>
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}>
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}>
        <FaQuoteLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}>
        <FaAlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}>
        <FaAlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}>
        <FaAlignRight />
      </button>

      {/* Bring font families into a dropdown menu - miscellaneous */}

      <button
        onClick={() => editor.chain().focus().setFontFamily("Inter").run()}
        className={editor.isActive("textStyle", { fontFamily: "Inter" }) ? "is-active" : ""}
      >
        Serif
      </button>
      <button
        onClick={() => editor.chain().focus().setFontFamily("Comic Sans MS, Comic Sans").run()}
        className={editor.isActive("textStyle", { fontFamily: "Comic Sans MS, Comic Sans" }) ? "is-active" : ""}
      >
        Comic Sans
      </button>
      <button
        onClick={() => editor.chain().focus().setFontFamily("serif").run()}
        className={editor.isActive("textStyle", { fontFamily: "serif" }) ? "is-active" : ""}
      >
        Times New Roman
      </button>

      {/* Bring colors into a dropdown menu */}


      <button
        onClick={() => editor.chain().focus().setColor("#CB0000").run()}
        className={editor.isActive("textStyle", { color: "#CB0000" }) ? "is-active" : ""}
      >
        Red
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#000000").run()}
        className={editor.isActive("textStyle", { color: "#000000" }) ? "is-active" : ""}
      >
        Black
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#009011").run()}
        className={editor.isActive("textStyle", { color: "#009011" }) ? "is-active" : ""}
      >
        Green
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#0019BB").run()}
        className={editor.isActive("textStyle", { color: "#0019BB" }) ? "is-active" : ""}
      >
        Blue
      </button>
       </div>
      <div>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <FaUndo />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <FaRedo />
      </button>
        </div>
    </div>
    </div>
  );
};

const TipTap = ({toggleTipTapDisplay, index, deleteTipTap}) => {
  const [view, setView] = useState(true);
  const [height] = useState(170);
  const [width] = useState(800);
  useEffect(() => {
  }, [])

  function hideMenu(state) {
    console.log('zzzz', state)
    setView(state)
  }

  const editor = useEditor({
    extensions: [
      StarterKit, 
      Underline,
      FontFamily,
      TextStyle, 
      Highlight,
      /* Image, */
      Color,
      TextAlign.configure({
      types: ["heading", "paragraph"],
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: 'my-custom-paragraph',
        },
      }),
    ],
  
    onUpdate: ({editor}) => {
        const html = editor.getHTML() 
        //setDesc(html);
    }
  });

  /* <EditorContent editor={editor} />  */

    const imageContainer = {
      position: 'absolute', 
      //visibility: 'hidden',
      width: '94.5%', 
      height: '90%', 
      margin: 'auto', 
      marginTop: '1%', 
      left: '2.8%', 
      right: '4%', 
      top: '10%'
  }

  return (
      <Draggable 
        handle=".handle"
        bounds={{left: -475, top: -115, right: 375, bottom: 450}}
      >
        <ResizableBox 
          className="box center-whiteboard-tiptap" 
          width={width} 
          height={height} 
          minConstraints={[800, 170]} 
          maxConstraints={[1650, 750]}
          //lockAspectRatio={true}
        >
          <div className={`text-editor ${(!view) ? "text-editor-with-head" : null}`}>
            <span className="handle"><FaArrowsAlt/></span>
            {(!view) ?
              <span onClick={() => hideMenu(true)} className="eyeShow"><FaEye/></span>
            :
              <span onClick={() => hideMenu(false)} className="eyeHide"><FaEyeSlash/></span>
            }
            <FaTimes onClick={() => deleteTipTap(index)} />
            <div>
              {(view) ? <MenuBar editor={editor} /> : <div height="57"></div> }
              <EditorContent editor={editor} />
            </div>
          </div>
        </ResizableBox>
      </Draggable>
  );
};

export default TipTap;
