 # iCoder - Blog Website

iCoder is a blog website built using **Django**. It allows users to read blog posts and provides a rich text editor for creating and managing blog content.

The frontend of the website is designed using **Bootstrap**, and **TinyMCE** is used as a rich text editor for creating and editing blog posts.

## 🚀 Features

* Blog website built with Django
* Create and manage blog posts
* Rich text editor using TinyMCE
* Responsive frontend using Bootstrap
* User authentication
* Comment functionality
* Search functionality
* Admin panel for managing blog content
* Clean and simple UI
* SQLite database for development

## 🛠️ Technologies Used

* **Python**
* **Django**
* **Bootstrap**
* **HTML**
* **CSS**
* **JavaScript**
* **TinyMCE**
* **SQLite3**

## 📂 Project Structure

```text
iCoder/
│
├── blog/
├── home/
├── templates/
├── static/
├── media/
├── manage.py
├── requirements.txt
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mohdshahid28/blog-with-django.git
```

Go inside the project folder:

```bash
cd blog-with-django
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate the virtual environment on Windows:

```bash
venv\Scripts\activate
```

### 3. Install Requirements

Install all required Python packages using:

```bash
pip install -r requirements.txt
```

### 4. Apply Database Migrations

```bash
python manage.py migrate
```

### 5. TinyMCE API Key

This project uses **TinyMCE** as a rich text editor.

To use TinyMCE, you need to add your own **TinyMCE API key** to the TinyMCE script in the project.

Find the TinyMCE script in the HTML template and replace the existing API key with your own key.

You can get an API key from the official TinyMCE website.

> **Note:** You only need to add your own TinyMCE API key before using the rich text editor.

### 6. Create Superuser

To access the Django admin panel, create a superuser:

```bash
python manage.py createsuperuser
```

Enter your username, email and password when prompted.

### 7. Run the Development Server

```bash
python manage.py runserver
```

Open the website in your browser:

```text
http://127.0.0.1:8000/
```

The Django admin panel can be accessed at:

```text
http://127.0.0.1:8000/admin/
```

## 📝 Requirements

The project dependencies are listed in:

```text
requirements.txt
```

To install them:

```bash
pip install -r requirements.txt
```

If you want to create/update the requirements file after installing packages:

```bash
pip freeze > requirements.txt
```

## 🗄️ Database

This project uses **SQLite3** as the database during development.

Django automatically uses the database configured in `settings.py`.

Run migrations whenever database changes are made:

```bash
python manage.py makemigrations
python manage.py migrate
```

## 👨‍💻 Author

**Mohd Shahid Ansari**

GitHub:
https://github.com/mohdshahid28

## 📌 Note

This project is created for learning and development purposes using Django, Bootstrap and TinyMCE.

Before running the project, make sure that:

1. Python is installed.
2. Required packages are installed from `requirements.txt`.
3. Database migrations are applied.
4. Your TinyMCE API key is added.
5. A superuser is created if you want to access the Django admin panel.
