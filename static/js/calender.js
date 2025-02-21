const calender = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calender");
    var calender = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
    });
    calender.render();
  });
};
