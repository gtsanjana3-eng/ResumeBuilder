function generateResume(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;

    document.getElementById("resume").innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;
}