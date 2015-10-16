chopstick.toggle =
{
    settings:
    {
        showHideToggle: '.js-show-hide',
        targetDataAtr: 'target-selector',
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
            // Check if action needs to be prevented
            if (trigger.data("action") == "none") {
                e.preventDefault();
            }
            module.showHide(trigger.data(module.settings.targetDataAtr));
            trigger.toggleClass(module.settings.defaultTriggerClass);
        });
    },

    showHide: function(targets)
    {
        //  Toggle the 'is-hidden' class
        $(targets).toggleClass(this.settings.defaultTargetClass);
    }
};
