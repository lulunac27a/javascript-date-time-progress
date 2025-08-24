const yearInput = document.getElementById("year"); //year input field
const monthInput = document.getElementById("month"); //month input field
const dayInput = document.getElementById("day"); //day input field
const hourInput = document.getElementById("hour"); //hour input field
const minuteInput = document.getElementById("minute"); //minute input field
const secondInput = document.getElementById("second"); //second input field
const millisecondInput = document.getElementById("millisecond"); //millisecond input field
const calculateButton = document.getElementById("calculate"); //button to trigger calculation
calculateButton.addEventListener("click", calculateDateTimeProgress); //event listener for button click
const resultDiv = document.getElementById("result"); //result output text
const yearProgressBar = document.getElementById("yearProgress"); //year progress bar
const monthProgressBar = document.getElementById("monthProgress"); //month progress bar
const dayProgressBar = document.getElementById("dayProgress"); //day progress bar
const hourProgressBar = document.getElementById("hourProgress"); //hour progress bar
const minuteProgressBar = document.getElementById("minuteProgress"); //minute progress bar
const secondProgressBar = document.getElementById("secondProgress"); //second progress bar
function calculateDateTimeProgress() {
    const year = parseInt(yearInput.value); //year input value
    const month = parseInt(monthInput.value); //month input value
    const day = parseInt(dayInput.value); //day input value
    const hour = parseInt(hourInput.value); //hour input value
    const minute = parseInt(minuteInput.value); //minute input value
    const second = parseInt(secondInput.value); //second input value
    const millisecond = parseInt(millisecondInput.value); //millisecond input value
    const targetDate = new Date(
        Date.UTC(year, month - 1, day, hour, minute, second, millisecond),
    ); //target date in UTC
    const yearStart = new Date(Date.UTC(year, 0, 1, 0, 0, 0, 0)); //start of year
    const yearEnd = new Date(Date.UTC(year + 1, 0, 1, 0, 0, 0, 0)); //end of year
    const yearDuration = yearEnd - yearStart; //year duration
    const yearProgress = (yearEnd - targetDate) / yearDuration; //year progress
    const monthStart = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0)); //start of month
    const monthEnd = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0)); //end of month
    const monthDuration = monthEnd - monthStart; //month duration
    const monthProgress = (monthEnd - targetDate) / monthDuration; //month progress
    const dayStart = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0)); //start of day
    const dayEnd = new Date(Date.UTC(year, month - 1, day + 1, 0, 0, 0, 0)); //end of day
    const dayDuration = dayEnd - dayStart; //day duration
    const dayProgress = (dayEnd - targetDate) / dayDuration; //day progress
    const hourStart = new Date(Date.UTC(year, month - 1, day, hour)); //start of hour
    const hourEnd = new Date(Date.UTC(year, month - 1, day, hour + 1)); //end of hour
    const hourDuration = hourEnd - hourStart; //hour duration
    const hourProgress = (hourEnd - targetDate) / hourDuration; //hour progress
    const minuteStart = new Date(Date.UTC(year, month - 1, day, hour, minute)); //start of minute
    const minuteEnd = new Date(
        Date.UTC(year, month - 1, day, hour, minute + 1),
    ); //end of minute
    const minuteDuration = minuteEnd - minuteStart; //minute duration
    const minuteProgress = (minuteEnd - targetDate) / minuteDuration; //minute progress
    const secondStart = new Date(
        Date.UTC(year, month - 1, day, hour, minute, second),
    ); //start of second
    const secondEnd = new Date(
        Date.UTC(year, month - 1, day, hour, minute, second + 1),
    ); //end of second
    const secondDuration = secondEnd - secondStart; //second duration
    const secondProgress = (secondEnd - targetDate) / secondDuration; //second progress
    resultDiv.innerText = `
    Year Progress: ${(1 - yearProgress) * 100}%\n
    Month Progress: ${(1 - monthProgress) * 100}%\n
    Day Progress: ${(1 - dayProgress) * 100}%\n
    Hour Progress: ${(1 - hourProgress) * 100}%\n
    Minute Progress: ${(1 - minuteProgress) * 100}%\n
    Second Progress: ${(1 - secondProgress) * 100}%
    `;
    yearProgressBar.value = yearProgress * 100; //update year progress bar
    monthProgressBar.value = monthProgress * 100; //update month progress bar
    dayProgressBar.value = dayProgress * 100; //update day progress bar
    hourProgressBar.value = hourProgress * 100; //update hour progress bar
    minuteProgressBar.value = minuteProgress * 100; //update minute progress bar
    secondProgressBar.value = secondProgress * 100; //update second progress bar
}
