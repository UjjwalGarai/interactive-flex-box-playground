

let itemSelectElement = $('#item-select')
$('.color-item').each(function (index, element) {
    var elementText = $(element).text();
    var optionTag = $(`<option value="${elementText}">${elementText}</option>`)
    itemSelectElement.append(optionTag);
});

// itemSelectElement.prepend(`<option value="none" selected >None</option>`);

let flexBoxContainer = $('.container');
flexBoxContainer.css('display', 'flex');
flexBoxContainer.css('flex-direction', 'column');
// console.log(flexBoxContainer);

$('#flex-direction').change(function (e) {
    let getValue = $(e.target).val()
    flexBoxContainer.css('flex-direction', getValue)
});

$('#justify-content').change(function (e) {
    let getValue = $(e.target).val();
    flexBoxContainer.css('justify-content', getValue);
});

$('#align-items').change(function (e) {
    let getValue = $(e.target).val();
    flexBoxContainer.css('align-items', getValue);
});

$('#flex-wrap').change(function (e) {
    let getValue = $(e.target).val();
    flexBoxContainer.css('flex-wrap', getValue);
});

$('#align-content').change(function (e) {
    let getValue = $(e.target).val();
    flexBoxContainer.css('align-content', getValue);
});


$('#gap-property').change(function () {
    let gapType = $(this).val();
    let gapValue = $('#gap-value').val();
    flexBoxContainer.css(gapType, gapValue + 'px');
});

$('#gap-value').change(function () {
    $('#gap-property').trigger('change'); // Reapply gap with updated value
});

// Set the initial selected item
let selectedItem = $('#item-select').val().toLowerCase();
let previousSelectedItem = selectedItem;

// Set default flex properties for all items
$('.color').css({
    'flex': '0 1 auto',
    'order': 0,
    'align-self': 'auto'
});

// Function to reset a specific item to default CSS
function resetItemToDefault(item) {
    $(`.${item}`).css({
        'order': 0,
        'flex-grow': 0,
        'flex-shrink': 1,
        'flex-basis': 'auto',
        'align-self': 'auto'
    });
    $('#order-value').val(0);
    $('#flex-grow').val(0);
    $('#flex-shrink').val(1);
    $('#flex-basis').val(0);
    $('#flex-align-self').val('auto');
}

// Reset the previously selected item's CSS and update the new selected item
itemSelectElement.change(function (e) {
    if (previousSelectedItem) {
        resetItemToDefault(previousSelectedItem);
    }
    
    selectedItem = $(e.target).val().toLowerCase();
    previousSelectedItem = selectedItem;
    
    // Optionally, set default values in the sliders and dropdowns to match the new item
    resetItemToDefault(selectedItem);
});

// Function to apply a style property to the selected item if it's valid
function applyStyle(property, value) {
    $(`.${selectedItem}`).css(property, value);
}

// Change handlers for various flex properties
$('#order-value').change(function (e) {
    applyStyle('order', $(e.target).val());
});

$('#flex-grow').change(function (e) {
    applyStyle('flex-grow', $(e.target).val());
});

$('#flex-shrink').change(function (e) {
    applyStyle('flex-shrink', $(e.target).val());
});

$('#flex-basis').change(function (e) {
    // applyStyle('flex-basis', $(e.target).val());
    applyStyle('flex-basis', $(e.target).val() + '%')
});

$('#flex-align-self').change(function (e) {
    applyStyle('align-self', $(e.target).val());
});
