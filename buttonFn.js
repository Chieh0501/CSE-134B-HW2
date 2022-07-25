import DOMPurify from './DOMPurify/dist/purify.es.js';
export function closeDialog(){
    document.getElementById('dialogBox').style.display = 'none';
}
export function confirmed(){
    document.getElementById('dialogBox').style.display = 'none';
    document.getElementById('User_result').innerHTML = 'User Entered: true';
    document.getElementById('User_result').style.display = 'block';
}
export function cancelled(){
    document.getElementById('dialogBox').style.display = 'none';
    document.getElementById('User_result').innerHTML = 'User Entered: false';
    document.getElementById('User_result').style.display = 'block';
}
export function PConfirmed(){
    document.getElementById('dialogBox').style.display = 'none';

    let val = document.getElementById('inputBox').value;
    if(val){
        document.getElementById('User_result').innerHTML = `User Entered: ${val}`;
    } else {
        document.getElementById('User_result').innerHTML = `User Entered: nothing`;
    }
    
    document.getElementById('User_result').style.display = 'block';
}
export function PCancelled(){
    document.getElementById('dialogBox').style.display = 'none';
    document.getElementById('User_result').innerHTML = 'User Entered: nothing';
}
export function SPConfirmed(){
    document.getElementById('dialogBox').style.display = 'none';

    let val = DOMPurify.sanitize(document.getElementById('inputBox').value);
    if(val){
        document.getElementById('User_result').innerHTML = `User Entered: ${val}`;
    } else {
        document.getElementById('User_result').innerHTML = `User Entered: nothing`;
    }
    document.getElementById('User_result').style.display = 'block';
}
export function SPCancelled(){
    document.getElementById('dialogBox').style.display = 'none';
    document.getElementById('User_result').innerHTML = 'User Entered: nothing';
}