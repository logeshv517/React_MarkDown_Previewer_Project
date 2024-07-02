import './App.css';
import { Button } from '@material-ui/core';
function TextBlock3() {
    return (
        <div id="textblock1">
            <div id="textblock-container3">
                <h1 id="textblock-title1">How Does it Work?</h1>
                <p id="textblock-content1">
                The short answer is that you need a Markdown application capable of processing the Markdown file. There are lots of applications available — everything from simple scripts to desktop applications that look like Microsoft Word. Despite their visual differences, all of the applications do the same thing. Like Dillinger, they all convert Markdown-formatted text to HTML so it can be displayed in web browsers.<br/><br/>
                Markdown applications use something called a Markdown processor (also commonly referred to as a “parser” or an “implementation”) to take the Markdown-formatted text and output it to HTML format. At that point, your document can be viewed in a web browser or combined with a style sheet and printed. You can see a visual representation of this process below.<br/><br/>
                </p>
            </div>
            <div id='md_demo1'><img src='https://mdg.imgix.net/assets/images/markdown-flowchart.png?auto=format&fit=clip&q=40&w=1080'></img></div>
            <div style={{textAlign:"center",paddingTop:"2vh",display:"flex",flexDirection:"row",justifyContent:"center"}}>Click to learn the syntax of the Markdown&emsp; <Button class="button-86" role="button" component="a" href='https://www.markdownguide.org/basic-syntax/' target="_blank">CLICK</Button></div>
        </div>
    );
}

export default TextBlock3;