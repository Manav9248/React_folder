import express from 'express'; // modulesJs


const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{

    const jokes = [ // array
        {
            // object
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id:3,
            title: 'A 3rd joke',
            content: 'This is a third  joke'
        },
        {
            id:4,
            title: 'A 4th joke',
            content: 'This is a fourth joke'
        },
        {
            id:5,
            title: 'A 5th joke',
            content: 'This is a fifth joke'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`server at http://localhost:${port}`);
}); 