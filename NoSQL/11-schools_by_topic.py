#!/usr/bin/env python3
"""Returns the list of school having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """Returns a list where wanted topic"""
    return mongo_collection.find({"topic": topic})
