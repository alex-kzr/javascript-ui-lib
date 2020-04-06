import Tooltip from './ui-lib/tooltip';
import Dropdown from './ui-lib/dropdown';
import Tabs from './ui-lib/tabs';

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