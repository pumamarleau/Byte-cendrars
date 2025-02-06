const form = document.getElementById('contactform');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const firstname = document.getElementById('firstname').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const object = document.getElementById('object').value;
        const message = document.getElementById('message').value;

        console.log('Prénom:', firstname);
        console.log('Nom:', name);
        console.log('Email:', email);
        console.log('objet:', object);
        console.log('Message:', message);

        logdl.style.display = "block";
        logmsg.style.display = "block";
    }); 