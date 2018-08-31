const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

let Tasks = require('./models/Tasks');

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tasks');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});


router.route('/tasks').get((req, res)=>{
	Tasks.find((err, tasks)=>{
		if (err) console.log(err);
		else res.json(tasks);
	})
});
router.route('/tasks/:id').get((req, res)=>{
	Tasks.find((err, tasks)=>{
		if (err) console.log(err);
		else res.json(tasks);
	})
});
router.route('/tasks/add').post((req, res)=>{
	let task = new Tasks(req.body);
	task.save()
	.then(task=>{
		res.status(200).json({ 'task': 'added !'});
	})
	.catch(err => res.status(400).send('Failed to post data'))
});
router.route('/tasks/:id').put((req, res)=>{
	Tasks.findOneAndUpdate({_id:req.params.id}, req.body,(err, tasks)=>{
		if (err) console.log(err);
		else res.json("Task Updated");
	})
});
router.route('/tasks/:id').delete((req, res)=>{
	Tasks.findOneAndRemove({_id:req.params.id},(err, tasks)=>{
		if (err) console.log(err);
		else res.json("Task deleted");
	})
});

app.use('/', router);
app.listen(4000, () =>{
	console.log("Server started");
});