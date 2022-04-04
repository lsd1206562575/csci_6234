# csci_6234
This repo is for csci_6234 Object-Oriented Design--GW Covid Dashboard. Our gourp member are Jie Zhu, Shudong Lai, Simin Liu, Wanting Wang.

## 1. Download project and Install requirement
```
# Install requirement
pip install -r requirement.txt
```

## 2. Run Server
Need to install Node.js first.
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
## 2. How to Generate new front-end pages?——这条给修改前端看的

```
cd tyadmin && npm run build && cd ../ #做完这个后照步骤2运行
```
