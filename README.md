
# Voirex

### About Voirex
Voirex is a robust and useful wrapper of many Speect to Text (Voice Recognition) API. In addition to this, Voirex allows you to add dynamic commands to your web applications.

Actually, Voirex is a Speech to Function library which will updated and developed continuously. The main properties of Voirex;

* Selecting various Voice Recogntion API you want to select 
    - HTML5 Web Speech API
    - Google Sound Cloud
    - IBM Watson
    - etc.
* Dynmaic and quick recognition of voice commands
* Add commands easily 
* Create a dictation object to convert voice to text easily
* Simulate some commands without microphone
* Pause and resume command recognition
* Text analysis with using Levenshtein Algorithm
* Prefering the language which you want 
* Taking object property as function and running according to similarity of VoiceText and keywords which you want
* Ability to work with different Javascript environments(Vanilla.js, Node.js, ES6, ES5 etc.)

### Installation
##### NPM
      npm install voirex
Or just download a .zip package and with the source code, minified file and commands examples with React.js.
### How to use
Voirex is totally written in ES6, but it can be transpiled on every version to Javascript. Manager.js cover the main class of Voirex. And all of them converted to ES5 codes under the dist folder. 
        
        
        
        dist
            |
            --voice-assistant.umd.js -
            |
            --voice-assistant.cjs.js -
            |
            --voice-assistant.esm.js -
            
 
If you import Voirex into your we application projects, you can use this codes,

```
import Voirex from 'voirex';

let recognition = new Voirex(
  {
    type: 'browserDefault',
    lang: 'tr-TR'
  },
  {
    keyword: ['Hi', 'Hello'],
    func: myfunc,
    accuracy: '52%',
    pref: 'max'
  }
);
```

Explanation of above code:

#### Voice Type 

```type: 'browserDefault'```: the which recognition API you want select

```lang: 'tr-TR'``` : Language you want to select

#### Command

```keyword: ['Hi', 'Hello']```: keywords which analyze with voice text

```func: myfunc```: function which you want to do

```accuracy: '52%'```: over which accuracy of analysis function run

```pref: 'max'```: If there are keywords more than one, as which one  voirex run


   











