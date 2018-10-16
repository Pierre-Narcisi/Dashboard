module.exports = function(app, passport) {
	app.get('/', function(req, res) {
		res.render('home.ejs', { message: req.flash('loginMessage') });
	});

	app.get('/login', function(req, res) {
		res.render('login.ejs', { message: req.flash('loginMessage') }); 
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/dashboard',
		failureRedirect : '/login',
		failureFlash : true
	}));

	app.get('/signup', function(req, res) {
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/dashboard',
		failureRedirect : '/signup',
		failureFlash : true
	}));
    
	app.get('/dashboard', isLoggedIn, function(req, res) {
		res.render('dashboard.ejs', {
			user : req.user
		});
	});
    
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

	app.get('/auth/google/callback',
	passport.authenticate('google', {
		successRedirect : '/dashboard',
		failureRedirect : '/'
	}));

	app.get('/auth/facebook', passport.authenticate('facebook', { 
		scope : ['public_profile', 'email']
	      }));
	  
	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect : '/dashboard',
			failureRedirect : '/'
		}));
	  
	
};
	
function isLoggedIn(req, res, next) {    
	if (req.isAuthenticated())
    		return next();    
	res.redirect('/');
}
    