const company = {
    name: "TechNova Solutions",
    headquarters: "Tbilisi",
    departments: {
        development: {
            manager: "Nino Beridze",
            teams: [
                {
                    teamName: "Frontend",
                    members: [
                        { name: "Nika", role: "Developer", salary: 2000, projects: ["Website Redesign", "Landing Page"] },
                        { name: "Ana", role: "Intern", salary: 800, projects: ["Landing Page"] }
                    ]
                },
                {
                    teamName: "Backend",
                    members: [
                        { name: "Luka", role: "Developer", salary: 2200, projects: ["API System", "Database Migration"] },
                        { name: "Mariam", role: "Lead Developer", salary: 3000, projects: ["API System"] }
                    ]
                }
            ]
        },
        marketing: {
            manager: "Giorgi Mchedlidze",
            teams: [
                {
                    teamName: "Digital Marketing",
                    members: [
                        { name: "Dato", role: "SEO Specialist", salary: 1500, projects: ["Google Ads", "SEO Audit"] },
                        { name: "Salome", role: "Content Creator", salary: 1300, projects: ["Blog Posts", "Email Campaign"] }
                    ]
                }
            ]
        }
    }
};

// Print the company name in uppercase and the headquarters in lowercase.
const companyName = company.name.toUpperCase();
const headquarters = company.headquarters.toLowerCase();
console.log(companyName + ",", headquarters);

// Loop through all departments using for...in.
for (let dep in company.departments) {
    console.log(dep);
}

// Print the department name (uppercase) and the manager’s name.
for (let dep in company.departments) {
    let manager = company.departments[dep].manager;
    console.log(dep.toUpperCase() + ",", manager);
}

// Inside each department, loop through all teams using a for loop.
for (let dep in company.departments) {
    let teams = company.departments[dep].teams;
    for (let team = 0; team < teams.length; team++) {
        console.log(teams[team]);
    }
}

// Print the team name in uppercase.
for (let dep in company.departments) {
    let teams = company.departments[dep].teams;
    for (let team = 0; team < teams.length; team++) {
        console.log(teams[team].teamName.toUpperCase());
    }
}

// For each member in a team:
// Print their name in uppercase and their role in lowercase.
for (let dep in company.departments) {
    let teams = company.departments[dep].teams;
    for (let team = 0; team < teams.length; team++) {
        let members = teams[team].members;
        for (let i = 0; i < members.length; i++) {
            console.log(members[i].name.toUpperCase() + ",", members[i].role.toLowerCase());
        }
    }
}

// Use a ternary operator to check if salary ≥ 2000 → "High Salary" else "Low Salary".
for (let dep in company.departments) {
    let teams = company.departments[dep].teams;
    for (let team = 0; team < teams.length; team++) {
        let members = teams[team].members;
        for (let i = 0; i < members.length; i++) {
            let result = members[i].salary >= 2000 ? "High Salary" : "Low Salary";
            console.log(members[i].salary + " -", result);
        }
    }
}

// Print all the projects each member is working on (loop through the projects array).
for (let dep in company.departments) {
    let teams = company.departments[dep].teams;
    for (let team = 0; team < teams.length; team++) {
        let members = teams[team].members;
        for (let i = 0; i < members.length; i++) {
            for (let j = 0; j < members[i].projects.length; j++)
                console.log(members[i].name, "-", members[i].projects[j]);
        }
    }
}