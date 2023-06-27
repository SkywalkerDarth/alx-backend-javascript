export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responseData = { message: "API Response" };
      resolve(responseData);
    }, 3000);
  });
}
