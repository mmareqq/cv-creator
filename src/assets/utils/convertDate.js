export default function convertDate(date) {
  if (!date) return;
  let newDate = date.slice(date.length - 2);
  newDate += '/' + date.substr(0, 4);
  return newDate;
}
