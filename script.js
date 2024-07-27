function assignPlatform() {
    const platform = Math.floor(Math.random() * 10) + 1;
    document.getElementById("platform-assignment").innerHTML = `Platform assigned: ${platform}`;
}
