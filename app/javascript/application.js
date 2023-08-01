// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
//= require popper
//= require bootstrap-sprockets
//= require jquery
//= require jquery_ujs
//= require_tree .

document.addEventListener('DOMContentLoaded', function() {
    $('input[type="checkbox"][name*="_destroy"]').on('change', function() {
        if ($(this).prop('checked')) {
            $(this).closest('div').find('input[type="file"]').prop('disabled', true);
        } else {
            $(this).closest('div').find('input[type="file"]').prop('disabled', false);
        }
    });
});