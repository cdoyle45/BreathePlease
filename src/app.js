var UI = require('ui');
var Vector2 = require('vector2');

var cloud = new UI.Image({
  position: new Vector2(0,0),
  size: new Vector2(144, 168),
  image: 'images/breathe_bg.png'
});

var main = new UI.Card({
  title: ' Breathe',
  icon: 'images/cloud.png',
  subtitle: 'Press Select',
  body: 'An app to help regulate your breathing in the event of a panic attack.'
});

main.show();

main.on('click', 'select', function(e) {
  var wind = new UI.Window({ fullscreen: true, backgroundColor: 'white' });
  var countdown = 5;
  /*
  var exittext = new UI.Text({
    position: new Vector2(100, 150),
    font: 'gothic-22-bold',
    text: 'Press back to exit.',
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'right'
  });
  */
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Breathe In...' + countdown.toString(),
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center'
    
  });
  wind.add(cloud);
  wind.add(textfield);
  //wind.add(exittext);
  
  var count = 0;
  var interval = setInterval(function () {
    if (countdown > 1)
      countdown--;
    else if (countdown == 1) {
      count++;
      countdown = 5;
    }
    else clearInterval(interval);
    
    var display_text;

    if (count%2 === 0)
      display_text = 'Breathe In...\n' + countdown.toString();
    else
      display_text = 'Breathe Out...\n' + countdown.toString();

    textfield.text(display_text);
  }, 1500);
  wind.show();
});