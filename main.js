const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const millisecondInput = document.getElementById("millisecond");
const resultDiv = document.getElementById("result");
function calculateDateTimeProgress() {
  const year = parseInt(yearInput.value);
  const month = parseInt(monthInput.value);
  const day = parseInt(dayInput.value);
  const hour = parseInt(hourInput.value);
  const minute = parseInt(minuteInput.value);
  const second = parseInt(secondInput.value);
  const millisecond = parseInt(millisecondInput.value);
  const targetDate = new Date(
    Date.UTC(year, month - 1, day, hour, minute, second, millisecond),
  );
  const yearStart = new Date(Date.UTC(year, 0, 1, 0, 0, 0, 0));
  const yearEnd = new Date(Date.UTC(year + 1, 0, 1, 0, 0, 0, 0));
  const yearDuration = yearEnd - yearStart;
  const yearProgress = (yearEnd - targetDate) / yearDuration;
  const monthStart = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
  const monthEnd = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));
  const monthDuration = monthEnd - monthStart;
  const monthProgress = (monthEnd - targetDate) / monthDuration;
  const dayStart = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
  const dayEnd = new Date(Date.UTC(year, month - 1, day + 1, 0, 0, 0, 0));
  const dayDuration = dayEnd - dayStart;
  const dayProgress = (dayEnd - targetDate) / dayDuration;
  const hourStart = new Date(Date.UTC(year, month - 1, day, hour));
  const hourEnd = new Date(Date.UTC(year, month - 1, day, hour + 1));
  const hourDuration = hourEnd - hourStart;
  const hourProgress = (hourEnd - targetDate) / hourDuration;
  const minuteStart = new Date(Date.UTC(year, month - 1, day, hour, minute));
  const minuteEnd = new Date(Date.UTC(year, month - 1, day, hour, minute + 1));
  const minuteDuration = minuteEnd - minuteStart;
  const minuteProgress = (minuteEnd - targetDate) / minuteDuration;
  const secondStart = new Date(
    Date.UTC(year, month - 1, day, hour, minute, second),
  );
  const secondEnd = new Date(
    Date.UTC(year, month - 1, day, hour, minute, second + 1),
  );
  const secondDuration = secondEnd - secondStart;
  const secondProgress = (secondEnd - targetDate) / secondDuration;
  resultDiv.innerText = `
    Year Progress: ${(1 - yearProgress) * 100}%\n
    Month Progress: ${(1 - monthProgress) * 100}%\n
    Day Progress: ${(1 - dayProgress) * 100}%\n
    Hour Progress: ${(1 - hourProgress) * 100}%\n
    Minute Progress: ${(1 - minuteProgress) * 100}%\n
    Second Progress: ${(1 - secondProgress) * 100}%
  `;
}
