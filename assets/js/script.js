window.onload = function () {
  // Show invitation on button click
  const btnShowInvitation = document.getElementById("show-invitation");
  btnShowInvitation.onclick = function () {
    // btnShowInvitation.classList.add("d-none");
    const invitation = document.querySelector("#invitation");
    invitation.classList.remove("d-none");
    invitation.scrollIntoView();
  };

  function dateDifference(start, end) {
    // Convert the dates to milliseconds
    const startTime = start.getTime();
    const endTime = end.getTime();

    // Calculate the difference in milliseconds
    let timeDifference = endTime - startTime;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    timeDifference %= 1000 * 60 * 60 * 24;

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    timeDifference %= 1000 * 60 * 60;

    const minutes = Math.floor(timeDifference / (1000 * 60));
    timeDifference %= 1000 * 60;

    const seconds = Math.floor(timeDifference / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  // Updating wedding timer
  const daysElement = document.querySelector(".timer.days");
  const hoursElement = document.querySelector(".timer.hours");
  const minutesElement = document.querySelector(".timer.minutes");
  const secondsElement = document.querySelector(".timer.seconds");

  const weddingTime = new Date("2024-02-14 8:00 PM");

  if (Date.now() < weddingTime) {
    setInterval(function () {
      const difference = dateDifference(new Date(), weddingTime);

      daysElement.replaceChildren(difference.days);
      hoursElement.replaceChildren(difference.hours);
      minutesElement.replaceChildren(difference.minutes);
      secondsElement.replaceChildren(difference.seconds);
    }, 1000);
  }

  // Update copyright year
  document.querySelector("#copyright-year").innerHTML =
    new Date().getFullYear();
};

// Intersection Observer to handle scroll-triggered animations
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.5 }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
