const { Navigation } = require('react-native-navigation');
//const Colors = require('./Colors');

const setDefaultOptions = () => Navigation.setDefaultOptions({
    layout: {
        componentBackgroundColor: Colors.background,
        orientation: ['portrait']
    },
    bottomTabs: {
        titleDisplayMode: 'alwaysShow'
    },
    bottomTab: {
        selectedIconColor: '#e3e3e3',//Colors.primary,
        selectedTextColor: '#000000',//Colors.primary
    }
});

module.exports = {
    setDefaultOptions
}