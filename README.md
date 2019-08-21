
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
* Text analysis with using ```Levenshtein Distance Algorithm```
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

# Basic Usage
With using Voirex Speech to function API, adding command is so easy.
```
//importing voirex
import Voirex from 'voirex';

//creating a voirex object to start the recognition
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


//setting a new recognition 
let new_reco = recognition.setVoiceRecConfig();

//start the recognition
recognition.startRecognition(new_reco);

//stop the recognition 
recognition.stopRecognition(new_reco);

//getting instruction of voice (Voice Text)
new_reco.onresult = (event) => {
    recognition.resultProcessVoiceRecog(recognition.getVoiceText(event));
}


```

### With the above code you can;
* do Dynamic Voice Recognition by selecting one of Voice Recognition APIs which integrated with Voirex,
* analyze the similarity of voice text and your keywords with Levenshtein Distance Algorithm like 
```{hi: '35.252365', hello: '80.5562255'}```
* compare your accuracy and levenshtein accuracy, according to the result you can run the ```func```
* get the voice text

As I mentioned above, you can easily install and import Voirex and with very little row code you can embed your web app.

## Advanced Methods of Voirex
```getAPIInfo()```: All the information about you selected Voice Recognition Type

```console.log(recognition.getAPIInfo());```



```
    $ >  
        /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*
            /*/*/*/DEFAULT BROWSER VOICE RECOGNITION/*/*/*/*
            /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*

           "Interim Results": mutable (default false) \n\n
           "Maximum" Alternatives: mutable (default 1) \n\n
           "Lang" : mutable (default meta charset) \n\n
           
           { 
            "Afrikaans": [
              ["South Africa", "af-ZA"]
            ],
            "Arabic" : [
              ["Algeria","ar-DZ"],
              ["Bahrain","ar-BH"],
              ["Egypt","ar-EG"],
              ["Israel","ar-IL"],
              ["Iraq","ar-IQ"],
              ["Jordan","ar-JO"],
              ["Kuwait","ar-KW"],
              ["Lebanon","ar-LB"],
              ["Morocco","ar-MA"],
              ["Oman","ar-OM"],
              ["Palestinian Territory","ar-PS"],
              ["Qatar","ar-QA"],
              ["Saudi Arabia","ar-SA"],
              ["Tunisia","ar-TN"],
              ["UAE","ar-AE"]
            ],
            "Basque": [
              ["Spain", "eu-ES"]
            ],
            "Bulgarian": [
              ["Bulgaria", "bg-BG"]
            ],
            ...
   
```

```checkingVoiceApi()```: Check the Voice Selected API you selected is integrated with Voirex or not

```console.log(recognition.checkingVoiceApi())```

```
    $> true
```

```checkActualAccuracy(voiceText)```: Get the Levenshtein distance between keywords and Voice Recognition Text

```console.log(recognition.checkActualAccuracy(recognition.getVoiceText(event)))```

```
    $> {hi: '81.54654654', hello: '12.252156'}
```

```checkMax(voiceText)```: Taking maximum distance percentage of keywords Levenshtein Accuracy

```console.log(recognition.checkMax(voiceText))```

```
    $> 81.256256
```

```checkMin(voiceText)```: Taking minimum distance percentage of keywords Levenshtein Accuracy

```console.log(recognition.checkMin(voiceText))```

```
    $> 81.256256
```

```checkingVoiceText(voiceText)```: Check the voice text is emptyor not

```console.log(recognition.checkingVoiceText(voiceText))```

```
    $> 'voiceText'
```


# Warning

    * All the error related between developer and Voirex return -1. Developers can check their code error with this way.
#### For Example
If the browser does not support Voirex, setVoiceRecConfig() method return then, if you use a uncommon browser, you can check the browser support feature by writing the value of setVoiceConfig() method.










   











