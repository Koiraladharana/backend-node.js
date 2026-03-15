const homeHandler = (req, res, htmlPage) => {
    res.writeHead(200, {"content-type":"text/html"});
    res.end(htmlPage.replace("{{%PAGENAME%}}","Hello user"));
}
export {homeHandler}