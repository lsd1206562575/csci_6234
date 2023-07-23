# csci_6234
This repo is for csci_6234 Object-Oriented Design--GW Covid Dashboard. Our gourp members are Jie Zhu, Shudong Lai, Simin Liu, Wanting Wang.

The [link](https://drive.google.com/drive/folders/17YHBnQ3X0gJxs0aTDj1K5PP_h-_42yda?usp=drive_link) for Slides and demo video

## 1. Download project and Install requirement
```
# Install requirement
pip install -r requirement.txt
```

## 2. Run Server
Need to install Node.js first.

if you don't have ./tyadmin/node_modules, you need to npm install first:
```

cd tyadmin && npm install && npm run build
```

Run server:
```

python manage.py createsuperuser # Create your superuser account, only need when you first run the project.
python manage.py runserver # dafault run in 8000 port
```

View http://127.0.0.1:8000/xadmin/ and sign in your account

# QA
## 1. How I add new model to generate new front and back?
```diff
+TY_ADMIN_CONFIG = {
+    'GEN_APPS': ['demo','new_app']
+}
```
Add your new app name and run the command below (Don't need new app name if you write new model in demo):
```
python manage.py gen_all && cd tyadmin && npm run build && cd ../
```
## 2. How to Generate new front-end pages?

```
cd tyadmin && npm run build && cd ../
```
