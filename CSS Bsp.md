#Beispiele
Wenn es mehr Werte gibt:   
**Top right botom left**   

Um Einstellungen von Parent zu entfernen  
**value: none**
### Responsive Elements
Scroll Bar appears, if Screen is smaller than the element.
Dafür packe das ganze in einen `<div>` container mit `overflow-x:auto` 

    <div style="overflow-x:auto;">
        <ELEMENT STUFF>  </ELEMENT STUFF>
    </div>    
## Content
#### Tables
**table is the whole box**   
**th is the top line**
**td is an element**  
**use tr:hover to enable hover support**  

    border-collapse; collapse //make the borders smooth
    
Jede zweite Zeile eine andere Farbe:

    tr:nth-child(even){background-color: #f2f2f2}
[Fancy Table](https://www.w3schools.com/css/tryit.asp?filename=trycss_table_fancy)
#### Lists
**ul the box of whole list***  
**ul li each element**  //use this to make different colours

    list-style-type: circle // square | upper-roman | lower-alpha
    list-style-image: url('PATH')
    list-styke-type: none; margin: 0; padding: 0 ///remove markers/bullets
    
#### Link 
link -> visited -> hover -> active

    a:link {color: red}
    a:visited {text-decoration: underline}
    a:hover {background-color: pink}
    a:active {background-color: #f44336;color: white;padding: 14px 25px;text-align: center; display: inline-block;}

#### Text
    color: blue // color of text
    text-align: center // right | left ; text is in center of block
    text-align: justify //jede Zeile hat die selbe länge, wie PA
    text-decoration: overline // line-through|underline multiple values possible
    text-form: capitalize // Jedes Wort beginnt mit Großbuchstabe; uppercase | undercase 
    text-indent: 50px // Einzug der ersten Zeile
    word-spacing: 10px // -2px | 8px  Abstand zwischen Wörtern
    letter-spacing: -3px // -2px | 3 px
    line-height: 1,2 // Abstand der Zeilen
    font-size: 20 px
    font-style: italic // normal | oblique
    font-weight: bold // lighter | normal | 900
    direction: rtl; // Buchstaben Richtung rtl | ltr

## Box Model
#### Outline 
Linie außerhalb des Elements

    border: 1px solid green // outline has a border
    outline-color: red //color of outline is red
    outline-style: double //style of outline, not border
    outline-width: thick // width of outline, not border
[Outline-Styles](https://www.w3schools.com/css/tryit.asp?filename=trycss_outline-style)

#### Height and Width
Gibt Höhe und Breite eines Elementes ohne Padding, Border oder Margin

    height: 100 px //the height is set to 100
    width: 500px  //width is set to 100
    max-width: 500px  //max width, there wont be a scroll option at smaller screen
    
####Padding
Platz im Element innerhalb der Borders

    padding: 10px
    padding-right: 20px
####Margins
Platz außerhalb von Elementen (nur über und unter, nicht links rechts), überlappt. Nicht um Background. Keine Umrandung, außer mit Border eingefügt    
Benutzen, wenn man Platz um Sachen will.
  
    margin: 100px // 100 px nach überall
    margin-top: 100 px // 100px nach oben
    margin-bottom: auto //centers Element horizontally, keeps width, margin is split equally to right and left
    margin-right: inherit //kopiert das margin von parent element und fügt ein
####Borders
Platz in Elementen, überlappen nicht!    
Benutzen, wenn man Umrandung will.


    border-stlye: dotted
    border-top: style dotted //top bottom right left 
    border-width: medium | 12px | 1px 2px 3px 4px //eins der | getrennten
    border-top-width thick //oben dick
    border-color: red; //oder blue purple green blue
    border-top-color: blue  //oben blau
    border-radius: 8px //runde Ecken, mehr Pixel -> runder

[Border-styles](https://www.w3schools.com/css/tryit.asp?filename=trycss_border-style "To the example")
####Hintergrund Bild 
    background-image: url("gradient_bg.png");
    background-repeat: repeat-x; //horizontal wiederholen
    background-repeat: repeat-y  //vertikal wiederholen
    background-repeat: no-repeat //nicht wiederholen
    background-position: right top //top, bottom, center, right, left
    background-attachment: fixed; //beim Scrollen bleibt bild da
####Text anpassen
    margin-right: 200px //nach rechts ist 200 px platz
    
    
#Copy Paste

Link Box, innnen Leer, außen Rand, wenn hover ist innen auch Farbe
   
     a.link{
        background-color: white;
        color: black;
        border: 2px solid #4CAF50;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-left: 20px;
    }
    a.hover {
        background-color: #4CAF50