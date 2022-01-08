// Initialize button with user's preferred color
let toggle = document.getElementById("prettyprint");

// When the button is clicked, inject setPageBackgroundColor into current page
toggle.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: prettyPrint,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function prettyPrint() {
    original = document.querySelector('pre').innerHTML
    let json = JSON.parse(document.querySelector('pre').innerHTML)
    document.querySelector('pre').innerHTML = JSON.stringify(json, null, 6)
}