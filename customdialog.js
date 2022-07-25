import * as buttonFn from './buttonFn.js'
export function Alert(){
    let ok = document.createElement('button');
    ok.innerHTML = 'ok';
    ok.addEventListener('click', buttonFn.closeDialog);
    document.getElementById('dialogBox').innerHTML = 'You are Alerted <br />';
    document.getElementById('dialogBox').appendChild(ok);
    document.getElementById('dialogBox').style.display = 'block';
}
export function Confirm(){

    let confirm = document.createElement('button');
    let cancel = document.createElement('button');
    confirm.innerHTML = 'confirm';
    cancel.innerHTML = 'cancel';
    confirm.addEventListener('click', buttonFn.confirmed);
    cancel.addEventListener('click', buttonFn.cancelled);
    document.getElementById('dialogBox').innerHTML = 'Do you confirm this? <br />';
    document.getElementById('dialogBox').appendChild(confirm);
    document.getElementById('dialogBox').appendChild(cancel);
    document.getElementById('dialogBox').style.display = 'block';
}
export function Prompt(){
    let confirm = document.createElement('button');
    let cancel = document.createElement('button');
    let input = document.createElement('input');
    input.id = 'inputBox';
    confirm.innerHTML = 'confirm';
    cancel.innerHTML = 'cancel';
    confirm.addEventListener('click', buttonFn.PConfirmed);
    cancel.addEventListener('click', buttonFn.PCancelled);
    document.getElementById('dialogBox').innerHTML = 'Please Enter Something. <br />';
    document.getElementById('dialogBox').appendChild(input);
    document.getElementById('dialogBox').appendChild(confirm);
    document.getElementById('dialogBox').appendChild(cancel);
    document.getElementById('dialogBox').style.display = 'block';
}
export function Sprompt(){
    let confirm = document.createElement('button');
    let cancel = document.createElement('button');
    let input = document.createElement('input');
    input.id = 'inputBox';
    confirm.innerHTML = 'confirm';
    cancel.innerHTML = 'cancel';
    confirm.addEventListener('click', buttonFn.SPConfirmed);
    cancel.addEventListener('click', buttonFn.SPCancelled);
    document.getElementById('dialogBox').innerHTML = 'Please Enter Something. <br />';
    document.getElementById('dialogBox').appendChild(input);
    document.getElementById('dialogBox').appendChild(confirm);
    document.getElementById('dialogBox').appendChild(cancel);
    document.getElementById('dialogBox').style.display = 'block';
}