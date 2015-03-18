## Change paths

(for drupal add happybrowser dir to your theme dir)

* in happybrowser.html & happybrowserIE.html change the image paths to match your working environment. 
* in happybrowser.js change the path jQuery.load is using to your working environment. 
	* for non-drupal sites use the happybrowser-nojquery.js
* Add your scripts and links to the header  -- bowser.js, happybrowser.js /or/ happybrowser-nojquery.js, happybrowser.css, and jquery.js if needed. 
* For drupal make sure compile JS and CSS are active in /admin/config/development/performance


#### Third Party Scripts Needed. 

* Jquery needs to be added to the header (for angular sites use happybrowser-nojquery.js)
	* for drupal use jquery_update module js on the frontend must be 1.10 or higher the dev version may need to be used
* bowser.js needs to be added [bowser](https://github.com/ded/bowser) - currently lives in happybrowser dir. check the bowser repo for updates. 


## Current Setup

IE8 or less will get the notification that the browser is not
supported and shows links to upgrades.

non msie sites with a grade of C or less (all non supported browsers
specified by w3c) will get the notification that the browser is not
supported and shows links to upgrades.

The happybrowser notification bar can be dismissed but will show on
all pages loads.

#### To change setup: edit happybrowser.js conditionals or add more. 

For form more information on setup options see [bowser](https://github.com/ded/bowser)
