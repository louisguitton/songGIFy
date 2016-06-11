#!/usr/bin/env
# coding=utf-8

# http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho

import requests


def random(tags):
    endpoint = "http://api.giphy.com/v1/gifs/random"
    api_key = "dc6zaTOxFJmzC"
    built = endpoint + "?api_key=" + api_key + "&tag=" + "+".join(tags) + "&fmt=html"
    print built
    return built


def get_random_GIF():
    res = requests.get(random(["rabbit", "cartoon"]))

    with open("output.html", "r+") as outputfile:
        outputfile.write(res.content)


def translate(phrase):
    endpoint = "http://api.giphy.com/v1/gifs/translate"
    api_key = "dc6zaTOxFJmzC"
    built = endpoint + "?api_key=" + api_key + "&s=" + phrase.replace(" ", "+") + "&fmt=json&rating=r"
    print built
    return built


def get_translate_GIF():
    res = requests.get(translate("far away world"))

    with open("output.html", "r+") as outputfile:
        outputfile.write(res.content)


if __name__ == '__main__':
    get_translate_GIF()
