import * as flsFunctions from './modules/functions.js';
import jQuery from 'jquery';

flsFunctions.isWebp();
window.$ = window.jQuery = jQuery;

$(function() {
    // Реализация выпадающего списка регионов в шапке сайта
    $('.region').on('click', '.region__selected', function(){
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $(this).addClass('open');
            $(this).fadeIn();
            $(this).next().fadeIn();
            $(this).parent().find('.fa-caret-down').hide();
            $(this).parent().find('.fa-caret-up').show();
        }
    });

    $('.region').on('click', '.region__link', function(){
        $(this).parent().find('.active').removeClass('active');
        $('.region__selected').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().find('.region__title').text($(this).text());
        $(this).parent().parent().find('.fa-caret-up').hide();
        $(this).parent().parent().find('.fa-caret-down').show();
        $(this).addClass('active');
    });
});



