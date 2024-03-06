//Main Parts of AJAX

//part 1 : Asynchronous - 
// part 2 : JS
// part 3 : XML
// part 4 : XHR

// How  does it work?

// End user action - (function)

//This function will be called when we click the button
function uploadButton() {
    //Create a new XHR request object
    let xhr = new XMLHttpRequest() //Set up XMLHttpRequest Object

    //Configure: GET-request for the URL
    xhr.open('GET', 'https://my-json-server.typicode.com/typicode/demo/comments/1', true) //Parameters for XHR method

    //Setup a function that is called when the request is completed

    xhr.onload = function() {
        if(this.status >= 200 && this.status < 300) {
            try {
            //If success then parse the JSON res
            let response = JSON.parse(this.responseText)
            

            //Create a string to hold our res html
            let html = ''
            html += '<h1>' + response.title + '</h1>'
            html += '<p>' + response.body + '</p>'

            //Insert the HTML into the div
            document.getElementById('post').innerHTML = html
            } catch(e) {
                console.error('Error in parsing', e)
            }
        } else {
            //If it returns an error
            console.error("The request failed")
        }
    }
    //Send the request
    xhr.send()
}

// On click button adding a click event listener
document.getElementById('uploadButton').addEventListener('click', uploadButton);