---
# layout: "../../layouts/Blog.astro"
title: "Getting Started with Python Virtual Environment"
description: "Python virtual environments allow you to install Python packages in an isolated location from the rest of your system instead of installing them system-wide."
pubdate: "Mar 06,2023"
tags: [Python, Virtual Environment]
author: "Bijoy Kar"
uuid: "blog-bijoy-kar.netlify.getting-started-with-python-virtual-environment"
heroImg: "/virtualenv.jpg"
authorHeadline: "Full Stack Developer | Student"
authorImgLink: "https://avatars.githubusercontent.com/u/85790967?v=4"
---

Hi everyone, I am Bijoy Kar. Thank you for reading Getting Started with Python Virtual Environment. Thank you to all of you for supporting me. I am quite active; I post daily on Twitter and LinkedIn so if you like then give me a follow.

---

## Introduction

A Python virtual environment is an isolated environment where you can install and manage packages and dependencies for your Python projects without affecting the system-wide Python installation or other projects.

In other words, a virtual environment allows you to create a separate sandboxed environment for each of your Python projects, each with its own set of Python libraries, without worrying about version conflicts or dependencies between projects.

Creating a virtual environment also allows you to work on multiple projects that have different Python version requirements on the same machine, as each virtual environment can have its own version of Python installed.

Python's built-in `venv` module allows you to create and manage virtual environments easily. Once you have created a virtual environment, you can activate it and use it as your default Python environment for that project.

## Get Started

1. Install the `virtualenv` python module by the following command:

```bash
pip install virtualenv
```

2. Open a terminal or command prompt, navigate to the directory where you want to create the virtual environment, and run the following command:

For Windows

```bash
virtualenv env
```

ForLinux

```bash
python3 -m venv env
```

This will create a new virtual environment named `env` in the current directory. You can give whatever name you prefer.

3. Once the virtual environment is created, you can activate it by running the following command:

```bash
# In cmd
env\Scripts\activate.bat
# In powershell
env\Scripts\Activate.ps1
```

For Linux:

```bash
source env/bin/activate
```

This will activate the virtual environment and change your prompt to indicate that you are now working inside the `env` environment.

4. You can now install Python packages and dependencies inside the virtual environment using pip, just like you would in a normal Python environment. For example, you can install the `numpy` package by running:

```bash
pip install numpy
```

When you are done working in the virtual environment, you can deactivate it by running:

```bash
deactivate
```

This will return you to your normal system environment.

That's it! You can now create and manage virtual environments for your Python projects, and keep your dependencies isolated and organized.

---

Hi everyone, I am Bijoy Kar. Thank you for reading Getting Started with Python Virtual Environment. Thank you to all of you for supporting me. I am quite active; I post daily on Twitter and LinkedIn so if you like then give me a follow.
