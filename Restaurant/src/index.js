import {functionOne, functionTwo, functionThree} from './initialPage'

functionOne();

document.getElementById("tab1").addEventListener("click", function() {
    if(!(document.getElementById("tab1").style.textDecoration == "underline")){
        if(!(document.getElementById("textContainer") == null)){
            let elementToRemove7 = document.getElementById('textContainer');
            elementToRemove7.parentNode.removeChild(elementToRemove7);
        }
        if(!(document.getElementById("textContainerMenu") == null)){
            let elementToRemove8 = document.getElementById('textContainerMenu');
            elementToRemove8.parentNode.removeChild(elementToRemove8);
        }
        document.getElementById("tab1").style.textDecoration = "underline";
        document.getElementById("tab2").style.textDecoration = "none";
        document.getElementById("tab3").style.textDecoration = "none";
        functionOne();
    }
});

document.getElementById("tab2").addEventListener("click", function() {
    if(!(document.getElementById("tab2").style.textDecoration == "underline")){
        if(!(document.getElementById("textContainer") == null)){
            let elementToRemove1 = document.getElementById('textContainer');
            elementToRemove1.parentNode.removeChild(elementToRemove1);
        }
        if(!(document.getElementById("textContainerMenu") == null)){
            let elementToRemove2 = document.getElementById('textContainerMenu');
            elementToRemove2.parentNode.removeChild(elementToRemove2);
        }
        if(!(document.getElementById("center") == null)){
            let elementToRemove3 = document.getElementById('center');
            elementToRemove3.parentNode.removeChild(elementToRemove3);
        }
        document.getElementById("tab1").style.textDecoration = "none";
        document.getElementById("tab2").style.textDecoration = "underline";
        document.getElementById("tab3").style.textDecoration = "none";
        functionTwo();
    }
});

document.getElementById("tab3").addEventListener("click", function() {
    if(!(document.getElementById("tab3").style.textDecoration == "underline")){
        if(!(document.getElementById("textContainer") == null)){
            let elementToRemove4 = document.getElementById('textContainer');
            elementToRemove4.parentNode.removeChild(elementToRemove4);
        }
        if(!(document.getElementById("textContainerMenu") == null)){
            let elementToRemove5 = document.getElementById('textContainerMenu');
            elementToRemove5.parentNode.removeChild(elementToRemove5);
        }
        if(!(document.getElementById("center") == null)){
            let elementToRemove6 = document.getElementById('center');
            elementToRemove6.parentNode.removeChild(elementToRemove6);
        }
        document.getElementById("tab1").style.textDecoration = "none";
        document.getElementById("tab2").style.textDecoration = "none";
        document.getElementById("tab3").style.textDecoration = "underline";
        functionThree();
    }
});