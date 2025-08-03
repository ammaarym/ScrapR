console.log("popup.js is running");

// this function returns the currentTab - copied from ChromeDocumentation
 async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

// imp! wrap logic in DOMContentLoaded to make sure it runs after page loads
document.addEventListener("DOMContentLoaded", () =>{
    // finding button from popup.html and assign to btn
    const btn = document.querySelector('button[id = "inject"]');

    // once btn is clicked, run function
    btn.addEventListener("click", async () =>{
        // getCurrentTab
        const activeTab = await getCurrentTab();
        // execute content.js
        chrome.scripting.executeScript({
            target: {tabId: activeTab.id},
            files: ["content.js"]
        })
    });
});


