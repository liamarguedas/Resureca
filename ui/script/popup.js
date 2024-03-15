async function testExtension() {
    let [tab] = await chrome.tabs.query( {active: true} );
    chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                alert("__FUNCTION WORKING__");
            }
        });
}
document.getElementById("mainBtn").addEventListener("click", testExtension);

document.getElementById('configuracoes').addEventListener('click', function() {
    chrome.runtime.openOptionsPage();
});
