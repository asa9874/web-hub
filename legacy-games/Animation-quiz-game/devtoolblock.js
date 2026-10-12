

//개발자 도구 대비
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
        event.stopPropagation();
    }
    // Ctrl+Shift+I
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        event.stopPropagation();
    }
    // Ctrl+U
    if ((event.ctrlKey || event.metaKey) && event.key === 'U') {
        event.preventDefault();
        event.stopPropagation();
    }

    // Ctrl+Shift+C (요소 검사 도구 열기)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') {
        event.preventDefault();
        event.stopPropagation();
        return;
    }

    // Ctrl+Shift+J (콘솔 열기)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'J') {
        event.preventDefault();
        event.stopPropagation();
        return;
    }

});

!function() {
    function detectDevTool(allow) {
      if(isNaN(+allow)) allow = 100;
      var start = +new Date(); 
      debugger;
      var end = +new Date(); 
      if(isNaN(start) || isNaN(end) || end - start > allow) {
        window.location.href = 'https://www.youtube.com/watch?v=UdKqwnqnJXo';
      }
    }
    if(window.attachEvent) {
      if (document.readyState === "complete" || document.readyState === "interactive") {
          detectDevTool();
        window.attachEvent('onresize', detectDevTool);
        window.attachEvent('onmousemove', detectDevTool);
        window.attachEvent('onfocus', detectDevTool);
        window.attachEvent('onblur', detectDevTool);
      } else {
          setTimeout(argument.callee, 0);
      }
    } else {
      window.addEventListener('load', detectDevTool);
      window.addEventListener('resize', detectDevTool);
      window.addEventListener('mousemove', detectDevTool);
      window.addEventListener('focus', detectDevTool);
      window.addEventListener('blur', detectDevTool);
    }
  }();