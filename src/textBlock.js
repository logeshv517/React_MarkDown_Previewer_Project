import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">What is MARKDOWN?</h1>
                <p id="textblock-content">
                Created by John Gruber in 2004.<br/><br/>
                Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.<br/><br/>
                Using Markdown is different than using a WYSIWYG editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.<br/><br/>
                For example, to denote a heading, you add a number sign before it (e.g., # Heading One). Or to make a phrase bold, you add two asterisks before and after it (e.g., **this text is bold**). It may take a while to get used to seeing Markdown syntax in your text, especially if you’re accustomed to WYSIWYG applications. 
                </p>
            </div>
        </div>
    );
}

export default TextBlock;