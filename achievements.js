<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Projects | Clinton Ncube</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f7fb;
            color: #222;
        }

        header {
            background: #111827;
            color: white;
            padding: 25px;
            text-align: center;
        }

        header h1 {
            margin-bottom: 10px;
        }

        nav {
            margin-top: 15px;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 0 10px;
            font-weight: bold;
        }

        nav a:hover {
            color: #60a5fa;
        }

        .container {
            width: 90%;
            max-width: 1100px;
            margin: 40px auto;
        }

        .intro {
            text-align: center;
            margin-bottom: 35px;
        }

        .intro h2 {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .intro p {
            color: #666;
        }

        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
        }

        .project-card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 5px 18px rgba(0,0,0,0.1);
            transition: transform 0.25s ease;
        }

        .project-card:hover {
            transform: translateY(-5px);
        }

        .project-icon {
            font-size: 40px;
            margin-bottom: 15px;
        }

        .project-card h3 {
            margin-bottom: 10px;
            font-size: 21px;
        }

        .project-card p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .project-link {
            display: inline-block;
            padding: 10px 16px;
            background: #111827;
            color: white;
            text-decoration: none;
            border-radius: 7px;
        }

        .project-link:hover {
            background: #2563eb;
        }

        .loading {
            text-align: center;
            padding: 40px;
            color: #666;
            font-size: 18px;
        }

        .empty {
            text-align: center;
            padding: 40px;
            background: white;
            border-radius: 12px;
            color: #666;
        }

        footer {
            margin-top: 50px;
            padding: 25px;
            background: #111827;
            color: white;
            text-align: center;
        }

        @media (max-width: 600px) {
            nav a {
                display: inline-block;
                margin: 5px;
            }

            .intro h2 {
                font-size: 27px;
            }
        }
    </style>
</head>

<body>

<header>

    <h1>Clinton Ncube</h1>

    <p>My Projects</p>

    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="projects.html">Projects</a>
        <a href="hobbies.html">Hobbies</a>
        <a href="skills.html">Skills</a>
        <a href="achievements.html">Achievements</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
    </nav>

</header>


<div class="container">

    <div class="intro">

        <h2>My Projects</h2>

        <p>
            School, educational and personal projects
            that I have worked on.
        </p>

    </div>


    <div id="projects" class="projects">

        <div class="loading">
            Loading projects...
        </div>

    </div>

</div>


<footer>

    <p>© 2026 Clinton Ncube. All rights reserved.</p>

</footer>


<script type="module">

    import { initializeApp }
        from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";


    import {
        getDatabase,
        ref,
        onValue
    }
    from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";


    const firebaseConfig = {

        apiKey: "AIzaSyB66c1Tymv5lkTxY89HLbX4S_QTpAZQVUE",

        authDomain:
            "clinton-ncube-website.firebaseapp.com",

        databaseURL:
            "https://clinton-ncube-website-default-rtdb.firebaseio.com",

        projectId:
            "clinton-ncube-website",

        storageBucket:
            "clinton-ncube-website.firebasestorage.app",

        messagingSenderId:
            "946671700613",

        appId:
            "1:946671700613:web:5d74536df1dbb0d35e77ec",

        measurementId:
            "G-K1S62MHHXP"
    };


    const app = initializeApp(firebaseConfig);

    const db = getDatabase(app);

    const projectsRef =
        ref(db, "projects");


    const container =
        document.getElementById("projects");


    onValue(projectsRef, (snapshot) => {

        container.innerHTML = "";


        if (!snapshot.exists()) {

            container.innerHTML = `

                <div class="empty">

                    <h3>No projects yet.</h3>

                    <p>
                        Projects added from the
                        Admin Dashboard will appear here.
                    </p>

                </div>

            `;

            return;
        }


        const projects = snapshot.val();


        Object.entries(projects).forEach(
            ([id, project]) => {

                const card =
                    document.createElement("div");

                card.className =
                    "project-card";


                const icon =
                    document.createElement("div");

                icon.className =
                    "project-icon";

                icon.textContent = "📚";


                const title =
                    document.createElement("h3");

                title.textContent =
                    project.title ||
                    "Untitled Project";


                const description =
                    document.createElement("p");

                description.textContent =
                    project.description ||
                    "";


                card.appendChild(icon);

                card.appendChild(title);

                card.appendChild(description);


                if (project.link) {

                    const link =
                        document.createElement("a");

                    link.className =
                        "project-link";

                    link.href =
                        project.link;

                    link.target = "_blank";

                    link.rel = "noopener noreferrer";

                    link.textContent =
                        "View Project";


                    card.appendChild(link);
                }


                container.appendChild(card);

            }
        );

    });

</script>

</body>
</html>
