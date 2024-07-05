// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(middleware);

// let courses = [
//     {id:1, name:'course1'},
//     {id:2, name:'course2'},
//     {id:3, name:'course3'}
// ];

// app.get('/courses',(req,res)=> {
//     res.json(courses);
// })


// app.post('/courses',(req,res)=> {
//     console.log(req);
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.json(course);
// }
// );

// app.put('/courses/:id',(req,res)=> {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with the given ID was not found');
//     course.name = req.body.name;
//     res.json(course);
// });

// app.delete('/courses/:id',(req,res)=> {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with the given ID was not found');
//     const index = courses.indexOf(course);
//     courses.splice(index,1);
//     res.json(course);
// }
// );

// //logger middleware
// // log this method, ip, hostname, date
// function middleware(req,res,next) {
//     console.log('Logging...');
//     console.log('Method: ', req.method);
//     console.log('IP: ', req.ip);
//     console.log('Hostname: ', req.hostname);
//     console.log('Date: ', new Date());

//     next();
// }

// //authentication middleware
// // check if the user is authenticated


// app.listen(3000, ()=> console.log('Listening on port 3000...'));
