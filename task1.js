const yargs = require('yargs')
const taskData = require('./task1Data')
// add
yargs.command({
    command: "add",
    describe: "add to data",
    builder: {
        id: {
            describe: "distinguishing id", 
            demandOption: true,
            type: "number"
        },
        fname: {
            describe: "this is the first name of added data", 
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this is the last name of added data", 
            demandOption: false,
            type: "string"
        },
        age: {
            describe: "this is the last name of added data", 
            demandOption: true,
            type: "number"
        },
    }, 
    handler: (x) => {
     taskData.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
})
// delete
yargs.command({
    command: "delete",
    describe: "delete an element",
    builder: {
        id: {
            describe: "id of deleted element",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x)=>{
        taskData.deletePerson(x.id)
    }
})
// read
yargs.command({
    command: 'read',
    describe: 'read a data element',
    builder: {
        id: {
            describe: 'id of element to read',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (x) => {
        taskData.readPerson(x.id)
    }
})
// list
yargs.command({
    command: 'list',
    describe: 'list first name, age, and city of all data',
    handler: ()=>{
        taskData.listData()
    }
})
// sort by name
yargs.command({
    command: 'sort',
    describe: 'sort the data by first name',
    handler: ()=>{
        taskData.sortByName()
    }
})

yargs.parse() //or console.log(yargs.argv)
/*
TASK:
    LOGIC: ADD
  
        add 10 ppl in .json file & pervent dublicated data
        delete 4 (2, 5, 6, 9)
        read data by id 2 times (3, 8)
        list data (fname - age - city)


*/