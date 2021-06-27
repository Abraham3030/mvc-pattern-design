let mainController = {
   
    home: function(req, res) {
        res.render('home');
    },
    about: (req,res) => {
        res.render('about');
    }
    
 };
 
 module.exports = mainController;