export const getDate = (dateString) => {
  const newDate = new Date(dateString);
  const day = newDate.toLocaleString("en-IN", { day: "2-digit" });
  const month = newDate.toLocaleString("en-IN", { month: "long" });
  const year = newDate.getFullYear();
  return `${day} ${month} ${year}`;
};
