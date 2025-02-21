// Get the event container where events will be added
const eventContainer = document.querySelector(".event_feed_container");

// Reference to the "users" collection
const usersRef = db.collection('users');

// Function to add data to Firestore
document.getElementById("addDataButton").addEventListener("click", () => {
  const name = document.getElementById("name").value;

  // Add a new document with the name
  usersRef.add({
    name: name
  })
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
});

// Function to create and add an event box
function addEvent() {
    console.log("Create Event Button Clicked!"); // Debugging check

    // Get input values
    const title = document.getElementById("event_title").value;
    const date = document.getElementById("event_date").value;
    const location = document.getElementById("event_location").value;
    const description = document.getElementById("event_description").value;
    const category = document.getElementById("event_category").value;
    const imageInput = document.getElementById("event_image");

    // Check if required fields are filled
    if (!title || !date || !location || !description) {
        alert("Please fill out all fields.");
        return;
    }

    // Handle image upload
    let imageUrl = "https://picsum.photos/300/200"; // Default placeholder
    if (imageInput.files.length > 0) {
        imageUrl = URL.createObjectURL(imageInput.files[0]); // Use uploaded image
    }

    // Create the event box div
    const eventBox = document.createElement("div");
    eventBox.classList.add("event_box");

    // Insert event details into the new event box
    eventBox.innerHTML = `
        <img src="${imageUrl}" alt="Event Image" style="width: 100%; height: auto; border-radius: 5px;">
        <h2>${title}</h2>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p>${description}</p>
        <button class="delete_button">Delete</button>
    `;

    // Add delete functionality to the button
    eventBox.querySelector(".delete_button").addEventListener("click", function () {
        eventBox.remove();
        console.log("Event deleted."); // Debugging check
    });

    // Append event to the event feed container
    eventContainer.appendChild(eventBox);
    console.log("Event added!"); // Debugging check

    // Clear input fields after adding event
    document.getElementById("event_title").value = "";
    document.getElementById("event_date").value = "";
    document.getElementById("event_location").value = "";
    document.getElementById("event_description").value = "";
    document.getElementById("event_category").value = "General";
    document.getElementById("event_image").value = ""; // Clear image input
}

// Attach function to the button
document.getElementById("create_event_button").addEventListener("click", addEvent);