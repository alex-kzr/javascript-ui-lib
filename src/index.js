import Tooltip from './ui-lib/tooltip';
import Dropdown from './ui-lib/dropdown';
import Tabs from './ui-lib/tabs';
import Snackbar from './ui-lib/snackbar';

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

// create tabs
const tabsIntances = document.querySelectorAll('.tabs');
tabsIntances.forEach(tabs => {
    const tabsInstance = new Tabs(tabs);
    tabsInstance.init();
});

// create snackbar
const snackbar = new Snackbar();
snackbar.init();
document.querySelector('.snackbar-trigger').addEventListener('click', () => {
    snackbar.show('you clicked me ;)');
});