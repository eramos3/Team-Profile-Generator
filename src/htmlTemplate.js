
// for (i=0; i < templateData.length; i++){
// Object.keys(templateData);
// // }
// const (Object.keys()) = templateData;

const genTemplate = templateData => {
    console.log(templateData)

    // goes through every array element and saves it to card
    let card = " ";
    for (i = 0; i < templateData.length; i++) {
        console.log(templateData.length)
        // to isolate last property of each class 
        let objProp = templateData[i].officeNum || templateData[i].school || templateData[i].githubUser;
        let objKey = Object.keys(templateData[i]);
        let uniqueProp = objKey[4] + ": " + objProp
        if (objKey[4] === "githubUser") {
            uniqueProp = (`Github: <a target = "_blank" href = 'https://github.com/${templateData[i].githubUser}'>${templateData[i].githubUser}</a>`);
        } else if (objKey[4] === "officeNum"){
            uniqueProp = "Office Number: " + templateData[i].officeNum;
        }   else if (objKey[4] === "school"){
            uniqueProp = "School: " + templateData[i].school;
        }
        // creates cards for each employee
        let { name, id, email, role } = templateData[i];
        card += `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body card-header">
                        <h5 class="card-title">${name}</h5>
                        <h6 class="card-subtitle">Title: ${role}</h6>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item"> ID: ${id}</li>
                        <li class="list-group-item"> Email: <a href="mailto:${email}"> ${email}</a></li>
                        <li class="list-group-item"> ${uniqueProp} </li>
                    </ul>
                </div>
            </div> 
            `        
    }
    return card;

};

const handleRender = templateData =>{
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>

        <body>
        <header class="container-fluid">
            <nav class="navbar navbar-light bg-info justify-content-center">
                <h1 class="text-light">My Team</h1>
            </nav>
        </header>

        <main class="container mt-5">
            <div>
                <div class="row">
                    ${genTemplate(templateData)}
                </div>
            </div>
        </main>
        </body>

        </html>
        `;
}

  // console.log(objProp);
    // console.log(objKey[2]);
    // for(const [key,value] of Object.entries(templateData)){
    //     console.log(`${key}: ${value}}`);
    // }

module.exports =  handleRender;