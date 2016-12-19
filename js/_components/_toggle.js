// 
// Example Usage
//
// <a href="#" class="js-show-hide" data-target-selector="h1" data-toggle-class="u-bcg-green">toggle .u-bcg-green</a>

chopstick.toggle =
{
    settings:
    {
        showHideToggle: '.js-show-hide',
        targetDataAtr: 'target-selector',
        classDataAtr: 'toggle-class',
        defaultTriggerClass: 'is-toggled',
        defaultTargetClass: 'is-hidden'
    },

    init: function()
    {
        // Bind toggle events
        this.bindUIEvents();
    },

    bindUIEvents: function()
    {
        // Classic that = this;
        var module = this;

        // Bind show hide event
        $(this.settings.showHideToggle).on('touchstart click', function(e){
            var trigger = $(this);
            var target = trigger.data(module.settings.targetDataAtr);
            var toggleClass = trigger.data(module.settings.classDataAtr);
            // Check if action needs to be prevented
            if (trigger.data("action") == "none") {
                e.preventDefault();
            }
            
            module.showHide(target, toggleClass);
            trigger.toggleClass(module.settings.defaultTriggerClass);
        });
    },

    showHide: function(targets, toggleClass)
    {
        if (typeof toggleClass === 'undefined') { toggleClass = this.settings.defaultTargetClass; }
        //  Toggle the 'is-hidden' class
        $(targets).toggleClass(toggleClass);
    }
};
