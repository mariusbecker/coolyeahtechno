$(document).foundation()

$(document).ready(function () {

	const firstCheckbox = $('.my-checkbox');
  const container = $('.checkbox-container');


  const checkboxesX = container.width() / firstCheckbox.width();
  const checkboxesY = container.height() / firstCheckbox.height();
  const checkboxesTotal = checkboxesX * checkboxesY - 1;
  const newCheckbox = '<input type="checkbox">';

  for (let i = 0; i < checkboxesTotal; i = i + 1) {
  	container.append(newCheckbox);
  }

});
