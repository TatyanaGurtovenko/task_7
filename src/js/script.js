import $ from "jquery";
import '../scss/style.scss'
import 'bootstrap/dist/js/bootstrap'
import data from '../data/data.json';
import blockTmp from '../components/block-text.hbs';
import titleTmp from '../components/block-title.hbs';
const root = document.getElementById('root');
const title = titleTmp({ title: data.h_name });
const blocks = blockTmp({ blocks: data.blocks });

root.innerHTML += title;
root.innerHTML += blocks;

$(document).ready(function () {
    $('.btn-modal').click(function () {
        $('.modal-wrapper').fadeIn();
    });

    $('.modal-close').click(function () {
        $('.modal-wrapper').fadeOut();
    });
});

let offset = 0;
const sliderLine = $('.slider-line');
const sliderNext = $('.slider-next');
const sliderPrev = $('.slider-prev');

sliderNext.on('click', function () {
    offset = offset + 300;
    sliderPrev.prop('disabled', false);
    if (offset > 300) {
        sliderNext.prop('disabled', true);
    }
    sliderLine.css('left', -offset + 'px');
});

sliderPrev.on('click', function () {
    offset = offset - 300;
    sliderNext.prop('disabled', false);
    if (offset < 300) {
        offset = 0;
        sliderPrev.prop('disabled', true);
    }
    sliderLine.css('left', -offset + 'px');
});



