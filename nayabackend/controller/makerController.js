Maker = require('../model/makerModel');
// Handle index actions
exports.index = function (req, res) {
    Maker.get(function (err, makers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Maker retrieved successfully",
            data: makers
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var myMaker = new Maker();
    myMaker.email = req.body.email;
    myMaker.password = req.body.password;
    myMaker.capacity = req.body.capacity;
    myMaker.material = req.body.material;
    myMaker.location = req.body.location;
// save the contact and check for errors
    myMaker.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New Maker Saved!',
            data: myMaker
        });
    });
};