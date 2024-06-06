function createElement(data) {
    // Create a paragraph element
    const paragraph = document.createElement('p');
    // Set the content of the paragraph to data
    paragraph.textContent = data;
    // Append the paragraph to the document body
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const pages = response.query.pages;
            const page = pages[Object.keys(pages)[0]];
            const extract = page.extract;

            // Call the callback function with the extract
            callback(extract);
        }
    };
    xhr.send();
}

// Call queryWikipedia with createElement as the callback
queryWikipedia(createElement);
