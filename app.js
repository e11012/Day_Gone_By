const monthSelect = document.querySelector("select#month");
const daySelect = document.querySelector("select#day");

function numbers(n) {
  const number = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31".split(
    ","
  );
  return number.slice(0, n);
}

const dayMap = {
  January: 31,
  February: 29,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
};
monthSelect.addEventListener("change", (e) => {
  if (e.target.value) {
    daySelect.disabled = false;
    daySelect.innerHTML =
      `<option value="" selected>Select a section</option>` +
      numbers(dayMap[e.target.value]).map(
        (s) => `<option value="${s}">${s.toUpperCase()}</option>`
      );
  } else {
    daySelect.disabled = true;
  }
});

async function a() {
  let api = `https://history.muffinlabs.com/date`;

  const responce = await fetch(api);
  const data = await responce.json();
  const arr = data.data.Events;
  let d = "";
  arr.forEach((val) => {
    const year = val.year + "\n";
    const text = val.text + "\n\n";
    document.getElementById("event").textContent = d;
    d += year;
    d += text;
  });
  const responce1 = await fetch(api);
  const data1 = await responce1.json();
  const arr1 = data1.data.Deaths;
  let h = "";

  arr1.forEach((val) => {
    const year = val.year + "\n";
    const text = val.text + "\n\n";
    document.getElementById("death").textContent = h;
    h += year;
    h += text;
  });
  const responce2 = await fetch(api);
  const data2 = await responce2.json();
  const arr2 = data2.data.Births;
  let c = "";

  arr2.forEach((val) => {
    const year = val.year + "\n";
    const text = val.text + "\n\n";
    document.getElementById("birth").textContent = c;
    c += year;
    c += text;
  });
}
a();
async function handleSubmit(e) {
  e.preventDefault();
  //alert(`Hello, from ${monthSelect.value}${daySelect.value}.`);
  let api = `https://history.muffinlabs.com/date/${monthSelect.value}/${daySelect.value}`;

  const responce = await fetch(api);
  const data = await responce.json();
  const arr = data.data.Events;
  let d = "";
  arr.forEach((val) => {
    const year = val.year + "\n";
    const text = val.text + "\n\n";
    document.getElementById("event").textContent = d;
    d += year;
    d += text;
  });
  const responce1 = await fetch(api);
  const data1 = await responce1.json();
  const arr1 = data1.data.Deaths;
  let h = "";

  arr1.forEach((val) => {
    const year = val.year + "\n";
    const text = val.text + "\n\n";
    document.getElementById("death").textContent = h;
    h += year;
    h += text;
  });
  const responce2 = await fetch(api);
  const data2 = await responce2.json();
  const arr2 = data2.data.Births;
  let c = "";

  arr2.forEach((val) => {
    const year = val.year + "\n";
    const text = val.text + "\n\n";
    document.getElementById("birth").textContent = c;
    c += year;
    c += text;
  });
}

document.querySelector("form").addEventListener("submit", handleSubmit);
