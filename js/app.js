$(document).foundation()

$(document).ready(function () {

	const firstCheckbox = $('.my-checkbox');
  const container = $('.checkbox-container');


  const checkboxesX = container.width() / firstCheckbox.width();
  const checkboxesY = container.height() / firstCheckbox.height();
  const checkboxesTotal = checkboxesX * checkboxesY - 1;
  const newCheckbox = '<input type="checkbox">';
  const newCheckboxes = [];

  for (let i = 0; i < checkboxesTotal; i = i + 1) {
  	newCheckboxes.push(newCheckbox);
  }

  container.append(newCheckboxes.join(''));

});


$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);
    });

};
