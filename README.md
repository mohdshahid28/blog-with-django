# iCoder - Blog Website

iCoder is a blog website built using **Django**. It allows users to read, create and manage blog posts with a clean and responsive interface.

The frontend of the website is developed using **Bootstrap**, and **TinyMCE** is used as a rich text editor for creating and editing blog content.

## 🚀 Features

* Blog website built with Django
* Create and manage blog posts
* Rich text editor using TinyMCE
* Responsive frontend using Bootstrap
* User authentication
* Comment functionality
* Search functionality
* Django admin panel
* Media and image support
* SQLite3 database
* Clean and simple user interface

## 🛠️ Technologies Used

* Python
* Django
* Bootstrap
* HTML
* CSS
* JavaScript
* TinyMCE
* SQLite3

## 📂 Project Structure

```text
iCoder/
│
├── blog/
├── home/
├── iCoder/
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
cd iCoder
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

Install all required Python packages:

```bash
pip install -r requirements.txt
```

## 🗄️ Database Setup

Apply the database migrations:

```bash
python manage.py migrate
```

If you make changes to Django models, run:

```bash
python manage.py makemigrations
python manage.py migrate
```

## 🔐 Create Superuser

To access the Django admin panel, create a superuser:

```bash
python manage.py createsuperuser
```

Enter your username, email and password when prompted.

## ✍️ TinyMCE Setup

This project uses **TinyMCE** as a rich text editor for creating and editing blog posts.

Before using the rich text editor, you need to add your own **TinyMCE API key**.

Find the TinyMCE script in the project templates and replace the existing API key with your own API key.

You can get your API key from the TinyMCE website.

> **Note:** You only need to add your own TinyMCE API key before using the rich text editor.

## ▶️ Run the Project

Start the Django development server:

```bash
python manage.py runserver
```

Open the website in your browser:

```text
http://127.0.0.1:8000/
```

## 🔐 Admin Panel

The Django admin panel is available at:

```text
http://127.0.0.1:8000/admin/
```

Use the superuser credentials created with:

```bash
python manage.py createsuperuser
```

## 📦 Requirements

All required Python packages are listed in:

```text
requirements.txt
```

Install them using:

```bash
pip install -r requirements.txt
```

To update the requirements file:

```bash
pip freeze > requirements.txt
```

## 📝 Database

This project uses **SQLite3** as the database for development.

## 📌 Important Notes

Before running the project, make sure:

1. Python is installed on your system.
2. The virtual environment is activated.
3. Required packages are installed from `requirements.txt`.
4. Database migrations are applied.
5. Your TinyMCE API key is added.
6. A superuser is created if you want to access the Django admin panel.

## 👨‍💻 Author

**Mohd Shahid Ansari**

GitHub:
https://github.com/mohdshahid28

## 📄 License

This project is created for learning and development purposes.
