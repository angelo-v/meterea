var express = require ('express');
var request = require ('request');

var server = express ();

server.configure (function () {
        server.use (express.static (__dirname + '/../app'));
        server.use (express.bodyParser ());
    }
);


server.get ('/meters', function (req, res) {
        res.contentType ('application/json');
        request.get ({url: 'http://localhost:5984/meterea/_design/overview/_view/all?group=true', json: true}, function (error, response, body) {
            var result = [];
            var index;
            for (index = 0; index < body.rows.length; index++) {
                var meter = body.rows[index].value;
                meter.link = '/meters/' + meter.title;
                result.push (meter);
            }
            res.end (JSON.stringify (result));
        });
    }
);

server.get ('/meters/:meterId', function (req, res) {
        res.contentType ('application/json');
        request.get ({url: 'http://localhost:5984/meterea/' + req.params.meterId, json: true}, function (error, response, body) {
            res.end (JSON.stringify ({
                title: body.title,
                readings: body.readings,
                unit: body.unit
            })
            );
        });
    }
);

server.get ('/meters/:meterId/readings', function (req, res) {
        res.contentType ('application/json');
        request.get ({url: 'http://localhost:5984/meterea/' + req.params.meterId, json: true}, function (error, response, body) {
            res.end (JSON.stringify (body.readings)
            );
        });
    }
);

server.post ('/meters', function (req, res) {
    var meter = req.body;
    request.put ({
        url: 'http://localhost:5984/meterea/' + meter.title, // TODO: use reasonable document id
        json: {
            title: meter.title,
            unit: meter.unit,
            readings: [
                {date: meter.date, count: meter.count}
            ]
        }
    }, function (error, response, body) {
        res.end (JSON.stringify (body)); // TODO: send applicable response
        console.log (error);
        console.log ('----------------------');
        console.log (response);
        console.log ('----------------------');
        console.log (body);
    });
});

server.post ('/meters/:meterId/readings', function (req, res) {
    var reading = req.body;
    console.log ('TODO: update document in DB', reading);
    res.statusCode = 501; // Not implemented
    res.end();
});

server.listen (8080);

console.log (new Date ().toISOString () + ' - server started at port 8080');