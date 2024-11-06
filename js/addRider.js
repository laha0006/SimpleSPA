

export const addRiderHtml = () => {
    return `<h2>Add Rider</h2>-->
    <form id="postRider">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required><br><br>

        <label for="totalTime">Total Time (in seconds):</label>
        <input type="number" step="0.01" id="totalTime" name="totalTime" required><br><br>

        <label for="sprintPoints">Sprint Points:</label>
        <input type="number" id="sprintPoints" name="sprintPoints" required><br><br>

        <label for="mountainPoints">Mountain Points:</label>
        <input type="number" id="mountainPoints" name="mountainPoints" required><br><br>

        <label for="team">Team:</label>
        <select id="team" name="teamid">
            <option value="">Select a team</option>
            <!-- Team options will be populated here -->
        </select><br><br>

        <button id="pbPostRider" type="submit">Add Rider</button>
    </form>`
}

let isEventListenerAdded = false;

export const addRiderSetUp = () => {
    if (!isEventListenerAdded) {
        console.log("Adding event listener for submit button");
        const submit = document.getElementById("pbPostRider");
        submit.addEventListener("click", handleSubmit);
        isEventListenerAdded = true;
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    const riderName = document.getElementById("name").value
    const riderAge = document.getElementById("age").value
    const totaltime = document.getElementById("totalTime").value
    const sprintPoints = document.getElementById("sprintPoints").value
    const mountainPoints = document.getElementById("mountainPoints").value
    const team = document.getElementById("team").value
    console.log("POST FETCH REQUEST HERE.")
    console.log(riderName);
    console.log(riderAge);
    console.log(totaltime);
    console.log(sprintPoints);
    console.log(mountainPoints);
    console.log(team);
}
