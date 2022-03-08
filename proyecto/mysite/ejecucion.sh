
#! /bin/bash

sqlite3 -header -csv ./db.sqlite3 "select * from polls_equipo;" > polls_equipo.csv
sqlite3 -header -csv ./db.sqlite3 "select * from polls_interfacegeojson;" > polls_interfacegeojson.csv
sqlite3 -header -csv ./db.sqlite3 "select * from polls_persona;" > polls_persona.csv
sqlite3 -header -csv ./db.sqlite3 "select * from polls_proyecto;" > polls_proyecto.csv
sqlite3 -header -csv ./db.sqlite3 "select * from polls_sede;" > polls_sede.csv
sqlite3 -header -csv ./db.sqlite3 "select * from polls_trabajo;" > polls_trabajo.csv

