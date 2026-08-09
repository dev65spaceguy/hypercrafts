const isInstalled = window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone;

if (!isInstalled) {
    document.body.innerHTML = `
        <div style="font-family: sans-serif; padding: 20px; text-align: center;">
            <h2>Install Hypercrafts to Play</h2>
            <p>This game only works when installed as an app.</p>
        </div>
    `;
    throw new Error("Game blocked because PWA is not installed.");
}
