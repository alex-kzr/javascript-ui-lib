import Tooltip from './ui-lib/tooltip';
import Dropdown from './ui-lib/dropdown';

// create tooltips
const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(tooltip => {
    const tooltipInstance = new Tooltip(tooltip);
    tooltipInstance.init();
})

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const dropdownInstance = new Dropdown(dropdown);
    dropdownInstance.init();
});