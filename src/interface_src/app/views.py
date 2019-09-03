from app import * #import app object and all default variables
from flask import Flask, flash, redirect, render_template, request, url_for, abort, jsonify, make_response

import pandas as pd
import datetime

last_update_time = datetime.datetime.now()
current_date = last_update_time.strftime("%A, %d %B %Y")

@app.route("/")
def search():
    response = make_response(render_template("/search.html",\
                                             current_date=current_date)), 200
    return response


@app.route('/rating/', methods=["POST"])
def rating():
    #function to get Ajax 
    response = request.get_json()
    client_addr = request.environ['REMOTE_ADDR']
    controller.rateNews(response["newsid"], response["rating"], client_addr)
    return make_response(jsonify(response)), 201


@app.route('/limit_interval/', methods=["POST"])
def limit_interval():
    #function to get start and end in python datatime 
    response = request.get_json()
    start = datetime.datetime.strptime(response['start'], '%Y-%m-%dT%H:%M:%S.%fZ')
    end = datetime.datetime.strptime(response['end'], '%Y-%m-%dT%H:%M:%S.%fZ')

    newsid_lst = newsfeed[(newsfeed['pubDate'] > start) & (newsfeed['pubDate'] <= end)]["newsid"].tolist()
    response = {"newsid_lst": newsid_lst}
    return make_response(jsonify(response)), 201


@app.errorhandler(400)
def bad_request(e):
    return render_template("/error.html", current_date=current_date ,err='400'), 403

@app.errorhandler(401)
def unauthorized(e):
    return render_template("/error.html", current_date=current_date,err='403'), 403

@app.errorhandler(403)
def forbidden(e):
    return render_template("/error.html", current_date=current_date,err='403'), 403

@app.errorhandler(404)
def page_not_found(e):
    return render_template("/error.html", current_date=current_date,err='404'), 404

@app.errorhandler(500)
def server_error(e):
    return render_template("/error.html", current_date=current_date,err='500'), 500

