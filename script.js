/* iife *************************************************************************************/
(() => {
  dday();
})();
/* function *********************************************************************************/
function dday() {
  var now = new Date();
  var start = new Date('2023-07-20');
  var timeDiff = now.getTime() - start.getTime();
  var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
  return (document.getElementById("d-day").textContent = `진우🩷진주 ${day}일`);
}
/* function *********************************************************************************/