<?php
add_filter('woocommerce_account_menu_items', 'remove_my_account_downloads');
function remove_my_account_downloads($items)
{
    unset($items['downloads']);
    return $items;
}
