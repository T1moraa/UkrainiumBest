window.eaglercraftXOpts = () => ({
	lang: "en_US",
  // joinServer: "ws" + window.location.href.slice(4),
  // assetsURI: "custom.epk",
	servers: [
		{ addr: "ws" + window.location.href.slice(4), name: "Its not work" },
		{ addr: "wss://fictional-robot-pxqrjq9r46jfr5jp-8081.app.github.dev/", name: "Its work" }
	]
});
// document.title = "My Original Server Name:tm:";
// document.querySelector("link[rel=\"shortcut icon\"]").href = "https://www.google.com/favicon.ico";
