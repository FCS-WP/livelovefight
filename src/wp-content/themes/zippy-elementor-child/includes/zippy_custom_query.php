<?php

add_action('elementor/query/pet_loop', function ($query) {
    $query->set('post_type', 'product');
    $query->set('tax_query', [
        [
            'taxonomy' => 'product_cat',
            'field'    => 'slug',
            'terms'    => ['pet'],
        ],
    ]);
});

add_action('elementor/query/service_loop', function ($query) {
    $query->set('post_type', 'product');
    $query->set('tax_query', [
        [
            'taxonomy' => 'product_cat',
            'field'    => 'slug',
            'terms'    => ['service'],
        ],
    ]);
});

add_action('elementor/query/product_loop', function ($query) {
    $query->set('post_type', 'product');
    $query->set('tax_query', [
        [
            'taxonomy' => 'product_cat',
            'field'    => 'slug',
            'terms'    => ['product'],
        ],
    ]);
});
