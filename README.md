# myapi
```
git clone https://github.com/laudesj/myapi
cd myapi
nodemon
```

* localhost:9876/places : renvoie la liste des endroits enregistrés (GET)
* localhost:9876/place/:latitude/:longitude : ajoute un endroit selon une latitude et longitude (POST)

Avec curl :
```
$ curl -X GET http://localhost:9876/places
$ curl -X POST http://localhost:9876/place/48.859200/2.294489
```
Ou Postman (https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
