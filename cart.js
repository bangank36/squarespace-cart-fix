var FIELD_MAPS = {
    "CARTPAGE_CONTAINER":           ["_3tQnbn8EH", "CartPage-container"],
    "CARTHEADER_TITLE":             ["_9Dk3d9xee", "CartHeader-cartTitle"],
    "CARTTABLE_CONTAINER":          ["_5Lix3J-TS", "CartTable-cartContainer"],
    "CARTTABLE_HEADER":             ["D0rsAaEYm", "CartTable-cartItemListLabels"],
    "CARTTABLE_ITEM_LABEL":         ["D0rsAaEYm", "CartTable-itemLabel"],
    "CARTTABLE_ITEM_IMAGE":         ["tAzC4oW2l", "CartTable-itemImage"],
    "CARTTABLE_ITEM_DESC":          ["_2yPkq6OKE", "CartTable-itemDesc"],
    "CARTTABLE_ITEM_QUANTITY":      ["_225eTv05l", "CartTable-itemQuantity"],
    "CARTTABLE_ITEM_PRICE":         ["XgjsO_M3Y", "CartTable-itemPrice"],
    "CARTTABLEROW_ITEM_ROW":        ["qrq0lfTEB", "CartTableRow-cartItemList"],
    "CARTTABLEROW_ITEM_REMOVE":     ["_6Q3nPzvUk", "CartTableRow-itemRemove"],
    "CARTTABLEROW_ITEM_IMAGE":      ["_1bz_-awbY", "CartTableRow-itemImage"],
    "CARTTABLEROW_ITEM_IMAGEBG":    ["_97RUmoca6", "CartTableRow-imageBg"],
    "CARTTABLEROW_ITEM_DESC":       ["_1MjICGhm_", "CartTableRow-itemDesc"],
    "CARTTABLEROW_ITEM_TITLE":      ["_1MDgZZPKX", "CartTableRow-itemTitle"],
    "CARTTABLEROW_ITEM_VARIANT_INFO":       ["_1Ms2coAVX", "CartTableRow-variantInfo"],
    "CARTTABLEROW_ITEM_QUANTITY":   ["LwuRxog4z", "CartTableRow-itemQuantity"],
    "CARTTABLEROW_ITEM_QUANTITY_STOPPED":   ["_2BFKBVmHw", "CartTableRow-stopped"],
    "CARTTABLEROW_ITEM_PRICE":      ["_26eXSmpLx", "CartTableRow-itemPrice"],
    "CARTTABLE_SUBTOTAL":           ["_2nJjmtuOe", "CartTable-subtotal"],
    "CARTTABLE_SUBTOTAL_LABEL":     ["_3qWE9VU-U", "CartTable-subtotalLabel"],
    "CARTTABLE_SUBTOTAL_PRICE":     ["_2JFeDgZcv", "CartTable-subtotalPrice"],
    "CARTFOOTER_CHECKOUT":          ["_28MW26vhi", "CartFooter-checkout"],
    "CARTFOOTER_CHECKOUT_BUTTON":   ["_3yWY284uI", "CheckoutButton-checkoutButton"],
}

$(document).ready(function() {
    for (var field in FIELD_MAPS) {
        var el = $("."+FIELD_MAPS[field][0]);
        el.addClass(FIELD_MAPS[field][1]);        
    }
});
