/* iife *************************************************************************************/
(() => {
  dday();
})();
/* function *********************************************************************************/
function dday() {
  const now = new Date();
  const start = new Date("2023-07-20");
  const timeDiff = now.getTime() - start.getTime();
  const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
  return (document.getElementById("d-day").textContent = `진우🩷진주 ${day}일`);
}
/* function *********************************************************************************/
