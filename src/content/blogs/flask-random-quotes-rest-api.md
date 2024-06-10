---
# layout: "../../layouts/Blog.astro"
title: "How to make a random quotes API with flask"
description: "Here is an example of how you might create a simple REST API for generating random quotes using the Flask web framework in Python."
pubdate: "Jan 14,2023"
tags: [Flask, API, Python, REST]
author: "Bijoy Kar"
heroImg: "/rest-api.png"
uuid: "blog-bijoy-kar.netlify.app-how-to-make-a-random-quotes-api-with-flask"
authorHeadline: "Full Stack Developer | Student"
authorImgLink: "https://avatars.githubusercontent.com/u/85790967?v=4"
---

Hi, everyone I am Bijoy Kar. Thank you for reading How to make a random quotes API with flask. Thank you to all of you for supporting me. I am quite active, I post daily on Twitter and LinkedIn so if you like then give me a follow.

---

Here is an example of how you might create a simple REST API for generating random quotes using the Flask web framework in Python:

1.  Start by installing Flask using pip:

```cmd
pip install Flask
```

1.  Create a new file called app.py and import the Flask module:

```python
from flask import Flask, jsonify
```

1.  Create an instance of the Flask class and define a route for the root URL:

```python
app = Flask(__name__) @app.route("/")
```

1.  Define a function that will return a random quote when the root URL is accessed. For this example, you can hardcode a list of quotes and use the Python built-in random.choice() function to select one at random.

```python
import random quotes = [ {"author": "Albert Einstein", "quote": "Imagination is more important than knowledge."}, {"author": "Steve Jobs", "quote": "Design is not just what it looks like and feels like. Design is how it works."}, {"author": "Mark Twain", "quote": "The secret of getting ahead is getting started."}, {"author": "Mahatma Gandhi", "quote": "The weak can never forgive. Forgiveness is the attribute of the strong."} ]
@app.route("/")
def get_quote():
  quote = random.choice(quotes)
  return jsonify(quote)
```

1.  Lastly, you need to run the app.py file with flask command

```python
if __name__ == '__main__':
  app.run(debug=True)
```

Now if you run your app by typing flask run in your terminal and navigate to http://localhost:5000/ in your web browser, you should see a randomly-selected quote displayed in JSON format.
This is just a basic example, you can use external APIs, database or any other method to store quotes and generate random quotes based on the requirement. Additionally, you can add more functionality like filtering, pagination etc.

---

Thank you for reading this article, if like to read more of my article then subscribe my newsletter Weekly Coding Dose and give a follow. I post daily on LinkedIn and Twitter.
