//damn 经过n久的魔改这里应该没有任何一行是shit 不像隔壁的css
//但是他确实像一坨屎全都塞在一起，别问为什么，问就是魔改过得放一起不想拆，放外面的都是没改过的

//修复动画+统一监听+重定向按钮+隐藏登陆+超时跳转+错误提示+回车提交 （合并）
document.addEventListener('DOMContentLoaded', function () {
    const bottomNav = document.querySelector('.MsLGXC-bottom-nav'),
        error = document.getElementById('error-message'),
        empty = document.getElementById('empty-message'),
        username = document.getElementById('username'),
        password = document.getElementById('password'),
        trigger = document.querySelector('.btn--trigger'),
        headline = document.querySelector('.trigger-headline'),
        segmenter = new Segmenter(document.querySelector('.segmenter'), {
            pieces: 9,
            positions: [
                { top: 30, left: 5, width: 40, height: 80 },
                { top: 50, left: 25, width: 30, height: 30 },
                { top: 5, left: 75, width: 40, height: 20 },
                { top: 30, left: 45, width: 40, height: 20 },
                { top: 45, left: 15, width: 50, height: 40 },
                { top: 10, left: 40, width: 10, height: 20 },
                { top: 20, left: 50, width: 30, height: 70 },
                { top: 0, left: 10, width: 50, height: 60 },
                { top: 70, left: 40, width: 30, height: 30 }
            ],
            animation: {
                duration: 2000,
                easing: 'easeInOutCubic',
                delay: 0,
                opacity: 1,
                translateZ: 85,
                translateX: { min: -20, max: 20 },
                translateY: { min: -20, max: 20 }
            },
            parallax: true,
            parallaxMovement: { min: -10, max: -5 }
        });
    
    username.addEventListener('blur', function () {
        if (this.value.trim() === '') {
            empty.style.display = 'flex';
            setTimeout(function () {
                empty.style.animation = 'fadeOut 0.5s ease-out forwards'
                empty.addEventListener('animationend', function () {
                    this.style.display = 'none'
                    this.style.animation = ''
                    this.removeEventListener('animationend', arguments.callee)
                })
            }, 3000)
        } else {
            empty.style.display = 'none';
        }
    });

    password.addEventListener('blur', function () {
        if (this.value.trim() === '') {
            empty.style.display = 'flex';
            setTimeout(function () {
                empty.style.animation = 'fadeOut 0.5s ease-out forwards'
                empty.addEventListener('animationend', function () {
                    this.style.display = 'none'
                    this.style.animation = ''
                    this.removeEventListener('animationend', arguments.callee)
                })
            }, 3000)
        } else {
            empty.style.display = 'none';
        }
    });
    const inputs = [username, password]
    inputs.forEach(function (input) {
        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                trigger.click()
            }
        })
    })
    trigger.addEventListener('click', function () {
        if (username.value == 'MsLGXC' && password.value == '10881256') {
            segmenter.animate()
            headline.classList.remove('trigger-headline--hidden')
            trigger.classList.add('btn--hidden')
            bottomNav.style.display = "none";
            setTimeout(() => {
                window.location.href = 'MsLGXC2.html'
            }, 5000)
        } else {
            error.style.display = 'flex'
            setTimeout(function () {
                error.style.animation = 'fadeOut 0.5s ease-out forwards'
                error.addEventListener('animationend', function () {
                    this.style.display = 'none'
                    this.style.animation = ''
                    this.removeEventListener('animationend', arguments.callee)
                })
            }, 3000)
        }
    })
})
//标题滚动+活动检测
const titles = ['hello', '欢迎来到', '我的国度', '不要走开', '精彩马上来']
let index = 0
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '你去哪了？'
    } else{
        document.title = '想我了吗？'
        setTimeout(() => {
            const timer = setInterval(() => {
                index = (index + 1) % titles.length;
                document.title = titles[index];
            }, 2000)
        }, 2000)
    }
});
//手风琴完全魔改
var what_items = $(".what-item");
var currentIndex = 0;
var intervalId;
function startAutoplay() {
  clearInterval(intervalId);
  intervalId = setInterval(function() {
    goNext(); 
  }, 3000);
}
function goNext() {
  if (currentIndex >= what_items.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateItems(currentIndex);
}
function updateItems(activeIndex) {
  what_items.removeClass("what-item-active").eq(activeIndex).addClass("what-item-active");
  what_items.eq(activeIndex).css({
    height: '448px',
    "z-index": '10'
  });
  what_items.slice(0, activeIndex).each(function(index, item) {
    var prevHeight = 448 - 20 * (activeIndex - index);
    $(item).css({
      height: prevHeight + 'px',
      "z-index": '9'
    });
  });
  what_items.slice(activeIndex + 1).each(function(index, item) {
    var nextHeight = 448 - 20 * index;
    $(item).css({
      height: nextHeight + 'px',
      "z-index": '8'
    });
  });
  $(".what-more").html(whatList[activeIndex]).addClass("active-more").fadeIn("slow");
  $(".active-more").not($(".what-more")).hide();
}
what_items.click(function() {
  var clickedIndex = what_items.index(this);
  if (currentIndex !== clickedIndex) {
    clearInterval(intervalId); 
    currentIndex = clickedIndex;
    updateItems(currentIndex);
  }
});
$(document).ready(function() {
  startAutoplay();
  new WOW().init(); 
});
what_items.hover(function() {
  clearInterval(intervalId); 
}, function() {
  startAutoplay();
});
var whatList = ['仅使用Golang项目','只会一点点','入门正学习','入门正龟速学习逆向','会一半','会一半','仅部分软件需求本地服务器接触','在此网页中安装但是什么功能都没写'];
// 菜单魔改
(function($) { "use strict";
    var cursors = ["cursor", "cursor2", "cursor3"].map(function(id) {
        return document.getElementById(id);
    });
    document.addEventListener("mousemove", function(event) {
        cursors.forEach(function(cursor) {
            cursor.style.left = event.clientX + "px";
            cursor.style.top = event.clientY + "px";
        });
    });
    function toggleHoverState(isEnter) {
        cursors.slice(1).forEach(function(cursor, index) {
            cursor.classList[isEnter ? 'add' : 'remove']("hover");
        });
    }
    toggleHoverState(false);
    document.querySelectorAll(".hover-target").forEach(function(target) {
        target.addEventListener("mouseover", function() {
            toggleHoverState(true);
        });
        target.addEventListener("mouseout", function() {
            toggleHoverState(false);
        });
    });
    var menuIcon = document.querySelector('.menu-icon');
    var body = document.querySelector('body');
    menuIcon.addEventListener('click', function() {
        body.classList.toggle('nav-active');
    });
    document.querySelector('.menu-icon').addEventListener('click', function() {
        toggleClass(document.querySelector('body'), 'nav-active');
    });
})(jQuery);

// 叠影魔改
function getTwoDecimal(num) {
    return parseFloat((num + 0.5).toFixed(2));
  }
  const mouse = {
    decimal: function(coord) {
      return getTwoDecimal(coord / 1000);
    },
    x: function(e) {
      return Math.abs(e.clientX - window.innerWidth / 2);
    },
    y: function(e) {
      return Math.abs(e.clientY - window.innerHeight / 2);
    }
  };
  function changeTextAlphaVal(txt, e) {
    const root = document.querySelector(':root');
    const cssVar = '--alpha';
    let currentAlpha = getComputedStyle(root).getPropertyValue(cssVar).trim();
    const max = parseFloat(currentAlpha);
    const dx = mouse.decimal(mouse.x(e));
    const dy = mouse.decimal(mouse.y(e));
    let alphaVal = (dx <= 0) ? (dy >= max ? dy : getTwoDecimal(max - dy)) : (dx >= max ? dx : getTwoDecimal(max - dx));
    txt.style.setProperty(cssVar, alphaVal);
  }
  function createShadow(e, currTarget) {
    const walk = Math.round(Math.max(window.innerWidth, window.innerHeight) / 6);
    const coordWalk = (coord, side) => Math.round((coord / side) * walk - (walk / 2));
    const xWalk = coordWalk(e.clientX, currTarget.offsetWidth);
    const yWalk = coordWalk(e.clientY, currTarget.offsetHeight);
    const colors = { pink: '255, 0, 139', blue: '0, 86, 255', yellow: '255, 240, 0' };
    const typoAlpha = 0.6;
    const typo = currTarget.querySelector('.typo');
    changeTextAlphaVal(typo, e);
    typo.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(${colors.pink}, ${typoAlpha}),
      ${-xWalk}px ${yWalk * 2}px 0 rgba(${colors.blue}, ${typoAlpha}),
      ${-xWalk * 2}px ${-yWalk}px 0 rgba(${colors.yellow}, ${typoAlpha})
    `;
  }
  const onPointerMove = (e) => {
    createShadow(e, e.currentTarget);
  };
  const heading = document.querySelector('.heading');
  heading.addEventListener('mousemove', onPointerMove);
  heading.addEventListener('touchmove', onPointerMove);