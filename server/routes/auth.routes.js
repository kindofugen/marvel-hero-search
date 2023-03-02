const express = require('express');
const fs = require('fs');
const TokenService = require('../models/token');
const User = require('../models/user');
const router = express.Router({mergeParams: true});

router.post('/signup', async(req, res) => {
    const db = JSON.parse(fs.readFileSync(require.resolve('../db/users.json'), 'utf-8'));
    try {
        const {login, password} = req.body;
        const existingUser = db.users.some((user) => user.login === login);
        if (!login) {
            return res.status(400).json({
                error: {
                    message: 'EMPTY_LOGIN_INPUT',
                    code: 400 
                }
            })
        }
        if (!password) {
            return res.status(400).json({
                error: {
                    message: 'EMPTY_PASSWORD_INPUT',
                    code: 400 
                }
            })
        }

        if (existingUser) {
            return res.status(400).json({
                error: {
                    message: 'USER_EXIST',
                    code: 400 
                }
            })
        } else {
            const newUser = new User(login, password);
            fs.readFile(require.resolve('../db/users.json'), (err, data) => {
                if (err) {
                    const status = 401;
                    const message = err.message;
                    res.status(status).json({message})
                    return;
                }
                data = JSON.parse(data.toString());
                data.users.push(newUser);
                fs.writeFile(require.resolve('../db/users.json'), JSON.stringify(data), (err, res) => {
                    if (err) {
                        const status = 401;
                        const message = err.message;
                        res.status(status).json({ message });
                        return;
                    }
                });

            })
            const token = TokenService.generate(newUser.id);
            res.status(201).send(token);         
        }
        

    } catch (error) {
        
        res.status(500).json({
            message: "Server error. Please try later."
        });
    }
    
});

router.post('/signin', async(req, res) => {
    const db = JSON.parse(fs.readFileSync(require.resolve('../db/users.json'), 'utf-8'));
    try {
        const {login, password} = req.body;
        const existingUser = db.users.some((user) => user.login === login);

        if (!login) {
            return res.status(400).json({
                error: {
                    message: 'EMPTY_LOGIN_INPUT',
                    code: 400 
                }
            })
        }
        if (!password) {
            return res.status(400).json({
                error: {
                    message: 'EMPTY_PASSWORD_INPUT',
                    code: 400 
                }
            })
        }
        
        if (!existingUser) {
            return res.status(400).json({
                error: {
                    message: 'USER_NOT_FOUND',
                    code: 400 
                }
            })
        }

        const userIndex = db.users.findIndex((user) => {
            return user.login === login && user.password === password
        });

        const isUserDataCorrect = userIndex !== -1;
        
        if (isUserDataCorrect) {
            const token = TokenService.generate(db.users[userIndex].id);
            res.status(200).send(token);
        }

    } catch (error) {
        res.status(500).json({
            message: "Server error. Please try later."
        }); 
    }
    
});

module.exports = router;