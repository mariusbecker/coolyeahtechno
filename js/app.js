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
