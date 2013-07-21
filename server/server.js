var express = require ('express');
var request = require ('request');

var server = express ();

server.configure (function () {
        server.use (express.static (__dirname + '/../app'))
    }
);


server.get ('/meters', function (req, res) {
        res.contentType ('application/json');
        request.get ({url: 'http://localhost:5984/meterea/_design/overview/_view/all?group=true', json: true}, function (e, r, obj) {
            var result = [];
            var index;
            for (index = 0; index < obj.rows.length; index++) {
                var meter = obj.rows[index].value;
                meter.link = '/meters/' + meter.title;
                result.push (meter);
            }
            res.end (JSON.stringify (result));
        })

    }
);

server.get ('/meters/:meterId', function (req, res) {
        res.contentType ('application/json');
        res.end (JSON.stringify ({
            title: req.params.meterId,
            readings: []
        })
        );
    }
);

server.listen (8080);

console.log (new Date ().toISOString () + ' - server started at port 8080');