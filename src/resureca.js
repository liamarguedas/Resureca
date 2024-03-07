async function testExtension() {
    let [tab] = await chrome.tabs.query( {active: true} );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            func: () => {
                alert("__FUNCTION WORKING__")
            }
        }
    )
}

// ADD A BUTTON TO ./popup.html to test functionality