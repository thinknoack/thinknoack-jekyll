$('.dropdown-chevron-mobile').on('click', function (e) {
  e.preventDefault()

  // Toggles the arrow class on itself.
  $(this).toggleClass('open')

  // Get the parent list item and its id.
  var parent = $(e.target).parent('li')
  parent.children('ul').toggleClass('open')
})

$(document).ready(function () {
  // $('.large-port.odd').waypoint(function(direction) {
  //     $(this.element).addClass('animated fadeInUp visibleAn').removeClass('hideAn');
  // }, {
  //         offset: '85%'
  // });

  // $('.small-port.odd').waypoint(function(direction) {
  //     $(this.element).addClass('animated fadeInUp visibleAn').removeClass('hideAn');
  // }, {
  //         offset: '85%'
  // });

  // $('.large-port.even').waypoint(function(direction) {
  //     $(this.element).addClass('animated fadeInUp visibleAn').removeClass('hideAn');
  // }, {
  //         offset: '60%'
  // });

  // $('.small-port.even').waypoint(function(direction) {
  //     $(this.element).addClass('animated fadeInUp visibleAn').removeClass('hideAn');
  // }, {
  //         offset: '60%'
  // });

//   $('#contact').waypoint(
//     function (direction) {
//       $('#contact .bio')
//         .addClass('animated flipInX visibleAn')
//         .removeClass('hideAn')
//     },
//     {
//       offset: '85%',
//     }
//   )

  $('#html-chart').waypoint(
    function (direction) {
      $('#html-chart').css('width', '92%')
    },
    {
      offset: '88%',
    }
  )

  $('#css-chart').waypoint(
    function (direction) {
      $('#css-chart').css('width', '89%')
    },
    {
      offset: '88%',
    }
  )

  $('#js-chart').waypoint(
    function (direction) {
      $('#js-chart').css('width', '59%')
    },
    {
      offset: '88%',
    }
  )

  $('#design-chart').waypoint(
    function (direction) {
      $('#design-chart').css('width', '80%')
    },
    {
      offset: '88%',
    }
  )

  $('#cms-chart').waypoint(
    function (direction) {
      $('#cms-chart').css('width', '88%')
    },
    {
      offset: '88%',
    }
  )

  $('#life-chart').waypoint(
    function (direction) {
      $('#life-chart').css('width', '98%')
    },
    {
      offset: '88%',
    }
  )
})

$(window).scroll(function () {
  if ($('.navbar').offset().top > 50) {
    $('.fixed-top').addClass('small')
  } else {
    $('.fixed-top').removeClass('small')
  }
  var x = 2
})

function boxRollovers() {
  $selector = $('.background-follow')
  XAngle = 110
  YAngle = 110
  Z = 0

  $selector.on('mousemove', function (e) {
    var $this = $(this)
    var XRel = e.pageX - $this.offset().left
    var YRel = e.pageY - $this.offset().top
    var width = $this.width()

    YAngle = -(0.5 - XRel / width) * 40
    XAngle = (0.5 - YRel / width) * 40
    updateView($this.children('.icon'))
  })

  $selector.on('mouseleave', function () {
    oLayer = $(this).children('.icon')
    oLayer.css({
      transform:
        'perspective(1500px) translateZ(0) rotateX(0deg) rotateY(0deg)',
      transition: 'all 150ms linear 0s',
      '-webkit-transition': 'all 150ms linear 0s',
    })
    oLayer.find('strong').css({
      transform:
        'perspective(1500px) translateZ(0) rotateX(0deg) rotateY(0deg)',
      transition: 'all 150ms linear 0s',
      '-webkit-transition': 'all 150ms linear 0s',
    })
  })
}

function updateView(oLayer) {
  oLayer.css({
    transform:
      'perspective(1500px) translateZ(' +
      Z +
      'px) rotateX(' +
      XAngle +
      'deg) rotateY(' +
      YAngle +
      'deg)',
    transition: 'none',
    '-webkit-transition': 'none',
  })
  oLayer.find('strong').css({
    transform:
      'perspective(1500px) translateZ(' +
      Z +
      'px) rotateX(' +
      XAngle / 0.66 +
      'deg) rotateY(' +
      YAngle / 0.66 +
      'deg)',
    transition: 'none',
    '-webkit-transition': 'none',
  })
}

$(function () {
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click()
  })

  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top,
        },
        1500,
        'easeInOutExpo'
      )
    event.preventDefault()
  })

  boxRollovers()
})
