app.post('/register', (req, res) => {
    // read the existing data from the users.json file
    const users = JSON.parse(fs.readFileSync('users.json'));
  
    // add the new user to the array
    const newUser = req.body;
    users.push(newUser);
  
    // write the updated data back to the file
    fs.writeFileSync('users.json', JSON.stringify(users));
  
    res.send('User registered successfully');
  });
  