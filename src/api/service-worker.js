// Authors: Liam Arguedas <iliamftw2013@gmail.com>
// License: BSD 3 clause

// Chrome API funcs

chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert("__EXTENSION WORKING__");
        }
    })
}
)