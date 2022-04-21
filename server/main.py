import pdb
from sanic import Sanic
from sanic.response import text
from config import CONFIG


app = Sanic("senkoo_oa_app")
app.update_config(CONFIG)


@app.get("/")
async def hello_world(request):
    return text("Hello, world.")

app.run(host="0.0.0.0", port=1234, debug=app.config['DEBUG'])

# if __name__ == '__main__':
#     app.run(host="0.0.0.0", port=1234, debug=app.config['DEBUG'])