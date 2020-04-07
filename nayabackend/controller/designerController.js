Designer = require('../model/designerModel');
// Handle index actions
exports.index = function (req, res) {
    Designer.get(function (err, designers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Designer retrieved successfully",
            data: designers
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var myDesigner = new Designer();
    myDesigner.email = req.body.email;
    myDesigner.password = req.body.password;
    myDesigner.capacity = req.body.capacity;
    myDesigner.type_of_designer = req.body.type_of_designer;
    myDesigner.training = req.body.training;
// save the contact and check for errors
    myDesigner.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New Designer Saved!',
            data: myDesigner
        });
    });
};