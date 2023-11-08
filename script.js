/* iife *************************************************************************************/
(() => {
  dday();
})();
/* function *********************************************************************************/
function dday() {
  var targetDate = new Date("2023-07-20");
  var currentDate = new Date();
  var timeDiff = currentDate - targetDate;
  var currentDday = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return (document.getElementById("d-day").textContent = `진우🩷진주 ${currentDday+1}일`);
}
/* function *********************************************************************************/