var express = require ('express');

var meters = [
    {
        "title": "Kaltwasser",
        "count": 12345.67,
        "dateLastRead": "27.06.2013",
        "comparedToLastYear": 11,
        "comparedToLastMonth": -10,
        "link": "/meters/kaltwasser"
    },
    {
        "title": "Strom",
        "count": 789.10,
        "dateLastRead": "27.06.2013",
        "comparedToLastYear": 7,
        "comparedToLastMonth": -3,
        "link": "/meters/strom"
    },
    {
        "title": "Gas",
        "count": 111213.14,
        "dateLastRead": "27.06.2013",
        "comparedToLastYear": 3,
        "comparedToLastMonth": -2,
        "link": "/meters/gas"
    }
];

var server = express ()

server.configure (function () {
        server.use (express.static (__dirname + '/../app'))
    }
)


server.get ('/meters', function (req, res) {
        res.contentType ('application/json')
        res.end (JSON.stringify (meters)
        );
    }
)

server.get ('/meters/:meterId', function (req, res) {
        res.contentType ('application/json')
        res.end (JSON.stringify ({
            title: req.params.meterId,
            readings: []
        })
        );
    }
)

server.listen (8080);

console.log (new Date ().toISOString () + ' - server started at port 8080');