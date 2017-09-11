Command zur Ausführung: 
docker build https://github.com/chrismeteling/webprogrammierung.git#master:Vorlesung_WebProgrammierung/Aufgabe1 -t nodejs_aufgabe1 -f deployment/Dockerfile

docker run -p 80:8080 -d nodejs_aufgabe1 


Mach in jede Aufgabe ein Deployment Ordner wo alle Files fürs Deployment liegen (Dockerfile, server.js, package.json).

