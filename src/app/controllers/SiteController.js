
class SiteController {
    // GET /news
    

    search(req, res) {
        //console.log(req.body)
        res.render('search');
    }
}

module.exports = new SiteController();
