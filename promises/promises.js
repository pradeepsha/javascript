
    console.log(`Hello promises v${process.versions.node}!`);

    let user = fetch(`https://api.github.com/users/pradeepsha`)
    console.log(user)
    user.then(function(data){
        console.log(data)
    })

