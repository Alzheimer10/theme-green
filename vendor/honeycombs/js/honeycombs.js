  /* jshint node:true */
  /* globals TweenLite */

  'use strict';

  /**
   * This bastard of a thing
   * @type {Object}
   */
  var HexGrid = {
    $container: $('.hex-container'),
    $refresh: $('.js-grid-refresh'),
    $gridItems: $('.hex-grid__item:not(.no-refresh)'),

    /**
     * Animation properties
     * @type {Object}
     */
    animation: {
      duration: 0.5,

      visible: {
        autoAlpha: 1,
        delay: 0.05,
        scale: 1
      },

      hidden: {
        autoAlpha: 0,
        scale: 0.8
      }
    },

    /**
     * Kick things off by watching for a refresh
     */
    init: function() {
      this.$refresh.on('click', this.refreshGrid);
    },

    /**
     * Try to recalculate positions if we need to
     * Probably most useful when grid isn't 100vw
     * but in some sort of container
     *
     * @return void
     */
    calculate: function() {
      var w = this.$container.width(),
          rowCount = 6,
          $newRow = $('.hex-grid__item:nth-child(n+7):nth-child(-n+13)');

      // TODO: Find some way to calculate correct border-widths

      // Setting with the width() method doesn't apply correct value
      $('.hex-grid__item').css('width', w / rowCount);

      // Calculations taken from Sass file
      $newRow.css({
        'left': w / -(rowCount * 2),
        'top': w / -(rowCount * 4),
        'margin-bottom': w / -(rowCount * 2)
      });
    },

    /**
     * Fancy-dancy animations
     *
     * @param  event e
     * @return void
     */
    refreshGrid: function(e) {
      var _ = HexGrid,
          i = 0;

      e.preventDefault();

      // Need to reset it on each call so we don't build up a long delay
      _.animation.visible.delay = 0.3;

      // Hide everything first
      TweenLite.to(_.$gridItems, _.animation.duration, _.animation.hidden);

      // Loop through and display with a small delay between each one
      // TODO: Maybe apply animations randomly
      for (i; i < _.$gridItems.length; i++) {
        _.animation.visible.delay += 0.05;
        TweenLite.to(_.$gridItems[i], _.animation.duration, _.animation.visible);
      }
    }
  };

  HexGrid.init();