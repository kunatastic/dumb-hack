var form = document.getElementById("admin-form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

const room_name = document.getElementById("room-name");
console.log(room_name.value);

// Generates a random String of length 6
const randomRoom = () => {
  const room = Math.random().toString(16).substr(2, 6);
  console.log(room);
  room_name.value = room;
};

// Generate the new Page
const create = async () => {
  if (room_name.value != "") {
    alert(room_name.value);
    window.location.href = `/${room_name.value}/organizer`;
  }
};
