let date = new Date();
export function post(){   
    const form = new FormData(document.getElementById('methodForm'));
    form.append('date', date);
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: form
    })
        .then((res) =>  res.json())
        .then((data) => {
            document.getElementById('text_area').innerHTML = JSON.stringify(data, undefined, 4);
            document.getElementById('text_area').setAttribute('rows', '40');
        });
    return false;
}
export function get(){
    const form = new FormData(document.getElementById('methodForm'));
    form.append('date', date);
    fetch('https://httpbin.org/get?' + new URLSearchParams(form), {
        method: 'GET'
    })
        .then((res) =>  res.json())  
        .then((data) => {
            document.getElementById('text_area').innerHTML = JSON.stringify(data, undefined, 4);
            document.getElementById('text_area').setAttribute('rows', '40');
        });
}
export function put(){
    const form = new FormData(document.getElementById('methodForm'));
    form.append('date', date);
    fetch('https://httpbin.org/put', {
        method: 'PUT',
        body: form
    })
        .then((res) =>  res.json())
        .then((data) => {
            document.getElementById('text_area').innerHTML = JSON.stringify(data, undefined, 4);
            document.getElementById('text_area').setAttribute('rows', '40');
        });
    return false;
}
export function delete_article(){
    fetch('https://httpbin.org/delete', {
        method: 'DELETE'
    })
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('text_area').innerHTML = JSON.stringify(data, undefined, 4);
            document.getElementById('text_area').setAttribute('rows', '40');
        });
}