const Agenda = require('agenda');
const { MongoClient } = require('mongodb');

var connectionString = "mongodb://localhost:27017/SMS_Hub";
var agenda = new Agenda({ db: { address: connectionString, collection: 'scheduled_messages' } });

var scheduled = true

var sampleTime = new Date()


//02/07/2018 3:31 PM

checkScheduling = () => {

    if (scheduled) {
        console.log('Scheduling exists. Creating job')

        agenda.define('send message', { priority: 'high' }, function (job, done) {

            console.log('executing scheduled job.')
            console.log('Hello World!!!')
            if (done) {
                job.remove()
                console.log('deleting job')
            }
        });

        agenda.on('ready', function () {
            agenda.schedule('2018-02-03 20:08:00', 'send message')
            agenda.start()
        })


    } else if (!scheduled) {
        console.log('proceeding to dupe')
    } else {
        console.log('no jobs running')
    }
}

checkScheduling()




















// console.log('Running schedule script')

// checkScheduling = () => {
//     var scheduleBool = true

//     if (scheduleBool == true) {
//         console.log('Schedule true, creating job');

//         var date = new Date(2018, 1, 2, 9, 54, 0);

//         var j = schedule.scheduleJob(date, function () {
//             console.log('Executing job')
//         })
//     } else {
//         console.log('Proceeding to dupe')
//     }
// }

// checkScheduling()