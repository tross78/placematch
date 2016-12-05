import * as connectLivereload from 'connect-livereload';
import * as express from 'express';
var compression = require('compression');
import * as bodyParser from 'body-parser';
import * as openResource from 'open';
import * as serveStatic from 'serve-static';
import {resolve} from 'path';
import * as mysql from 'mysql';

import {APP_BASE, LIVE_RELOAD_PORT, PATH, PORT} from '../tools/config';

const INDEX_DEST_PATH = resolve(PATH.cwd, PATH.dest.app.base, 'index.html');

const server = express();

server.use(compression());

server.use(
  APP_BASE,
  //connectLivereload({ port: LIVE_RELOAD_PORT }),
  serveStatic(resolve(PATH.cwd, PATH.dest.app.base), {
  maxAge: '31557600', setHeaders: setCacheControl})
);

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

function setCacheControl(res:any, path:any) {
    res.setHeader('Cache-Control', 'public, max-age=31557600')
}


server.get('/api/query', function (request, response) {

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'pmatch',
    password : 'Ra7wx1waYH',
    database: 'placematch'
  });

  var home_postcode = request.query.home ? parseInt(request.query.home).toString():'4000';
  var range_number = request.query.age ? (parseInt(request.query.age)+1).toString(): '1';
  if (isNaN(parseInt(range_number))) {
    range_number = '1';
  }
  var nightlife_radio = request.query.nightlife?connection.escape(request.query.nightlife):'no';
  var nightlife_pref = "nightlifecount ASC";

  var max_distance = request.query.distance?parseInt(request.query.distance):'10';

  var church_type = request.query.church ? request.query.church: 'None';
  var church_query = "";
  var train_station_pref = request.query.train ? connection.escape(request.query.train): 'no';
  var train_station_query = "";

  if (nightlife_radio === "yes") {
    nightlife_pref = "nightlifecount DESC";
  }
  if (church_type != "None") {
    //console.log("church not none");
    church_query = "AND postcode_nearby IN (SELECT postcode FROM placematch.churches WHERE name LIKE '%"+ church_type + "%')";
  }
  if (train_station_pref === "yes") {
    train_station_query = "AND postcode_nearby IN (SELECT postcode FROM placematch.qld_train_stations WHERE postcode = postcode_nearby)";
  }



  //response.send(nightlife_pref);
  //connection.connect();
  var query_str = 'SELECT qld_suburb_age.postcode, suburb, total, total_offences_sum, nightlifecount, average_weekly_rent, range_' + (range_number) + '_pc FROM placematch.qld_suburb_age '+
  'LEFT JOIN (SELECT division, postcode, SUM(total_offence_rate) as total_offences_sum FROM qld_offence_rates WHERE `Month Year` LIKE \'%-14%\' GROUP BY division) as offences ON qld_suburb_age.postcode = offences.postcode ' +
  'LEFT JOIN (SELECT postcode, AVG(`weekly-rent`) as average_weekly_rent FROM placematch.qld_rental_bonds WHERE bedrooms = 2 GROUP BY postcode) as rent ON qld_suburb_age.postcode = rent.postcode ' +
  'LEFT JOIN (SELECT postcode, count(*) as NightlifeCount FROM placematch.qld_licenced_venues GROUP BY postcode ORDER BY NightlifeCount DESC) as nightlife ON qld_suburb_age.postcode = nightlife.postcode ' +
  'WHERE qld_suburb_age.postcode IN (SELECT postcode_nearby FROM postcodes_near WHERE postcode_home = ' +home_postcode + ' AND distance_km = ' + max_distance + ' ' + church_query + ' ' + train_station_query + ') ' +
  'GROUP BY qld_suburb_age.postcode ' +
  'ORDER BY ' +
  'range_' + (range_number) + '_pc DESC, ' +
  'average_weekly_rent ASC, ' +
  nightlife_pref + ', ' +
  'total_offences_sum ASC' +
  ' LIMIT 5';
  //console.log(query_str);

    connection.query(query_str,
      function(err, rows, fields) {
         if (err) {
           response.send(err);
           throw err;
         }
         //console.log(query_str);
        response.json({"results":rows});
        connection.end();
      });
  //response.send(query_str);

  });

server.all(APP_BASE + '*', (req, res) =>
  res.sendFile(INDEX_DEST_PATH)
);


server.listen(PORT, () => {
  const url = 'http://localhost:' + PORT + APP_BASE;
  if (process.env.RESTART) {
    console.log('Server restarted at: ', url);
  } else {
    openResource(url);
    console.log('Server started at: ', url);
  }
});
