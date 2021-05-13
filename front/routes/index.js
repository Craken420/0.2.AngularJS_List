exports.partials = function(req, res){
    var filename = req.params.filename;
    if(!filename) return;
    res.render(filename);
};

exports.index = (req, res) => res.render('index', { title: 'Todo List' });
