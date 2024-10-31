function getTomorroDate() {
  const today = new Date();
  console.log("🚀 ~ file: TomorrowDate.js:3 ~ getTomorroDate ~ today:", today);

  const tomorrow = new Date(today);
  console.log(
    "🚀 ~ file: TomorrowDate.js:6 ~ getTomorroDate ~ tomorrow:",
    tomorrow
  );

 const he= tomorrow.setDate(today.getDate() + 1);
  return tomorrow.toDateString();
}
const toDate = getTomorroDate();
console.log(toDate);
