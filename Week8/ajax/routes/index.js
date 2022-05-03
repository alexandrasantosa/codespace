var express = require('express');
var router = express.Router();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('356621209749-9pitib53n1b8tn4k9sudatc8d5k25i3n.apps.googleusercontent.com');


var page_count = 0;

router.get('/count', function(req, res, next) {
    page_count ++;
    res.send('<!DOCTYPE html> \
<html> \
  <head> \
    <title></title> \
    <meta content=""> \
    <style></style> \
  </head> \
  <body><h1>The count is'+page_count+'</h1></body> \
</html>');
});

router.get('/test', function(req, res) {
    res.send("This is a test");
});

var memefiles = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];

/* GET home page. */
router.get('/', function(req, res, next) {

    var memefile = memefiles[Math.floor((Math.random() * 7))];

    res.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Generic WDC Website</title>
    <meta content="">
    <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond%7CLobster" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="stylesheets/style-ajax.css" />
  </head>
  <body>
    <div id="container">
        <header><h1>Generic WDC Website</h1></header>
        <hr />
        <main>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec tellus vel nibh maximus efficitur nec in ipsum. Ut congue placerat posuere. Duis molestie lorem efficitur elit condimentum, non laoreet urna ullamcorper. Quisque eget metus tempus, efficitur enim ut, fermentum enim. Donec mollis dui vitae suscipit aliquet. Nam quis hendrerit augue, a commodo eros. Vestibulum posuere tincidunt tincidunt. Nulla maximus vitae nisl eget posuere. Nam erat risus, pretium sed neque vitae, laoreet facilisis velit. Fusce luctus turpis nisi, id sollicitudin mi iaculis eu. Morbi ultrices mauris vitae ipsum viverra, vitae pellentesque metus venenatis. Donec ultricies sem vel lacus vulputate volutpat. Cras tellus nunc, imperdiet nec urna quis, accumsan viverra nisi. Maecenas eu neque libero.
            </p>
            <p>
            Sed congue diam sapien, nec pharetra nibh bibendum pulvinar. Sed metus odio, mollis at maximus non, tincidunt sed mauris. Maecenas dignissim tellus non dolor commodo tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum viverra lacus diam, ac tempus sapien consequat vel. Fusce a tempus dui. Proin facilisis non sem eget viverra.
            </p>
            <p>
            In eleifend justo congue, dignissim ipsum non, dignissim turpis. Donec vulputate elit nec libero dictum, ac convallis libero varius. Nullam sed odio vel dolor varius dapibus. Praesent luctus eleifend quam id sagittis. Quisque vel velit diam. Donec pretium suscipit ornare. Nam fringilla, purus id condimentum aliquam, massa sem auctor odio, ut lacinia quam ligula a nisi. Nunc vehicula purus sed diam pellentesque blandit.
            </p>
            <p>
            Nunc et lacus nec odio luctus lobortis non sed risus. Etiam tincidunt viverra augue, sit amet lobortis elit tincidunt sit amet. Duis nec augue justo. Suspendisse malesuada nisi eget magna faucibus aliquet. Sed iaculis, neque ut tempus viverra, elit justo luctus arcu, vel varius erat odio ac sem. Maecenas dignissim dolor sed neque ultricies, in semper magna facilisis. In lacinia mattis mi, sit amet blandit nibh fermentum imperdiet. Pellentesque posuere nec neque vel vestibulum. Nulla ultricies ligula eget felis faucibus pretium nec sed eros.
            </p>
            <p>
            Integer ut odio vel urna dapibus porttitor. Vestibulum laoreet sit amet libero nec iaculis. Sed non pretium lorem, quis finibus est. Aliquam erat volutpat. Vestibulum accumsan lacinia orci sit amet feugiat. Integer dapibus lacus vel mollis laoreet. In mollis a tortor sed ultricies. Suspendisse potenti. Nulla ante nulla, placerat ac mauris quis, pretium ultrices neque. Quisque sed est neque. Maecenas a bibendum urna. Mauris dictum, dolor aliquet pretium tempor, nisl nisl bibendum orci, quis suscipit dolor nisl ac lectus.
            </p>
            <p>
            Mauris eget ornare turpis, quis condimentum nisi. Nulla facilisi. Quisque pellentesque neque vitae turpis porttitor, nec euismod dolor convallis. Donec faucibus finibus posuere. Pellentesque et libero ut dui hendrerit posuere non vitae ante. Morbi tristique nibh at gravida tristique. Nam tincidunt posuere metus a vestibulum. Nunc vehicula gravida ex pellentesque mollis. Quisque ullamcorper ante quis posuere egestas. Nam vitae convallis est. Ut nulla velit, pharetra in ligula et, pulvinar congue elit. Maecenas laoreet iaculis dui, ut pretium arcu blandit vel. Etiam laoreet turpis sit amet ligula posuere porttitor. Praesent pulvinar, dui vitae mollis dignissim, nibh velit egestas augue, sit amet placerat lectus augue vel turpis. Praesent rhoncus efficitur orci. Nunc condimentum velit nec tempus auctor.
            </p>
            <p>
            Mauris a ipsum ipsum. Duis fermentum consequat vulputate. Maecenas accumsan justo ut ullamcorper interdum. Maecenas molestie dolor id ligula efficitur consequat. Pellentesque et rutrum justo. Nulla imperdiet congue volutpat. Aenean hendrerit ornare tortor, ac consequat leo. Phasellus fringilla porttitor tellus. Duis ac diam eros. Duis ac orci diam. Aenean consequat ullamcorper velit, nec facilisis ipsum iaculis a. Integer in quam quis ante varius porta non ac leo. Pellentesque magna turpis, posuere a justo ac, tempor iaculis ante.
            </p>
            <p>
            Praesent eu mauris ac magna imperdiet accumsan at quis urna. Donec bibendum, felis id scelerisque congue, massa velit cursus velit, tincidunt mollis ligula ligula a tortor. Mauris eu velit molestie, dignissim magna a, auctor magna. Nam non tincidunt elit. Phasellus vitae arcu vitae nibh porta sagittis vel non eros. Donec placerat hendrerit mi at lacinia. Mauris dictum metus vitae nulla ullamcorper, in vestibulum ex ullamcorper. Nulla facilisi. Donec id velit rhoncus, finibus diam et, ullamcorper ipsum. Etiam in aliquam orci, sed gravida orci. Vestibulum pharetra a augue et tristique. Sed finibus est id diam malesuada fringilla.
            </p>
            <p>
            Curabitur placerat vestibulum aliquet. Sed luctus ut libero sit amet pretium. Maecenas egestas consequat purus, vitae congue diam feugiat nec. Vestibulum tortor nisi, congue porta ante sed, porta lacinia lacus. Maecenas dictum vel libero non cursus. Curabitur laoreet maximus luctus. Suspendisse leo leo, eleifend nec mollis nec, elementum non tellus. Nullam aliquam, elit eu mollis suscipit, enim dolor commodo tellus, id imperdiet magna odio non erat. Morbi ligula leo, hendrerit eu euismod id, condimentum vitae sem. Aliquam diam lorem, fermentum non ultricies vel, sodales vel enim. In hac habitasse platea dictumst. Nulla non auctor lacus.
            </p>
            <p>
            Nam interdum non lorem a aliquet. Fusce sed nisl velit. Etiam lectus dui, placerat sed mauris et, blandit tempus elit. Aenean tempus nulla feugiat porttitor gravida. Ut iaculis ornare ante, nec tincidunt dui. Fusce vestibulum nisi mauris, non posuere neque ultricies ac. Phasellus nec elit non enim dictum dignissim. Nunc in est tortor. Maecenas eu rutrum tellus.
            </p>
            <h2>The meme of the day is:</h2>
            <img src="/images/${memefile}" alt="Meme of the day" /><br />
            <button onclick="window.location.assign('/')">Get a new Meme</button>
        </main>
    </div>
  </body>
</html>
  `);
});



/* THERE HAS TO BE A BETTER WAY */




// GET request for
router.get('/ajax/memeday', function(req, res, next) {
    res.send(memefiles[Math.floor((Math.random() * 7))]);
});



module.exports = router;
