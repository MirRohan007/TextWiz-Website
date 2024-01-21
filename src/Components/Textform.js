import React, {useState} from 'react'

export default function Textform(props)
{
    const [text,setText] = useState("");

    const Uppercase = ()=>
    {
        if (text !== "")
        {
            let new_text = text.toUpperCase();
            setText(new_text);
            console.log("The text is converted to uppercase.");
            props.showalert("success","Text has been converted to uppercase form");
        }
    }; 

    const Lowercase = ()=>
    {
        if (text !== "")
        {
            let new_text = text.toLowerCase();
            setText(new_text);
            console.log("The text is converted to lowercase.");
            props.showalert("success","Text has been converted to lowercase form");
        }
    };

    const Sentence = () => 
    {
        if (text !== "")
        {
            const str = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            console.log("Text has been sentenced.");
            setText(str)
            props.showalert("success","Text has been converted to sentenced form");
        };
    }

    const Clear = () => 
    {
        if (text !== "")
        {
            let new_text = "";
            setText(new_text);
            console.log("Text has been cleared.");
            props.showalert("success","Text has been coleared");
        }
    };

    const Change = (event) => 
    {
        setText(event.target.value);
        console.log('Textarea Changed!');
    };

    const Capitalize = () => 
    {
        if (text !== "")
        {
            var words = text.split(' ');
            var capitalizedWords = [];
          
            for (var i = 0; i < words.length; i++) 
            {
              var word = words[i];
              var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
              capitalizedWords.push(capitalizedWord);
            }
            var new_text = capitalizedWords.join(' ');
            setText(new_text);
            console.log("Text has been capitalized.");
            props.showalert("success","Text has been converted to capitalized form");
        }
    };

    const Toggle = () => 
    {
        if (text !== "")
        {
            var toggledString = '';
            for (var i = 0; i < text.length; i++) 
            {
                var char = text.charAt(i);
        
                if (char === char.toLowerCase()) 
                {
                    toggledString += char.toUpperCase();
                } 
                else 
                {
                    toggledString += char.toLowerCase();
                }
            }
            setText(toggledString)
            console.log("Text has been toggled.")
            props.showalert("success","Text has been converted to toggle form");
        }
    };

    const Alternate = () => 
    {
        if (text !== "")
        {
            var toggledString = '';
            for (var i = 0; i < text.length; i++) 
            {
                var char = text.charAt(i);
        
                if (i%2 === 0) 
                {
                    toggledString += char.toUpperCase();
                } 
                else 
                {
                    toggledString += char.toLowerCase();
                }
            }
            setText(toggledString)
            console.log("Text has been coverted to alternate upper and lower case.")
            props.showalert("success","Text has been coverted to alternate upper and lower case");
        }
    };

    const Reverse = () => 
    {
        if (text !== "")
        {
            var str = ""
            for(let i=text.length; i>=0; i--)
            {
                var char = text.charAt(i)
                str += char
            }
            setText(str)
            console.log("Text has been reversed.")
            props.showalert("success","Text has been reversed");
        }
    };

    const Upsidedown = () => 
    {
        if (text !== "")
        {
            var upsideDownString = ''; 
            let upsideDownChars = 
            {
                a: 'ɐ',
                b: 'q',
                c: 'ɔ',
                d: 'p',
                e: 'ǝ',
                f: 'ɟ',
                g: 'ƃ',
                h: 'ɥ',
                i: 'ı',
                j: 'ɾ',
                k: 'ʞ',
                l: 'l',
                m: 'ɯ',
                n: 'u',
                o: 'o',
                p: 'd',
                q: 'b',
                r: 'ɹ',
                s: 's',
                t: 'ʇ',
                u: 'n',
                v: 'ʌ',
                w: 'ʍ',
                x: 'x',
                y: 'ʎ',
                z: 'z',
                A: '∀',
                B: '𐐒',
                C: 'Ɔ',
                D: 'ᗡ',
                E: 'Ǝ',
                F: 'Ⅎ',
                G: 'פ',
                H: 'H',
                I: 'I',
                J: 'ſ',
                K: '⋊',
                L: '⅃',
                M: 'W',
                N: 'N',
                O: 'O',
                P: 'Ԁ',
                Q: 'Ό',
                R: 'ᴚ',
                S: 'S',
                T: '⊥',
                U: '∩',
                V: 'Λ',
                W: 'M',
                X: 'X',
                Y: '⅄',
                Z: 'Z',
                0: '0',
                1: 'Ɩ',
                2: 'ᄅ',
                3: 'Ɛ',
                4: 'ㄣ',
                5: 'ϛ',
                6: '9',
                7: 'ㄥ',
                8: '8',
                9: '6',
                ',': '\'',
                '.': '˙',
                '?': '¿',
                '!': '¡',
                '"': ',,',
                '\'': ',',
                '(': ')',
                ')': '(',
                '[': ']',
                ']': '[',
                '{': '}',
                '}': '{',
                '<': '>',
                '>': '<',
                '&': '⅋',
                '_': '‾',
                ';': '؛',
                '‿': '⁀',
                '⁅': '⁆',
                '⁽': '⁾',
                '₍': '₎',
                '\u203E': '\u203F',
                '\u2234': '\u2235',
                '\u2E2F': '\u2E2E',
                '\uA78D': '\uA78E'
            };
            for (var i = text.length - 1; i >= 0; i--) 
            {
                var char = text.charAt(i);
                var upsideDownChar = upsideDownChars[char] || char;
                upsideDownString += upsideDownChar;
            }  
            setText(upsideDownString);
            props.showalert("success","Text has been converted to UpSideDown form");
        }
    };

    const Wider = () => 
    {
        if (text !== "")
        {
            var str = ""
            for(let i=0; i<text.length; i++)
            {
                var char = text.charAt(i)
                str += char + " "
            }
            setText(str)
            console.log("Text has been widened.")
            props.showalert("success","Text has been widened");
        }
    };

    const Binary = () => 
    {
        if (text !== "")
        {
            var binaryString = '';
      
            for (var i = 0; i < text.length; i++) 
            {
                var charCode = text.charCodeAt(i);
                var binary = charCode.toString(2);
                binaryString += binary.padStart(8, '0'); // Add leading zeros if necessary
            }
      
            setText(binaryString);
            props.showalert("success","Text has been converted to binary form");
        }
    };

    const Copy = () => 
    {
        if (text !== "")
        {
            var str = document.getElementById("text");
            str.select();
            navigator.clipboard.writeText(str.value)
            document.getSelection().removeAllRanges();
            props.showalert("success","Text copied to clipboard");
        }
    };

    const Space = () => 
    {
        if (text !== "")
        {
            const new_text = text.split(/[ ]+/);
            setText(new_text.join(" "))
            props.showalert("success","Extra spaces has been removed");
        }
    }
    return(
        <>
            <div className='container' >
                <h1 className={`my-3 text-${props.mode === 'light'? "secondary":"white"}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="text" onChange={Change} rows="6" columns="15" placeholder = {props.placeholder} value = {text}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={Lowercase}>To Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Uppercase}>To Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Sentence}>Sentence Form</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Clear}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Capitalize}>Capitalize Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Toggle}>tOGGLE tEXT</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Alternate}>AlTeRnAtE Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Reverse}>txeT esreveR</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Upsidedown}>UpSideDown Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Wider}>Wider Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Binary}>Binary Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Space}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Copy}>Copy to clipboard</button>
            </div>
            <div className={` container my-3 text-${props.mode === 'light'? "black":"white"}`}>
                <h1 className={`my-2 text-${props.mode === 'light'? "secondary":"white"}`}>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters.</p>
                <p>{text.length === 0 ? 0:0.008 * text.split(" ").length} Minutes require to read the text.</p>
                <h1 className={`my-2 text-${props.mode === 'light'? "secondary":"white"}`}>Preview</h1>
                <p>{text === ""? "Enter some text in the text box to preview it...":text}</p>
            </div>
        </>          
    );
}