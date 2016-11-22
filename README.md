# KMAN

App structure:
  - `kman` -> `Django` Rest API backend;
  - `ReactFrontPage` -> ReactJS + Redux single page app;

How to run `kman`:
```sh
$ virtualenv -p $(which python3.5) venv
$ source venv/bin/activate
$ pip install -r requirements/dev.txt
$ tox
$ ./kman/manage.py migrate
$ ./kman/manage.py runserver
```

How to run `ReactFrontPage`:
```sh
$ cd ReactFrontPage
$ npm i
$ npm start
```
